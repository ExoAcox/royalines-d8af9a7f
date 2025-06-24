import { logout } from "@features/login/functions";
import axiosInstance, { AxiosBasicCredentials } from "axios";
import { getCookie, setCookie } from "cookies-next";

declare module "axios" {
    export interface AxiosRequestConfig {
        skipAuthRefresh?: boolean;
    }
}

let isRefreshing = false;
let failedQueue: { resolve: (value: unknown) => void; reject: (reason?: unknown) => void }[] = [];

const processQueue = (error: null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (error?.response?.status === 401 && !originalRequest?._retry && !originalRequest?.skipAuthRefresh) {
            if (typeof window === "undefined") return;

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = "Bearer " + token;
                        return axiosInstance(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            console.warn("Access Token expired, getting new token ...");
            const token = await getCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY)

            const API_URL = process.env.NEXT_PUBLIC_API_URL
            const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION

            return new Promise((resolve) => {
                axiosInstance
                    .post(`${API_URL}/${API_VERSION}/users/refresh`, {}, {
                        headers: { Authorization: token },
                        skipAuthRefresh: true,
                    })
                    .then((response) => {
                        const data = response.data.data;
                        setCookie(process.env.NEXT_PUBLIC_TOKEN_KEY, data.access_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });
                        setCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY, data.refresh_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });
                        // originalRequest.headers["Authorization"] = "Bearer " + data.access_token;
                        processQueue(null, data.access_token);

                        const headers: { Authorization: string } = {
                            Authorization: "Bearer " + data.access_token,
                        };

                        originalRequest.headers = headers;
                        originalRequest._retry = true;
                        isRefreshing = true;

                        resolve(axiosInstance(originalRequest));
                    })
                    .catch((error) => {
                        console.warn(error);
                        // logout()
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    }
);

export const axios = axiosInstance;

export const token = () => {
    return getCookie(process.env.NEXT_PUBLIC_TOKEN_KEY);
};

export const header = (directToken?: string) => {
    return { Authorization: `Bearer ${directToken || token()}` };
};

export const catchHelper = (reject: (error: FetchError) => void, error: { response: { data: object } }) => {
    if (axiosInstance.isCancel(error)) return;
    console.warn(error?.response?.data || error);
    reject(error?.response?.data || { message: "Network error.", code: 500 });
};

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
            const refresh_token = getCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY!) as string;

            const params = new URLSearchParams();
            params.append("refresh_token", refresh_token);
            params.append("grant_type", "refresh_token");

            return new Promise((resolve) => {
                axiosInstance
                    .post(process.env.NEXT_PUBLIC_ACCOUNT_URL + `/users/v1/token/oauth`, params, {
                        headers: { apikey: process.env.NEXT_PUBLIC_API_KEY },
                        auth: {
                            username: process.env.NEXT_PUBLIC_MYSIIS_USERNAME,
                            password: process.env.NEXT_PUBLIC_MYSIIS_PASSWORD,
                        },
                        skipAuthRefresh: true,
                    })
                    .then(async (response) => {
                        const data = response.data.data;
                        setCookie(process.env.NEXT_PUBLIC_TOKEN_KEY, data.accessToken, { maxAge: 60 * 60 * 365, sameSite: "strict" });
                        setCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY, data.refreshToken, { maxAge: 60 * 60 * 365, sameSite: "strict" });
                        originalRequest.headers["Authorization"] = "Bearer " + data.accessToken;
                        processQueue(null, data.accessToken);

                        const headers: { Authorization: string; apikey?: string } = {
                            Authorization: "Bearer " + data.accessToken,
                        };

                        if (originalRequest.headers.apikey) {
                            headers.apikey = process.env.NEXT_PUBLIC_API_KEY;
                        }

                        originalRequest.headers = headers;
                        originalRequest._retry = true;
                        isRefreshing = true;

                        resolve(axiosInstance(originalRequest));
                    })
                    .catch((error) => {
                        console.warn(error);
                        logout()
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
    return getCookie(process.env.NEXT_PUBLIC_TOKEN_KEY!);
};

export const header = (directToken?: string) => {
    return { Authorization: `Bearer ${directToken || token()}`, apikey: process.env.NEXT_PUBLIC_API_KEY };
};

export const catchHelper = (reject: (error: FetchError) => void, error: { response: { data: object } }) => {
    if (axiosInstance.isCancel(error)) return;
    console.warn(error?.response?.data || error);
    reject(error?.response?.data || { message: "Network error.", code: 500 });
};

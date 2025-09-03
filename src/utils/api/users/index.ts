/* eslint-disable @typescript-eslint/no-unused-vars */
import { axios, catchHelper, header } from "@libs/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse extends User {
    access_token: string;
    refresh_token: string;
}


let loginController: AbortController;
export const login = (payload: LoginPayload): Promise<LoginResponse> => {
    if (loginController) loginController.abort();
    loginController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/users/login`, payload, {
    //             signal: loginController.signal,
    //             skipAuthRefresh: true,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve({
        access_token: "",
        refresh_token: "",
        user_id: 1,
        fullname: "Admin",
        email: "admin@royalines.id",
        roles: [{
            RoleId: 1,
            RoleName: "",
            CreatedAt: "",
            UpdatedAt: "",
            DeletedAt: "",
            UserRoles: {},
        }]
    })
};

export interface RegisterPayload {
    fullname: string;
    email: string;
    password: string;
    confirm_password: string;
}


let registerController: AbortController;
export const register = (payload: RegisterPayload): Promise<unknown> => {
    if (registerController) registerController.abort();
    registerController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/users/register`, payload, {
    //             signal: registerController.signal,
    //             skipAuthRefresh: true,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve({})
};


let refreshController: AbortController;
export const refreshToken = (token: string): Promise<LoginResponse> => {
    if (refreshController) refreshController.abort();
    refreshController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/token/refresh`, {}, {
    //             headers: header(token),
    //             signal: refreshController.signal,
    //             skipAuthRefresh: true,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve({
        access_token: "",
        refresh_token: "",
        user_id: 1,
        fullname: "Admin",
        email: "admin@royalines.id",
        roles: [{
            RoleId: 1,
            RoleName: "",
            CreatedAt: "",
            UpdatedAt: "",
            DeletedAt: "",
            UserRoles: {},
        }]
    })
};



let logoutController: AbortController;
export const logoutToken = (token: string): Promise<unknown> => {
    if (logoutController) logoutController.abort();
    logoutController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/users/logout`, {}, {
    //             headers: { Authorization: token },
    //             signal: logoutController.signal,
    //             skipAuthRefresh: true,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve({})
};
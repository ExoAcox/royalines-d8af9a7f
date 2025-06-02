import { axios, catchHelper } from "@libs/axios";

export interface RequestDemo {
    name: string;
    email: string;
    phone: string;
    description: string;
}

export const requestDemo = (args: RequestDemo): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        axios
            .post(`https://api-ebis-analytics-stg.mygears.io/api/customer-experience/v1/request-demo`, args)
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

export interface RequestUsecase extends RequestDemo {
    institution: string;
    institution_field: string;
}

export const requestUsecase = (args: RequestDemo): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        axios
            .post(`https://api-ebis-analytics-stg.mygears.io/api/customer-experience/v1/request-usecase`, args)
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

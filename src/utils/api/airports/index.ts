import { axios, catchHelper } from "@libs/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION


export interface GetAirports {
    search?: string;
    "country[ilike]"?: string;
}

export interface Airport {
    airport_id: number,
    airport_name: string,
    airport_iata: string,
    city: string,
    country: string
}

let airportsController: AbortController;
export const getAirports = (params?: GetAirports): Promise<Airport[]> => {
    if (airportsController) airportsController.abort();
    airportsController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/${API_VERSION}/airports`, {
                params,
                signal: airportsController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

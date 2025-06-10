



import { axios, catchHelper, header } from "@libs/axios";

export interface GetAirports {
    search?: string;
}

export interface Airport {
    id: number,
    airport_name: string,
    airport_iata: string,
    city: string,
    country: string
}

let airportsController: AbortController;
export const getAirports = (params?: GetAirports): Promise<{ airports: Airport[] }> => {
    if (airportsController) airportsController.abort();
    airportsController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .get(process.env.NEXT_PUBLIC_API_URL + `/airports`, {
                params,
                headers: header(),
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

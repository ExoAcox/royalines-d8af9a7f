<<<<<<< Updated upstream
import { axios, catchHelper, header } from "@libs/axios";
=======
/* eslint-disable @typescript-eslint/no-unused-vars */
import { axios, catchHelper } from "@libs/axios";
>>>>>>> Stashed changes

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

    // return new Promise((resolve, reject) => {
    //     axios
    //         .get(`${API_URL}/${API_VERSION}/airports`, {
    //             params,
    //             signal: airportsController.signal,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve([
        {
            "airport_id": 1,
            "airport_name": "Dhoho International Airport",
            "airport_iata": "DHX",
            "city": "Kediri",
            "country": "Indonesia"
        }, {
            "airport_id": 2,
            "airport_name": "King Abdulaziz International Airport",
            "airport_iata": "JED",
            "city": "Jeddah",
            "country": "Kingdom of Saudi Arabia"
        }])
};





import { axios, catchHelper, header } from "@libs/axios";


export interface Date {
    year: number;
    month: number;
    available_dates: number[]
}

let datesController: AbortController;
export const getDates = (): Promise<{ dates: Date[] }> => {
    if (datesController) datesController.abort();
    datesController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .get(process.env.NEXT_PUBLIC_API_URL + `/dates`, {
                headers: header(),
                signal: datesController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

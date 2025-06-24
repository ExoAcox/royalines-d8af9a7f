import { GetAirports, getAirports, getDates, GetDates, getFlightSchedules, GetFlightSchedules, checkoutFlight, CheckoutFlight } from "@api/flights";
import { useMutation, useQuery } from "@tanstack/react-query";



export const useGetAirports = (args?: GetAirports, enabled?: boolean) => {
    return useQuery({
        queryKey: ["flights/getAirports", args],
        queryFn: () => getAirports(args),
        enabled
    });
};

export const useGetDates = (args: GetDates) => {
    return useQuery({
        queryKey: ["flights/getDates", args],
        queryFn: () => getDates(args),
    });
};

export const useGetFlightSchedules = (args: GetFlightSchedules) => {
    return useQuery({
        queryKey: ["flights/getFlighSchedules", args],
        queryFn: () => getFlightSchedules(args),
    });
};

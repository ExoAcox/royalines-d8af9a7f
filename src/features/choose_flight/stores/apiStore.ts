import { getDates, GetDates, getFlightSchedules, GetFlightSchedules } from "@api/flights";
import { GetAirports, getAirports, } from "@api/airports"
import { useQuery } from "@tanstack/react-query";



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

import { GetAirports, getAirports } from "@api/airport";
import { getDates } from "@api/date";
import { bookingFlight, BookingFlight, getFlightSchedules, GetFlightSchedules, } from "@api/flight";
import { useMutation, useQuery } from "@tanstack/react-query";



export const useGetAirports = (args?: GetAirports) => {
    return useQuery({
        queryKey: ["airport/getAirports"],
        queryFn: () => getAirports(args),
    });
};

export const useGetDates = () => {
    return useQuery({
        queryKey: ["date/getDates"],
        queryFn: () => getDates(),
    });
};

export const useGetFlightSchedules = (args: GetFlightSchedules) => {
    return useQuery({
        queryKey: ["flights/getFlighSchedules"],
        queryFn: () => getFlightSchedules(args),
    });
};

export const useBookingFlight = () => {
    return useMutation({
        mutationKey: ["flights/bookingFlight"],
        mutationFn: (args: BookingFlight) => bookingFlight(args),
    });
};

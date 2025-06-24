import { CheckoutFlight, checkoutFlight, getAvailableSeats } from "@api/flights";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useGetAvailableSeats = (scheduleId: number) => {
    return useQuery({
        queryKey: ["flights/getAvailableSeats", scheduleId],
        queryFn: () => getAvailableSeats(scheduleId),
        enabled: !!scheduleId
    });
};

export const useCheckoutFlight = () => useMutation({
    mutationFn: (args: CheckoutFlight) => checkoutFlight(args)
});
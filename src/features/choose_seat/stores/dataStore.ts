import { FlightSchedule } from "@api/flights";
import { create } from "zustand"


export const useFlightScheduleStore = create<{ data?: FlightSchedule }>((set) => ({
    data: undefined,
    reset: () => set({ data: undefined }),
}));
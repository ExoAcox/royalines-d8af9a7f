import dayjs from "dayjs";
import { create } from "zustand"

export interface ChooseFlightStore {
    passengers: number;
    from: string;
    to: string;
    date: string;
    class: string;
}

const defaultChooseFlightStore = {
    passengers: 1,
    from: "Jakarta (CGK)",
    to: "Jeddah (JED)",
    date: dayjs().format("DDMMYYYY"),
    class: "Economy",
}

export const useChooseFlightStore = create<ChooseFlightStore>((set) => ({
    passengers: defaultChooseFlightStore.passengers,
    from: defaultChooseFlightStore.from,
    to: defaultChooseFlightStore.to,
    date: defaultChooseFlightStore.date,
    class: defaultChooseFlightStore.class,
    reset: () => set(defaultChooseFlightStore),
}));
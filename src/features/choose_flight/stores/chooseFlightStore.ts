import dayjs from "dayjs";
import { create } from "zustand"

export interface ChooseFlightStore {
    passenger: number;
    from: string;
    to: string;
    date: number;
    month: number;
    year: number;
    class: string;
}

const defaultChooseFlightStore = {
    passengers: 1,
    from: "Jakarta (CGK)",
    to: "Jeddah (JED)",
    date: 1,
    month: 12,
    year: 2025,
    class: "Economy",
}

export const useChooseFlightStore = create<ChooseFlightStore>((set) => ({
    passenger: defaultChooseFlightStore.passengers,
    from: defaultChooseFlightStore.from,
    to: defaultChooseFlightStore.to,
    date: defaultChooseFlightStore.date,
    month: defaultChooseFlightStore.month,
    year: defaultChooseFlightStore.year,
    class: defaultChooseFlightStore.class,
    reset: () => set(defaultChooseFlightStore),
}));
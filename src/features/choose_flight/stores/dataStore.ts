import { create } from "zustand"

export const indoAirports = [{
    "airport_id": 1,
    "airport_name": "Dhoho International Airport",
    "airport_iata": "DHX",
    "city": "Kediri",
    "country": "Indonesia"
},]

export const arabAirports = [{
    "airport_id": 2,
    "airport_name": "King Abdulaziz International Airport",
    "airport_iata": "JED",
    "city": "Jeddah",
    "country": "Kingdom of Saudi Arabia"
},
    // {
    //     "airport_id": 1234,
    //     "airport_name": "Prince Mohammad bin Abdulaziz International Airport",
    //     "airport_iata": "MED",
    //     "city": "Medina",
    //     "country": "Kingdom of Saudi Arabia"
    // }
]


export interface ChooseFlightStore {
    passenger: number;
    origin: Airport;
    destination: Airport;
    date: number;
    month: number;
    year: number;
    class: string;
    arabAirport: "departure" | "arrival";
    isRoundTrip: boolean;
    flightIdOutbound: number | null;
    flightIdInbound: number | null;
}

const defaultChooseFlightStore = {
    passengers: 1,
    origin: indoAirports[0],
    destination: arabAirports[0],
    date: 1,
    month: 12,
    year: 2025,
    class: "Economy",
    arabAirport: "arrival" as const,
    isRoundTrip: false,
    flightIdOutbound: null,
    flightIdInbound: null
}

export const useChooseFlightStore = create<ChooseFlightStore>((set) => ({
    passenger: defaultChooseFlightStore.passengers,
    origin: defaultChooseFlightStore.origin,
    destination: defaultChooseFlightStore.destination,
    date: defaultChooseFlightStore.date,
    month: defaultChooseFlightStore.month,
    year: defaultChooseFlightStore.year,
    class: defaultChooseFlightStore.class,
    arabAirport: defaultChooseFlightStore.arabAirport,
    isRoundTrip: defaultChooseFlightStore.isRoundTrip,
    flightIdOutbound: defaultChooseFlightStore.flightIdOutbound,
    flightIdInbound: defaultChooseFlightStore.flightIdInbound,
    reset: () => set(defaultChooseFlightStore),
}));
/* eslint-disable @typescript-eslint/no-unused-vars */
import { axios, catchHelper, header } from "@libs/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION


export interface Date {
    year: number;
    month: number;
    available_dates: number[]
}

export interface GetDates {
    year: number;
}

let datesController: AbortController;
export const getDates = (params: GetDates): Promise<Date[]> => {
    if (datesController) datesController.abort();
    datesController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .get(`${API_URL}/${API_VERSION}/flights/dates`, {
    //             params,
    //             signal: datesController.signal,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve([{
        year: 2026,
        month: 1,
        available_dates: [1, 5, 10, 15, 20, 25]
    }])
};

export interface FlightSchedule {
    flight_schedule_id: number;
    airline_id: number;
    iata_code: string;
    airline_name: string;
    flight_code: string;
    seat_maximum: number;
    departure_time_local: string; // ISO string: "YYYY-MM-DDTHH:mm:ssZ"
    arrival_time_local: string;   // ISO string
    seat_available: number;
    minimum_price: number;
    airport_origin: AirportSchedule;
    airport_destination: AirportSchedule;
}

export interface AirportSchedule {
    airport_id: number;
    airport_name: string;
    airport_iata: string;
    local_timezone: string; // e.g., "Asia/Jakarta"
}

export interface GetFlightSchedules {
    origin_airport_id: number;
    destination_airport_id: number;
    departure_date: string; // format: "YYYY-MM-DD"
    minimum_seat: number;
}

let schedulesController: AbortController;
export const getFlightSchedules = (payload: GetFlightSchedules): Promise<FlightSchedule[]> => {
    if (schedulesController) schedulesController.abort();
    schedulesController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/flights/schedules`, payload, {
    //             signal: schedulesController.signal,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve([{
        flight_schedule_id: 1,
        airline_id: 101,
        iata_code: "GA",
        airline_name: "Garuda Indonesia",
        flight_code: "GA123",
        seat_maximum: 180,
        departure_time_local: "2025-09-01T06:30:00+07:00",
        arrival_time_local: "2025-09-01T09:10:00+08:00",
        seat_available: 45,
        minimum_price: 1250000,
        airport_origin: {
            airport_id: 1,
            airport_name: "Soekarno-Hatta International Airport",
            airport_iata: "CGK",
            local_timezone: "Asia/Jakarta",
        },
        airport_destination: {
            airport_id: 2,
            airport_name: "Ngurah Rai International Airport",
            airport_iata: "DPS",
            local_timezone: "Asia/Makassar",
        },
    },
    {
        flight_schedule_id: 2,
        airline_id: 102,
        iata_code: "JT",
        airline_name: "Lion Air",
        flight_code: "JT456",
        seat_maximum: 200,
        departure_time_local: "2025-09-01T14:00:00+07:00",
        arrival_time_local: "2025-09-01T15:20:00+07:00",
        seat_available: 80,
        minimum_price: 650000,
        airport_origin: {
            airport_id: 3,
            airport_name: "Juanda International Airport",
            airport_iata: "SUB",
            local_timezone: "Asia/Jakarta",
        },
        airport_destination: {
            airport_id: 4,
            airport_name: "Sultan Hasanuddin International Airport",
            airport_iata: "UPG",
            local_timezone: "Asia/Makassar",
        },
    },
    {
        flight_schedule_id: 3,
        airline_id: 103,
        iata_code: "QZ",
        airline_name: "Indonesia AirAsia",
        flight_code: "QZ789",
        seat_maximum: 180,
        departure_time_local: "2025-09-02T09:45:00+07:00",
        arrival_time_local: "2025-09-02T11:30:00+07:00",
        seat_available: 120,
        minimum_price: 550000,
        airport_origin: {
            airport_id: 5,
            airport_name: "Kualanamu International Airport",
            airport_iata: "KNO",
            local_timezone: "Asia/Jakarta",
        },
        airport_destination: {
            airport_id: 6,
            airport_name: "Soekarno-Hatta International Airport",
            airport_iata: "CGK",
            local_timezone: "Asia/Jakarta",
        },
    },])
};

export interface AvailableSeats {
    flight_seat_layout: FlightSeatLayout;
    seats: Seat[];
}

export interface FlightSeatLayout {
    flight_seat_layout_id: number;
    flight_id: number;
    numbering: number[];
    layouts: Layout[];
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
}

interface Seat {
    flight_seat_id: number;
    seat_number: string;
    class_name: string;
    price: string;
    currency: string;
    seat_status: "locked" | "available"
}


export interface Layout {
    alphabet: string[];
    column: number[];
    row: number;
    class_type: string;
}


let availableSeatsController: AbortController;
export const getAvailableSeats = (scheduleId: number): Promise<AvailableSeats> => {
    if (availableSeatsController) availableSeatsController.abort();
    availableSeatsController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .get(`${API_URL}/${API_VERSION}/flights/schedules/${scheduleId}/available-seats`, {
    //             headers: header(),
    //             signal: availableSeatsController.signal,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });


    return Promise.resolve({
        flight_seat_layout: {
            flight_seat_layout_id: 1,
            flight_id: 1,

            numbering: [1, 2, 3, 4, 10, 11, 12, 99, 21, 22, 23, 24, 25],
            layouts: [{
                alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
                column: [2, 4, 2],
                row: 2,
                class_type: "economy"
            },
            {
                alphabet: ["X", "Y", "Z", "M", "N", "O", "Q", "V"],
                column: [2, 2, 2],
                row: 3,
                class_type: "economy"
            },
            {
                alphabet: ["A", "B", "G", "H"],
                column: [2, 0, 0, 0, 2],
                row: 3,
                class_type: "economy"
            },
            {
                alphabet: ["A", "B", "C", "D", "E", "F"],
                column: [3, 0, 3],
                row: 5,
                class_type: "economy"
            }],

            created_at: "2025-08-20T10:00:00Z",
            updated_at: "2025-08-28T14:30:00Z",
        },
        seats: []
    })
};


export interface CheckoutFlight {
    flights: {
        flight_schedule_id: number;
        seats: number[]
    }[]

}

export interface CheckoutFlightResponse {
    flights: FlightSchedule[]
}

let checkoutFlightController: AbortController;
export const checkoutFlight = (payload: CheckoutFlight): Promise<CheckoutFlightResponse> => {
    if (checkoutFlightController) checkoutFlightController.abort();
    checkoutFlightController = new AbortController();

    // return new Promise((resolve, reject) => {
    //     axios
    //         .post(`${API_URL}/${API_VERSION}/flights/schedules/checkout`, payload, {
    //             headers: header(),
    //             signal: checkoutFlightController.signal,
    //         })
    //         .then((response) => {
    //             resolve(response.data.data);
    //         })
    //         .catch((error) => {
    //             catchHelper(reject, error);
    //         });
    // });

    return Promise.resolve({
        flights: [{
            flight_schedule_id: 1,
            airline_id: 101,
            iata_code: "GA",
            airline_name: "Garuda Indonesia",
            flight_code: "GA123",
            seat_maximum: 180,
            departure_time_local: "2025-09-01T06:30:00+07:00",
            arrival_time_local: "2025-09-01T09:10:00+08:00",
            seat_available: 45,
            minimum_price: 1250000,
            airport_origin: {
                airport_id: 1,
                airport_name: "Soekarno-Hatta International Airport",
                airport_iata: "CGK",
                local_timezone: "Asia/Jakarta",
            },
            airport_destination: {
                airport_id: 2,
                airport_name: "Ngurah Rai International Airport",
                airport_iata: "DPS",
                local_timezone: "Asia/Makassar",
            },
        }]
    })
};

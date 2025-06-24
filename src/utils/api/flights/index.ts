import { axios, catchHelper, header } from "@libs/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION


export interface GetAirports {
    search?: string;
}

export interface Airport {
    airport_id: number,
    airport_name: string,
    airport_iata: string,
    city: string,
    country: string
}

let airportsController: AbortController;
export const getAirports = (params?: GetAirports): Promise<{ airports: Airport[] }> => {
    if (airportsController) airportsController.abort();
    airportsController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/${API_VERSION}/flights/airports`, {
                params,
                signal: airportsController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

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

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/${API_VERSION}/flights/dates`, {
                params,
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

    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/${API_VERSION}/flights/schedules`, payload, {
                signal: schedulesController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
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

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}/${API_VERSION}/flights/schedules/${scheduleId}/available-seats`, {
                headers: header(),
                signal: availableSeatsController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
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

    return new Promise((resolve, reject) => {
        axios
            .post(`${API_URL}/${API_VERSION}/flights/schedules/checkout`, payload, {
                headers: header(),
                signal: checkoutFlightController.signal,
            })
            .then((response) => {
                resolve(response.data.data);
            })
            .catch((error) => {
                catchHelper(reject, error);
            });
    });
};

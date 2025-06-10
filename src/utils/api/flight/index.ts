



import { axios, catchHelper, header } from "@libs/axios";

export interface GetFlightSchedules {
    seat: number; // minimum seat available
    airport_origin_id: number;
    airport_destination_id: number;
    depart_date: string; // in format YYYY-MM-DD
    flight_class?: 'economy'; // optional, only 'economy' supported for now
    airline_id?: number; // optional, currently only supports specific airline like RJA
    departure_time_type?: 'early_morning' | 'morning' | 'afternoon' | 'evening';
    price_min?: number;
    price_max?: number;
    sort_by?: 'price' | 'departure_time' | 'arrival_time' | 'flight_duration';
    sort_value?: 'low' | 'high';
}

interface Airport {
    airport_id: number;
    airport_name: string;
    airport_iata: string;
    local_timezone: string;
}

export interface FlightSchedule {
    flight_schedule_id: number;
    airline_id: number;
    airline_name: string;
    flight_code: string;
    minimum_price: number;
    seat_available: number;
    seat_maximum: number;
    departure_time_utc: string;
    arrival_time_utc: string;
    airport_origin: Airport;
    airport_destination: Airport;
}



let schedulesController: AbortController;
export const getFlightSchedules = (params: GetFlightSchedules): Promise<{ flight_schedules: FlightSchedule[] }> => {
    if (schedulesController) schedulesController.abort();
    schedulesController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .get(process.env.NEXT_PUBLIC_API_URL + `/flights/schedules`, {
                params,
                headers: header(),
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

export interface Passenger {
    flight_seat_id: number;
    passanger_type: 'adult' | 'child' | 'infant';
    fullname: string;
    nationality: string;
    date_of_birth: string; // format: YYYY-MM-DD
    gender: 'male' | 'female';
    document_type: 'passport' | 'ktp' | 'other';
    document_number: string;
}

export interface BookingFlight {
    flight_schedule_id: number;
    class: 'economy'; // saat ini hanya mendukung "economy"
    payment_type: 'full' | 'installment'; // tambahkan opsi lain jika diperlukan
    seat_adult_qty: number;
    seat_child_qty: number;
    seat_infant_qty: number;
    seat_qty: number;
    flight_seat_ids: string[]; // array of seat ID dalam bentuk string
    flight_seat_with_passanger: Passenger[]
}

export interface BookingFlightResponse {
    bookingCode: string;
    payment_info: {
        invoice_url: string;
    }
}

export const bookingFlight = (args: BookingFlight): Promise<BookingFlightResponse> => {
    if (schedulesController) schedulesController.abort();
    schedulesController = new AbortController();

    return new Promise((resolve, reject) => {
        axios
            .post(process.env.NEXT_PUBLIC_API_URL + `/flights/bookings`, args, {
                headers: header(),
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
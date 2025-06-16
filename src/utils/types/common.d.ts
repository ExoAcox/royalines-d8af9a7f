interface Data<Value> {
    data: Value;
    status: DataStatus;
    error?: DataError | null;
}
type SetData<Value> = (data: Data<Value>) => void;

type FetchError = {
    message?: string;
    code?: number;
} | null;


type Device = "mobile" | "tablet" | "desktop";

type Locale = "id" | "en";


interface User {
    fullname: string;
}

interface Page {
    user?: User;
    device?: Device;
}

interface Server {
    params: Promise<{
        lang: Locale;
    }>;
}


interface Airport {
    airport_id: number;
    airport_name: string;
    airport_iata: string;
    city: string;
    country: string
}
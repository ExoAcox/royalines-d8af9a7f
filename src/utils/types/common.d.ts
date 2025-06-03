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

interface Store<Value> extends Data<Value> {
    set: (data: Data<Value>) => void;
    reset: () => void;
}

interface SetStore<Value> {
    set: (data: Value) => void;
    reset: () => void;
}

type Device = "mobile" | "tablet" | "desktop";

type Locale = "id" | "en";

type Dictionary = Record<string, Payload>;

interface Page {
    device: Device;
}

interface Server {
    params: Promise<{
        lang: Locale;
    }>;
}

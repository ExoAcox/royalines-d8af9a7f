export const errorHelper = (error: unknown): FetchError => {
    if (error instanceof Error || typeof error === "object") {
        return error;
    } else {
        return { message: String(error) };
    }
};

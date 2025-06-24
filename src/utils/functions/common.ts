import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(duration)
dayjs.extend(customParseFormat)

export const errorHelper = (error: unknown): FetchError => {
    if (error instanceof Error || typeof error === "object") {
        return error;
    } else {
        return { message: String(error) };
    }
};


export const convertCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value)
}

export const parseCurrency = (value: string) => {
    return Number(value.replace(/[^0-9,-]+/g, '').replace(',', '.'));
}

export const getEstimatedTime = (arg1: string, arg2: string) => {
    const time1 = dayjs(dayjs(arg2).format("HH:mm"), 'HH:mm')
    const time2 = dayjs(dayjs(arg1).format("HH:mm"), 'HH:mm')

    const diffInMinutes = time1.diff(time2, 'minute')
    const durationDiff = dayjs.duration(diffInMinutes, 'minutes')

    const hours = Math.floor(durationDiff.asHours())
    const minutes = durationDiff.minutes()

    return `${hours}h ${minutes}m`
}
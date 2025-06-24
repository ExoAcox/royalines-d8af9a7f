import { AirportSchedule } from "@api/flights";
import { getEstimatedTime } from "@functions/common";
import { tw } from "@functions/style";
import dayjs from "dayjs";
import 'dayjs/locale/id'

dayjs.locale('id')



interface Props {
    departureTime?: string;
    arrivalTime?: string;
    originAirport?: AirportSchedule;
    destinationAirport?: AirportSchedule;
    className?: string;
}

const FlightInfoCard: React.FC<Props> = ({ className, departureTime, arrivalTime, originAirport, destinationAirport }) => {

    const formatDate = (date?: string) => {
        return dayjs(date).format('dddd, DD MMM YYYY')
    }

    return <div className={tw("flex items-center gap-4", className)}>
        <div className="flex flex-col gap-1">
            <label className="font-bold -mb-0.5">{dayjs(departureTime).format("HH:mm")}</label>
            <span className="text-xs">{`${originAirport?.airport_name} (${originAirport?.airport_iata})`}</span>
            <span className="text-2xs text-grey-80">{formatDate(departureTime)}</span>
        </div>
        <div className="flex-1 flex flex-col text-grey-70 text-xs items-center gap-1 w-28">
            <span>{getEstimatedTime(departureTime!, arrivalTime!)}</span>
            <div className="relative w-full">
                <div className="w-full h-[1px] bg-grey-80 -translate-y-[0px]" />
            </div>
            <span>Direct</span>
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-bold -mb-0.5">{dayjs(arrivalTime).format("HH:mm")}</label>
            <span className="text-xs">{`${destinationAirport?.airport_name} (${destinationAirport?.airport_iata})`}</span>
            <span className="text-2xs text-grey-80">{formatDate(arrivalTime)}</span>
        </div>
    </div>
}

export default FlightInfoCard


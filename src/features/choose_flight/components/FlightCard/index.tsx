import { Button, Chip } from "@components/button";

import Image from "next/image"

import Logo from "@images/bitmap/logo.png"
import { FlightSchedule } from "@api/flights";
import dayjs from "dayjs";
import { convertCurrency, getEstimatedTime } from "@functions/common";

interface Props {
    data: FlightSchedule
    onClick: () => void
}

const FlightCard: React.FC<Props> = ({ data, onClick }) => {
    return <div className="bg-white rounded-2xl p-3 shadow">
        <div className="pb-4 mb-4 border-b border-base-border flex items-center gap-4">
            <div className="flex flex-col gap-1">
                <label className="font-bold">{dayjs(data.departure_time_local).format("HH:mm")}</label>
                <span className="text-xs">{data.airport_origin.airport_iata}</span>
            </div>
            <div className="flex flex-col text-grey-70 text-xs items-center gap-1">
                <span>{getEstimatedTime(data.departure_time_local, data.arrival_time_local)}</span>
                <div className="relative">
                    <div className="w-[8rem] h-[1px] bg-grey-80 -translate-y-[0px]" />
                    {/* <TiArrowRight className="absolute right-0 -top-2 fill-grey-80" /> */}
                </div>
                <span>Direct</span>
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-bold">{dayjs(data.arrival_time_local).format("HH:mm")}</label>
                <span className="text-xs">{data.airport_destination.airport_iata}</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
                <label className="text-sm text-primary font-bold">{convertCurrency(data.minimum_price)}</label>
                <span className="text-xs text-grey-70">/pax</span>
            </div>
        </div>
        <div className="flex gap-2 items-center">
            <div className="rounded-sm w-10 h-10 relative">
                <Image src={Logo} alt="" fill={true} className="object-contain" />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm">{data.airline_name}</label>
                <span className="text-grey-80 text-xs">{data.flight_code}</span>
            </div>
            <Chip className="ml-auto" disabled>{`Seats Available: ${data.seat_available} of ${data.seat_maximum}`}</Chip>
            <Button className="h-8 text-xs" onClick={onClick} disabled={!data.seat_available}>Select</Button>
        </div>
    </div>
}

export default FlightCard
import { BackButton } from "@components/button"
import { AirlineInfoCard, FlightInfoCard } from "@components/card"
import { Responsive } from "@components/layout"
import { FlightSchedule } from "@api/flights"




interface Props {
    data?: FlightSchedule
}

const TopBar: React.FC<Props> = ({ data }) => {
    return <Responsive className="bg-white" parentClassName="border-b">
        <div className="flex items-center gap-3 h-[4.5rem]">
            <button className="flex items-center gap-2">
                <BackButton />
                <label className="text-2xl font-bold text-left leading-6">Select seat number</label>
            </button>
            <AirlineInfoCard className="ml-auto pr-3 border-r w-[14rem]" name={data?.airline_name} code={data?.flight_code} flightClass={"Economy"} />
            <FlightInfoCard className="min-w-[24rem]" departureTime={data?.departure_time_local} arrivalTime={data?.arrival_time_local} originAirport={data?.airport_origin} destinationAirport={data?.airport_destination} />
        </div>
    </Responsive>
}

export default TopBar
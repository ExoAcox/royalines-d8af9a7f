
import { Chip } from "@components/button";
import { TextField } from "@components/input";
import { LuTicketCheck } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";


interface Props {

}

const FlightHeader: React.FC<Props> = ({ }) => {
    return <div className="text-black mb-4">
        <div className="flex items-center gap-3">
            <LuTicketCheck className="w-6 h-6 ml-4" />
            <h4 className="mr-auto">Royal Flight</h4>
            <TextField prefix={<IoSearch />} className="w-[22.5rem]" />
        </div>
        <div className="flex gap-24 mt-5">
            <div>
                <label className="text-sm font-bold">Flight Status</label>
                <div className="flex gap-2 mt-2">
                    <Chip color="green">All Status</Chip>
                    <Chip>Ticket Released</Chip>
                    <Chip>Fully Paid</Chip>
                    <Chip>Booked</Chip>
                </div>
            </div>
            <div>
                <label className="text-sm font-bold">Ticket Status</label>
                <div className="flex gap-2 mt-2">
                    <Chip color="green">All Status</Chip>
                    <Chip>Scheduled</Chip>
                    <Chip>Planned</Chip>
                    <Chip>Delayed</Chip>
                    <Chip>Cancelled</Chip>
                </div>
            </div>
        </div>
    </div>
}

export default FlightHeader
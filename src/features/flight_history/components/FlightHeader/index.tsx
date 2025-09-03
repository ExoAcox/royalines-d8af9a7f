
import { Chip } from "@components/button";
import { TextField } from "@components/input";
import { LuTicketCheck } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { tw } from "@functions/style";
import { ActiveTab } from "@app/my_flight/client";


interface Props {
    activeTab: ActiveTab
    onClick: (value: ActiveTab) => void
}

const FlightHeader: React.FC<Props> = ({ activeTab }) => {

    const activeClassName = "text-grey-90 border-b-2 border-primary relative z-[2]"

    return <div className="text-black mb-4">
        <div className="flex items-center gap-3">
            <LuTicketCheck className="w-6 h-6 ml-3" />
            <h4 className="mr-auto">Royal Flight</h4>
        </div>
        <div className="text-grey-60 font-semibold relative mb-5 mt-6">
            <button className={tw("px-4 py-2", activeTab === "waiting_payment" && activeClassName)}>Waiting for Payment</button>
            <button className={tw("px-4 py-2", activeTab === "booked" && activeClassName)}>Booked</button>
            <button className={tw("px-4 py-2", activeTab === "fully_paid" && activeClassName)}>Fully Paid</button>
            <button className={tw("px-4 py-2", activeTab === "ticket_issued" && activeClassName)}>Ticket Issued</button>
            <div className="absolute w-full h-[2px] bg-grey-60 -mt-[2px]" />
        </div>
        <div className="flex gap-4 items-end justify-between">
            {/* <div>
                <label className="text-sm font-bold">Flight Status</label>
                <div className="flex gap-2 mt-2">
                    <Chip color="green">All Status</Chip>
                    <Chip>Ticket Released</Chip>
                    <Chip>Fully Paid</Chip>
                    <Chip>Booked</Chip>
                </div>
            </div> */}
            <div>
                <label className="text-sm font-bold">Flight Status</label>
                <div className="flex gap-2 mt-2">
                    <Chip color="green">All Status</Chip>
                    <Chip>Scheduled</Chip>
                    <Chip>Planned</Chip>
                    <Chip>Delayed</Chip>
                    <Chip>Cancelled</Chip>
                </div>
            </div>
            <TextField prefix={<IoSearch />} className="w-[22.5rem]" />
        </div>
    </div>
}

export default FlightHeader
import { Chip } from "@components/button"
import { TextField } from "@components/input"
import { IoSearch } from "react-icons/io5"
import { MdCalendarMonth } from "react-icons/md"



interface Props {

}

const TopFilter: React.FC<Props> = ({ }) => {
    return <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-4">
            <TextField prefix={<IoSearch />} placeholder="Search Transaction" parentClassName="flex-1" />
            <TextField prefix={<MdCalendarMonth />} placeholder="Select Transaction Date" parentClassName="flex-1" />
        </div>
        <div className="flex gap-2">
            <Chip color="green">All Transcation</Chip>
            <Chip>Waiting for Payment</Chip>
            <Chip>Payment Failed</Chip>
            <Chip>Refund Requested</Chip>
            <Chip>Refund Sent</Chip>
        </div>
    </div>
}

export default TopFilter
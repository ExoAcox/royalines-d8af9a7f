
import { BackButton, Button, Chip } from "@components/button";
import { TextField } from "@components/input";
import { IoSearch } from "react-icons/io5";
import { PiSeatFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { WarningText } from "@components/text";


interface Props {

}

const FlightHeader: React.FC<Props> = ({ }) => {
    return <div>
        <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <div className="flex items-center gap-3">
                    <BackButton />
                    <h4>Passengers Data</h4>
                    <Chip disabled><PiSeatFill /> Remaining Seats: 100</Chip>
                </div>
                <TextField prefix={<IoSearch />} className="w-[22rem]" />
            </div>
            <Button><FaPlus />Add Passengers</Button>
        </div>
        <WarningText>Please complete all passenger information before managing their seats.</WarningText>
    </div>
}

export default FlightHeader
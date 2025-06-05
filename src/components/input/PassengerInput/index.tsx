import { CustomInput, TextField } from "@components/input";
import { IoPersonSharp } from "react-icons/io5";

import { FaMinus, FaPlus } from "react-icons/fa6";




interface Props {

}

const PassengerDropdown: React.FC<Props> = ({ }) => {
    return <CustomInput Icon={IoPersonSharp} label="Passenger"> <div className="flex gap-2 h-10 mt-1">
        <button className="border border-base-border w-10 h-10 rounded-sm flex-center"><FaMinus /></button>
        <input type="number" className="max-w-[3.75rem] border border-base-border text-center rounded-sm" />
        <button className="border border-base-border w-10 h-10 rounded-sm flex-center" ><FaPlus /></button>
    </div></CustomInput>
}

export default PassengerDropdown;
import { CustomInput } from "@components/input";
import { IoPersonSharp } from "react-icons/io5";

import { FaMinus, FaPlus } from "react-icons/fa6";




interface Props {
    passenger: number,
    onChange: (value: string) => void;
}

const PassengerDropdown: React.FC<Props> = ({ passenger, onChange }) => {
    return <CustomInput Icon={IoPersonSharp} label="Passenger"> <div className="flex gap-2 h-10 mt-1">
        <button className="border border-base-border w-10 h-10 rounded-sm flex-center" disabled={passenger <= 1} onClick={() => {
            onChange((passenger - 1).toString())
        }}><FaMinus /></button>
        <input type="number" className="max-w-[3.75rem] border border-base-border text-center rounded-sm" value={passenger.toString()} onChange={(e) => {
            onChange(e.target.value ? e.target.value : "")
        }} />
        <button className="border border-base-border w-10 h-10 rounded-sm flex-center" onClick={() => {
            onChange((passenger + 1).toString())
        }}><FaPlus /></button>
    </div></CustomInput>
}

export default PassengerDropdown;
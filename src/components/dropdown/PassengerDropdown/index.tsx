import { CustomInput, TextField } from "@components/input";
import useOverlay from "@hooks/useOverlay";
import { IoPersonSharp } from "react-icons/io5";
import { When } from "react-if";

import { FaChild, FaChildDress, FaChildReaching, FaMinus, FaPlus } from "react-icons/fa6";
import { IconType } from "react-icons";


interface ListProps {
    title: string;
    children: string;
    Icon: IconType;
}

const List: React.FC<ListProps> = ({ title, children, Icon }) => {
    return <div className="flex gap-2 py-4 border-b last:border-none">
        <Icon className="mt-1 fill-grey-70" />
        <div className="flex flex-col gap-1">
            <label className="text-sm font-bold">{title}</label>
            <span className="text-xs text-grey-70">{children}</span>
        </div>
        <div className="flex gap-2 h-10 ml-auto">
            <button className="border w-10 h-10 rounded-sm flex-center"><FaMinus /></button>
            <input type="number" className="max-w-[3.75rem] border text-center rounded-sm" />
            <button className="border w-10 h-10 rounded-sm flex-center" ><FaPlus /></button>
        </div>
    </div>
}



interface Props {

}

const PassengerDropdown: React.FC<Props> = ({ }) => {
    const [open, setOpen] = useOverlay("#dropdown-passenger")

    return <div className="relative flex-1" id="dropdown-passenger">
        <CustomInput Icon={IoPersonSharp} label="Passenger"><button onClick={() => setOpen(true)}>10 passenger(s)</button></CustomInput>
        <When condition={open}><div className="absolute w-[23.4375rem] z-[2] px-4 bg-white left-0 bottom-0 translate-y-full rounded-2xl shadow-lg">
            <List Icon={FaChild} title="Adult">Above 12 years old</List>
            <List Icon={FaChildDress} title="Child">From 2 to 12 years old</List>
            <List Icon={FaChildReaching} title="Baby">Below 2 years old</List>
        </div></When>
    </div>
}

export default PassengerDropdown;
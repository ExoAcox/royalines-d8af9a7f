import { CustomInput } from "@components/input";
import useOverlay from "@hooks/useOverlay";
import { IoPersonSharp } from "react-icons/io5";
import { When } from "react-if";



interface Props {

}

const PassengerDropdown: React.FC<Props> = ({ }) => {
    const [open, setOpen] = useOverlay("#dropdown-passenger")
    console.log(open)

    return <div className="relative flex-1" id="dropdown-passenger">
        <CustomInput Icon={IoPersonSharp} label="Passenger"><button onClick={() => setOpen(true)}>10 passenger(s)</button></CustomInput>
        <When condition={open}><div className="absolute w-[23.4375rem] z-[2] p-4 bg-white left-0 bottom-0 translate-y-full rounded-2xl shadow-lg">Ini</div></When>
    </div>
}

export default PassengerDropdown;
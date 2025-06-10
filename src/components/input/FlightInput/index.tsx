import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6"
import CustomInput from "../CustomInput"
import useModal from "@hooks/useModal"
import { tw } from "@functions/style";
import { useChooseFlightStore } from "@features/choose_flight/stores/chooseFlightStore";

interface ListProps {
    title: string;
    children: string;
    active?: boolean;
    onClick: () => void;
}

const List: React.FC<ListProps> = ({ title, children, active, onClick }) => {
    return <button className={tw("flex text-left w-full flex-col gap-1 py-3 px-4 border-b last:border-none", active && "bg-primary-bg")} onClick={onClick}>
        <label className="text-sm font-bold">{title}</label>
        <span className="text-xs text-grey-70">{children}</span>
    </button>
}


interface Props {
}

const FlightInput: React.FC<Props> = () => {
    const { setData } = useModal("select-airport-modal")
    const chooseFlightStore = useChooseFlightStore()
    const { origin, destination } = chooseFlightStore

    return <div className="flex" >
        <CustomInput Icon={FaPlaneDeparture} label="From"><button onClick={() => setData({ type: "departure" })}>{`${origin.city} (${origin.airport_iata})`}</button></CustomInput>
        <CustomInput Icon={FaPlaneArrival} label="To"><button onClick={() => setData({ type: "arrival" })}>{`${destination.city} (${destination.airport_iata})`}</button></CustomInput>
    </div >
}

export default FlightInput
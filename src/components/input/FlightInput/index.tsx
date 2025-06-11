import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6"
import CustomInput from "../CustomInput"
import useModal from "@hooks/useModal"
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore";

interface Props {
}

const FlightInput: React.FC<Props> = () => {
    const { setData } = useModal("select-airport-modal")
    const chooseFlightStore = useChooseFlightStore()
    const { origin, destination } = chooseFlightStore

    return <div className="flex" >
        <CustomInput Icon={FaPlaneDeparture} label="From"><button className="text-nowrap" onClick={() => setData({ type: "departure" })}>{`${origin.city} (${origin.airport_iata})`}</button></CustomInput>
        <CustomInput Icon={FaPlaneArrival} label="To"><button className="text-nowrap" onClick={() => setData({ type: "arrival" })}>{`${destination.city} (${destination.airport_iata})`}</button></CustomInput>
    </div >
}

export default FlightInput
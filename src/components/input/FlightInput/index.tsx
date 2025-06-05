import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6"
import CustomInput from "../CustomInput"
import useModal from "@hooks/useModal"

interface Props {

}

const FlightInput: React.FC<Props> = ({ }) => {
    const { setData } = useModal("select-airport-modal")

    return <div className="flex" >
        <CustomInput Icon={FaPlaneDeparture} label="From"><button onClick={() => setData({ type: "departure" })}>Jakarta (CGK)</button></CustomInput>
        <CustomInput Icon={FaPlaneArrival} label="To"><button disabled className="disabled:text-grey-60" onClick={() => setData({ type: "arrival" })}>Jeddah (JED)</button></CustomInput>
    </div >
}

export default FlightInput
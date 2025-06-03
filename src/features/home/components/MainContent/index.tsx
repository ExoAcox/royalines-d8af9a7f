import { Button } from "@components/button"

import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdEditCalendar } from "react-icons/md";
import { RiSofaFill } from "react-icons/ri";

import { CustomInput } from "@components/input";
import useModal from "@hooks/useModal";
import { PassengerDropdown } from "@components/dropdown";


interface Props {

}

const MainContent: React.FC<Props> = ({ }) => {
    const { setData } = useModal("select-airport-modal")

    return <div className="rounded-2xl p-4 bg-white">
        <h5 className="mb-6">Search Flight</h5>
        <div className="flex">
            <CustomInput Icon={FaPlaneDeparture} label="From"><button onClick={() => setData({ type: "departure" })}>Jakarta (CGK)</button></CustomInput>
            <CustomInput Icon={FaPlaneArrival} label="To"><button disabled className="disabled:text-grey-60" onClick={() => setData({ type: "arrival" })}>Jeddah (JED)</button></CustomInput>
        </div>
        <div className="flex py-5 my-3 border-b border-t border-grey-40">
            <CustomInput Icon={MdEditCalendar} label="Departure date">Jakarta (CGK)</CustomInput>
        </div>
        <div className="flex">
            <PassengerDropdown />
            <CustomInput Icon={RiSofaFill} label="Class"><button>Economy</button></CustomInput>
        </div>
        <Button className="w-full h-12 mt-5">Search</Button>
    </div>
}

export default MainContent
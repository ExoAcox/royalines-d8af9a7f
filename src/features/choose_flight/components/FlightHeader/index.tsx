import { FaPlaneDeparture, FaArrowRight } from "react-icons/fa6"

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { ChooseFlightStore } from "@features/choose_flight/stores/dataStore";
import { Button } from "@components/button";

import { LuArrowDownUp } from "react-icons/lu";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";



interface Props {
    data: ChooseFlightStore
}

const FlightHeader: React.FC<Props> = ({ data }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const back = () => {
        routerChange()
        router.back()
    }

    return <div className="shadow rounded-2xl">
        <div className="bg-primary relative text-white flex flex-col gap-6 items-center pt-6 pb-4 rounded-t-2xl">
            <button className="absolute flex-center top-4 left-4 w-8 h-8 border rounded-full" onClick={back}><IoIosArrowBack /></button>
            <label className="font-semibold flex items-center gap-2">{`${data.origin.city} (${data.origin.airport_iata})`} <FaArrowRight /> {`${data.destination.city} (${data.destination.airport_iata})`}</label>
            <div className="flex items-center gap-3">
                <FaPlaneDeparture className="w-6 h-6" />
                <span className="font-medium">
                    {data.passenger} passengers - {data.class}
                </span>
                <button className="w-6 h-6 rounded-full border border-white flex-center">
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>
        <div className="bg-white p-4 rounded-b-2xl">
            <Button className="ml-auto text-sm font-bold rounded-2xl px-3 py-1.5" variant="ghost"><LuArrowDownUp className="w-5 h-5 mr-1" /> Lowest price</Button>
        </div>
    </div>
}

export default FlightHeader
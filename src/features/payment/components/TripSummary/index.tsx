

import { FlightInfoCard } from "@components/card"
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";

import { GoArrowLeft } from "react-icons/go";


interface Props {

}

const TripSummary: React.FC<Props> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const back = () => {
        routerChange()
        router.back()
    }

    return <div className="bg-white rounded-t-2xl">
        <div className="flex items-center gap-2 p-3 border-b-2 border-base-border">
            <GoArrowLeft className="w-6 h-6 cursor-pointer" onClick={back} />
            <h5 className="font-semibold">Trip Summary</h5>
        </div>
        <div className="p-3">
            <FlightInfoCard />
            <div className="flex items-center pb-2 border-t border-base-border pt-3 mt-4 gap-3">
                <div className="w-10 h-10 bg-red-400 rounded" />
                <label className="text-sm font-semibold">Emirates Airlines</label>
                <span className="text-grey-80 text-2xs ml-auto">Economy</span>
            </div>
        </div>
    </div>
}

export default TripSummary
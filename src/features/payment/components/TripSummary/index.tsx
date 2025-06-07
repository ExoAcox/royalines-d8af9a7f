

import { BackButton } from "@components/button";
import { FlightInfoCard } from "@components/card"



interface Props {

}

const TripSummary: React.FC<Props> = ({ }) => {


    return <div className="bg-white rounded-t-2xl">
        <div className="flex items-center gap-2 p-3 border-b-2 border-base-border">
            <BackButton />
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
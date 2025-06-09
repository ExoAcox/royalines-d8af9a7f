import { BackButton } from "@components/button"
import { FlightInfoCard } from "@components/card"
import { Responsive } from "@components/layout"




interface Props {

}

const TopBar: React.FC<Props> = ({ }) => {
    return <Responsive className="bg-white" parentClassName="border-b">
        <div className="flex items-center gap-3 h-[4.5rem]">
            <button className="flex items-center gap-2">
                <BackButton />
                <label className="text-2xl font-bold">Select seat number</label>
            </button>
            <div className="gap-3 flex items-center ml-auto pr-3 border-r">
                <div className="w-10 h-10 bg-red-400 rounded" />
                <label className="text-sm font-semibold">Royal Jet Aviation</label>
                <span className="text-grey-80 text-2xs ml-auto">Economy</span>
            </div>
            <FlightInfoCard className="min-w-[24rem]" />
        </div>
    </Responsive>
}

export default TopBar
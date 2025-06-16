import { BackButton } from "@components/button"
import { AirlineInfoCard, FlightInfoCard } from "@components/card"
import { Responsive } from "@components/layout"
import Image from "next/image"

import Logo from "@images/bitmap/logo.png"




interface Props {

}

const TopBar: React.FC<Props> = ({ }) => {
    return <Responsive className="bg-white" parentClassName="border-b">
        <div className="flex items-center gap-3 h-[4.5rem]">
            <button className="flex items-center gap-2">
                <BackButton />
                <label className="text-2xl font-bold">Select seat number</label>
            </button>
            <AirlineInfoCard className="ml-auto pr-3 border-r" />
            <FlightInfoCard className="min-w-[24rem]" />
        </div>
    </Responsive>
}

export default TopBar
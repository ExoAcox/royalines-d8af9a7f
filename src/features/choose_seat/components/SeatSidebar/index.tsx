import { Chip } from "@components/button"
import { tw } from "@functions/style";

import { PiSeatFill } from "react-icons/pi";
import { When } from "react-if";


interface Props {
    passengers: {
        name: string;
        id: number;
        seat?: string
    }[]
    onClick: (index: number) => void
    passengerChoosenId: number | null;
}



const SeatSidebar: React.FC<Props> = ({ passengers, onClick, passengerChoosenId }) => {
    return <div className=" bg-white w-[31.25rem] h-full">
        <div className="flex items-center justify-between p-4">
            <label className="font-bold">Passengers</label>
        </div>
        <div className="flex flex-col gap-2">
            {passengers.map((passenger, index) => {
                const isActive = passenger.id === passengerChoosenId

                return <div key={passenger.id} onClick={() => onClick(passenger.id)} className={tw("cursor-pointer flex items-center gap-3 pl-10 py-2 pr-4 border-l-6 border-transparent", isActive && "bg-[#EFF8FF] border-[#0AA9FB]")}>
                    <div className={tw("rounded-full bg-grey-50 w-9 h-9 text-sm flex-center font-semibold", isActive && "bg-[#0AA9FB] text-white")}>{index + 1}</div>
                    <When condition={!!passenger.name}>
                        <span className="text-sm mr-auto">{passenger.name}</span>
                    </When>
                    <Chip disabled><PiSeatFill /> {passenger.seat ? passenger.seat : "Not Set"}</Chip>
                </div>
            })}
        </div>
    </div>
}

export default SeatSidebar
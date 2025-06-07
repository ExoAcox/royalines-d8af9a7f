import { Chip } from "@components/button"
import { tw } from "@functions/style";

import { PiSeatFill } from "react-icons/pi";


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
    return <div className="p-2 bg-white w-[31.25rem] h-full">
        <div className="flex items-center justify-between">
            <label className="font-bold">Seat Selected</label>
            <Chip disabled><PiSeatFill /> Remaining Seats: 100</Chip>
        </div>
        <div className="flex flex-col gap-2 ml-4 mt-3">
            {passengers.map((passenger, index) => {
                const isActive = passenger.id === passengerChoosenId

                return <div key={passenger.id} className="flex items-center gap-3">
                    <div className={tw("rounded-full bg-grey-50 w-9 h-9 text-sm border border-green-50 flex-center font-semibold", isActive && "bg-primary-bg border-primary")}>{index + 1}</div>
                    <Chip className={tw("cursor-pointer", isActive && "text-primary bg-primary-bg border-primary")} onClick={() => onClick(passenger.id)}><PiSeatFill /> {passenger.seat ? passenger.seat : "Haven't chosen a seat"}</Chip>
                </div>
            })}
        </div>
    </div>
}

export default SeatSidebar
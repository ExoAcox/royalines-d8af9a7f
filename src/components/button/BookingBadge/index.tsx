import { tw } from "@functions/style"
import { useMemo } from "react";

import { FaCircle } from "react-icons/fa";




interface Props {
    color: string
}

const BookingBadge: React.FC<Props> = ({ color }) => {

    const classNameFinal = tw(
        "flex gap-2 max-w-fit font-medium items-center text-xs rounded-[2.375rem] h-7 px-2 mx-auto",
        color === "green" && "text-[#259800] bg-[#F0FEED]",
        color === "blue" && "text-[#3083FF] bg-[#EDF5FE]",
        color === "red" && "text-[#A540B9] bg-[#FADFFF]"
    )

    const text = useMemo(() => {
        switch (color) {
            case "blue":
                return "Booked";
            case "red":
                return "Ticket Issued";
            default:
                return "Fully Paid"
        }
    }, [color])


    return <div onClick={() => {
    }} className={classNameFinal}><FaCircle className="w-2 h-2" />{text}</div>
}

export default BookingBadge
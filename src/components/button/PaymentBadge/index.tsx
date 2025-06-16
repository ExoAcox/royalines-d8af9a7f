import { tw } from "@functions/style"
import { useMemo } from "react";





interface Props {
    type: "success" | "failed" | "waiting" | "refund_failed" | "refund_waiting" | "refund_success"
}

const BookingBadge: React.FC<Props> = ({ type }) => {

    const classNameFinal = tw(
        "flex gap-2 max-w-fit font-semibold items-center border rounded-lg text-xs h-7 px-2",
        ["success", "refund_success"].includes(type) && "text-success-60 bg-success-20 border-success-40",
        ["waiting", "refund_waiting"].includes(type) && "text-warning-60 bg-warning-20 border-warning-40",
        ["failed", "refund_failed"].includes(type) && "text-error-60 bg-error-20 border-error-40"
    )

    const text = useMemo(() => {
        switch (type) {
            case "refund_waiting":
                return "Refund Requested";
            case "refund_failed":
                return "Refund Failed";
            case "refund_success":
                return "Refund Sent";
            case "waiting":
                return "Waiting for Payment";
            case "failed":
                return "Payment Failed";
            case "success":
                return "Success";
            default:
                return ""
        }
    }, [type])


    return <div onClick={() => {
    }} className={classNameFinal}>{text}</div>
}

export default BookingBadge
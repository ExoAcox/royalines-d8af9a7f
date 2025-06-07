import { useMemo } from "react";
import Button from "../Button"

import { PiAddressBook } from "react-icons/pi";
import { IoEye } from "react-icons/io5";
import { HiMiniTicket } from "react-icons/hi2";
import { IoMdCart } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { tw } from "@functions/style";
import useOverlay from "@hooks/useOverlay";
import { When } from "react-if";


interface Props {
    type: "fill_passenger" | "pay_full" | "send_ticket" | "view_receipt" | "edit_passenger" | "view_passenger";
    onClick?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    id?: string;
}

const ActionButton: React.FC<Props> = ({ type, onClick, onEdit, onDelete, id }) => {
    const iconClassName = "w-4 h-4"
    const className = tw("h-8 w-[9rem] text-xs")
    const variant = ["view_passenger", "view_receipt"].includes(type) ? "ghost" : "filled"

    const EditButton = () => {
        const [isOpen, setOpen] = useOverlay(`#${id}`)

        return <div id={id} className="relative">
            <Button className={className} variant={variant} onClick={() => setOpen(true)}><MdModeEdit className={iconClassName} /> Edit</Button>
            <When condition={isOpen}>
                <div className="text-xs flex flex-col w-full absolute -bottom-1 shadow translate-y-full bg-white z-[2] border rounded-md">
                    <button className="p-2 hover:bg-primary-bg border-b" onClick={() => {
                        setOpen(false);
                        if (onEdit) onEdit()
                    }}>Edit Data</button>
                    <button className="p-2 hover:bg-primary-bg" onClick={() => {
                        setOpen(false);
                        if (onDelete) onDelete()
                    }}>Delete</button>
                </div>
            </When>
        </div>
    }

    if (type === "edit_passenger") return <EditButton />


    const content = useMemo(() => {


        switch (type) {
            case "fill_passenger":
                return <><PiAddressBook className={iconClassName} /> Fill Passengers</>;
            case "pay_full":
                return <><IoMdCart className={iconClassName} /> Pay Full Now</>;
            case "send_ticket":
                return <><HiMiniTicket className={iconClassName} /> Send E-Ticket</>;
            case "view_receipt":
                return <><IoEye className={iconClassName} /> View Receipt</>
            case "view_passenger":
                return <><IoEye className={iconClassName} /> View Data</>
        }
    }, [type])

    return <Button className={className} variant={variant} onClick={onClick}>{content}</Button>
}

export default ActionButton
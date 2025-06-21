import Image, { StaticImageData } from "next/image"

import IconPlane from "@images/bitmap/icon-plane.png"
import IconTicket from "@images/bitmap/icon-ticket.png"
import IconHotel from "@images/bitmap/icon-hotel.png"
import IconVisa from "@images/bitmap/icon-visa.png"
import { tw } from "@functions/style"
import { When } from "react-if"
import React from "react"

interface ButtonProps {
    src: StaticImageData
    children: React.ReactNode
    active?: boolean
    soon?: boolean
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ src, children, active, soon, onClick }) => {
    return <button className={tw("flex items-center gap-1.5 relative", active && "font-bold", soon && "text-grey-70")} disabled={soon} onClick={onClick}>
        <Image alt="" src={src} />
        <When condition={soon}>
            <label className="absolute top-0 right-0 px-1.5 py-0.5 text-2xs font-semibold text-warning-80 bg-warning-30 rounded-t-md rounded-br-md">Soon</label>
        </When>
        {children}
    </button>
}

interface Props {
    activeTab: string;
    onClick: (value: string) => void
}

const TopNavbar: React.FC<Props> = ({ activeTab, onClick }) => {
    return <div className="rounded-2xl p-4 bg-white w-full flex items-center gap-8 justify-center text-grey-100 mb-6">
        <Button src={IconPlane} active={activeTab === "private-flight"} onClick={() => onClick("private-flight")}><span className="text-left">Private<br />Flight</span></Button>
        <Button src={IconTicket} active={activeTab === "ticket-checker"} onClick={() => onClick("ticket-checker")}><span className="text-left">Ticket<br />Checker</span></Button>
        <Button src={IconHotel} soon onClick={() => onClick("private-flight")}>Hotel</Button>
        <Button src={IconVisa} soon onClick={() => onClick("private-flight")}>Visa</Button>
    </div>
}

export default TopNavbar
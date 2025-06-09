import Image, { StaticImageData } from "next/image"

import LogoPlane from "@images/bitmap/logo-plane.png"
import LogoHotel from "@images/bitmap/logo-hotel.png"
import LogoVisa from "@images/bitmap/logo-visa.png"
import { tw } from "@functions/style"
import { When } from "react-if"

interface ButtonProps {
    src: StaticImageData
    children: React.ReactNode
    active?: boolean
    soon?: boolean
}

const Button: React.FC<ButtonProps> = ({ src, children, active, soon }) => {
    return <button className={tw("flex items-center gap-1 relative", active && "font-bold", soon && "text-grey-70")}>
        <Image alt="" src={src} />
        <When condition={soon}>
            <label className="absolute top-0 right-0 px-1.5 py-0.5 text-2xs font-semibold text-warning-80 bg-warning-30 rounded-t-md rounded-br-md">Soon</label>
        </When>
        {children}
    </button>
}

const TopNavbar = () => {
    return <div className="rounded-2xl p-4 bg-white w-full flex items-center gap-12 justify-center text-grey-100 mb-8">
        <Button src={LogoPlane} active>Flight Umrah</Button>
        <Button src={LogoHotel} soon>Hotel</Button>
        <Button src={LogoVisa} soon>Visa</Button>
    </div>
}

export default TopNavbar
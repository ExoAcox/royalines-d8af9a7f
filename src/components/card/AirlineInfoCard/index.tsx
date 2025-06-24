
import { tw } from "@functions/style"
import Image from "next/image"


import Logo from "@images/bitmap/logo.png"

interface Props {
    className?: string
    name?: string
    code?: string
    flightClass?: string
}

const AirlineInfoCard: React.FC<Props> = ({ className, name, code, flightClass }) => {
    return <div className={tw("gap-3 flex items-center", className)}>
        <div className="rounded-sm w-10 h-10 relative">
            <Image src={Logo} alt="" fill={true} className="object-contain" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">{name}</label>
            <span className="text-xs text-grey-80">{code}</span>
        </div>
        <span className="text-grey-80 text-2xs ml-auto">{flightClass}</span>
    </div>
}

export default AirlineInfoCard
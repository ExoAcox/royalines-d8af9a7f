import { tw } from "@functions/style";



interface Props {
    className?: string;
}

const FlightInfoCard: React.FC<Props> = ({ className }) => {
    return <div className={tw("flex items-center gap-4", className)}>
        <div className="flex flex-col gap-1">
            <label className="font-bold -mb-0.5">07:45</label>
            <span className="text-xs">Kediri (DHX)</span>
            <span className="text-2xs text-grey-80">Kamis, 12 Jun 2025</span>
        </div>
        <div className="flex-1 flex flex-col text-grey-70 text-xs items-center gap-1">
            <span>9h 35m</span>
            <div className="relative w-full">
                <div className="w-full h-[1px] bg-grey-80 -translate-y-[0px]" />
            </div>
            <span>Direct</span>
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-bold -mb-0.5">09:00</label>
            <span className="text-xs">Jeddah (JED)</span>
            <span className="text-2xs text-grey-80">Kamis, 12 Jun 2025</span>
        </div>
    </div>
}

export default FlightInfoCard


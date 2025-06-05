import { Button, Chip } from "@components/button";

interface Props {
    onClick: () => void
}

const FlightCard: React.FC<Props> = ({ onClick }) => {
    return <div className="bg-white rounded-2xl p-3 shadow">
        <div className="pb-4 mb-4 border-b border-base-border flex items-center gap-4">
            <div className="flex flex-col gap-1">
                <label className="font-bold">07:45</label>
                <span className="text-xs">CGK</span>
            </div>
            <div className="flex flex-col text-grey-70 text-xs items-center gap-1">
                <span>9h 35m</span>
                <div className="relative">
                    <div className="w-[8rem] h-[1px] bg-grey-80 -translate-y-[0px]" />
                    {/* <TiArrowRight className="absolute right-0 -top-2 fill-grey-80" /> */}
                </div>
                <span>Direct</span>
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-bold">09:00</label>
                <span className="text-xs">JED</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
                <label className="text-sm text-primary font-bold">Rp 9.000.000</label>
                <span className="text-xs text-grey-70">/pax</span>
            </div>
        </div>
        <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-red-400 rounded-sm" />
            <div className="flex flex-col gap-1">
                <label className="text-sm">Emirates Airlines</label>
                <span className="text-grey-80 text-xs">EM-5489</span>
            </div>
            <Chip className="ml-auto">Seats Available: 200 of 400</Chip>
            <Button className="h-8 text-xs" onClick={onClick}>Select</Button>
        </div>
    </div>
}

export default FlightCard
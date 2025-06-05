import { TextField } from "@components/input";
import { Checkbox } from "@components/radio";
import { tw } from "@functions/style"

interface TimeCardProps {
    active?: boolean;
    children: string;
    time: string;
    onClick: () => void;
}

const TimeCard: React.FC<TimeCardProps> = ({ active, children, time, onClick }) => {
    return <button className={tw("flex flex-col rounded-md border p-2 border-base-border text-sm", active && "font-bold text-primary border-primary")} onClick={onClick}>
        <span>{children}</span>
        <span>{time}</span>
    </button>
}

interface AirlineListProps {
    children: string;
    price: string;
}

const AirlineList: React.FC<AirlineListProps> = ({ children, price }) => {
    return <div className="flex text-sm gap-2 items-center w-full">
        <div className="w-10 h-10 rounded-md bg-red-400" />
        <span>{children}</span>
        <span className="ml-auto block font-semibold">From {price}</span>
    </div>
}



interface Props {

}

const SideFilter: React.FC<Props> = ({ }) => {
    return <div className="flex flex-col gap-4 h-full">
        <div className="bg-white shadow">
            <div className="flex items-center justify-between p-4 border-b border-base-border">
                <h4>Filter</h4>
                <button className="text-primary text-xs font-semibold">Reset</button>
            </div>
            <div className="p-4">
                <label className="text-sm font-semibold">Departure time</label>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <TimeCard time="00:00 - 06:00" active onClick={() => null}>Early morning</TimeCard>
                    <TimeCard time="06:00 - 12:00" onClick={() => null}>Morning</TimeCard>
                    <TimeCard time="12:00 - 18:00" onClick={() => null}>Afternoon</TimeCard>
                    <TimeCard time="18:00 - 06:00" onClick={() => null}>Evening</TimeCard>
                </div>
            </div>
        </div>
        <div className="p-4 bg-white shadow">
            <label className="text-sm font-semibold">Arrival time</label>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <TimeCard time="00:00 - 06:00" active onClick={() => null}>Early morning</TimeCard>
                <TimeCard time="06:00 - 12:00" onClick={() => null}>Morning</TimeCard>
                <TimeCard time="12:00 - 18:00" onClick={() => null}>Afternoon</TimeCard>
                <TimeCard time="18:00 - 06:00" onClick={() => null}>Evening</TimeCard>
            </div>
        </div>
        <div className="p-4 bg-white shadow">
            <label className="text-sm font-semibold">Airline</label>
            <Checkbox value={["emirates"]} labelClassName="w-full" className="mt-4" onChange={() => null} options={[{
                value: "emirates",
                label: <AirlineList price="9.495k">Emirates Airlines</AirlineList>
            }, {
                value: "emirates1",
                label: <AirlineList price="9.495k">Emirates Airlines</AirlineList>
            }, {
                value: "emirates2",
                label: <AirlineList price="9.495k">Emirates Airlines</AirlineList>
            }]} />
        </div>
        <div className="p-4 bg-white shadow mb-4">
            <label className="text-sm font-semibold">Price</label>
            <div className="flex gap-4 mt-4">
                <TextField label="From" className="flex-1" placeholder="Enter price" prefix={<span className="border-r border-base-border pr-3">Rp</span>} />
                <TextField label="To" className="flex-1" placeholder="Enter price" prefix={<span className="border-r border-base-border pr-3">Rp</span>} />
            </div>
        </div>
    </div>
}

export default SideFilter
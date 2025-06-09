import { TextField } from "@components/input";
import { Checkbox } from "@components/radio";
import { convertCurrency, parseCurrency } from "@functions/common";
import { tw } from "@functions/style"
import { useState } from "react";

import Image from "next/image"

import Logo from "@images/bitmap/logo.png"

interface TimeCardProps {
    active?: boolean;
    children: string;
    time: string;
    onClick: () => void;
}

const TimeCard: React.FC<TimeCardProps> = ({ active, children, time, onClick }) => {
    return <button className={tw("flex flex-col rounded-md border p-2 border-base-border text-sm", active && "bg-primary-bg font-bold text-primary border-primary")} onClick={onClick}>
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
        <div className="rounded-sm w-10 h-10 relative">
            <Image src={Logo} alt="" fill={true} className="object-contain" />
        </div>
        <span>{children}</span>
        <span className="ml-auto block font-semibold">From {price}</span>
    </div>
}



interface Props {

}

const SideFilter: React.FC<Props> = ({ }) => {
    const [departure, setDeparture] = useState(0)
    const [arrival, setArrival] = useState(0)
    const [priceFrom, setPriceFrom] = useState("")
    const [priceTo, setPriceTo] = useState("")

    return <div className="flex flex-col gap-4 w-[31.25rem]">
        <div className="bg-white shadow">
            <div className="flex items-center justify-between p-4 border-b border-base-border">
                <h3>Filter</h3>
                <button className="text-primary text-xs font-semibold">Reset</button>
            </div>
            <div className="p-4">
                <label className="text-sm font-semibold">Departure time</label>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <TimeCard time="00:00 - 06:00" active={departure === 0} onClick={() => setDeparture(0)}>Early morning</TimeCard>
                    <TimeCard time="06:00 - 12:00" active={departure === 1} onClick={() => setDeparture(1)}>Morning</TimeCard>
                    <TimeCard time="12:00 - 18:00" active={departure === 2} onClick={() => setDeparture(2)}>Afternoon</TimeCard>
                    <TimeCard time="18:00 - 06:00" active={departure === 3} onClick={() => setDeparture(3)}>Evening</TimeCard>
                </div>
            </div>
        </div>
        <div className="p-4 bg-white shadow">
            <label className="text-sm font-semibold">Arrival time</label>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <TimeCard time="00:00 - 06:00" active={arrival === 0} onClick={() => setArrival(0)}>Early morning</TimeCard>
                <TimeCard time="06:00 - 12:00" active={arrival === 1} onClick={() => setArrival(1)}>Morning</TimeCard>
                <TimeCard time="12:00 - 18:00" active={arrival === 2} onClick={() => setArrival(2)}>Afternoon</TimeCard>
                <TimeCard time="18:00 - 06:00" active={arrival === 3} onClick={() => setArrival(3)}>Evening</TimeCard>
            </div>
        </div>
        <div className="p-4 bg-white shadow">
            <label className="text-sm font-semibold">Airline</label>
            <Checkbox value={["emirates"]} labelClassName="w-full" className="mt-4" onChange={() => null} options={[{
                value: "emirates",
                label: <AirlineList price="9k">Royal Jet Aviation</AirlineList>
            }]} />
        </div>
        <div className="p-4 bg-white shadow mb-4">
            <label className="text-sm font-semibold">Price</label>
            <div className="flex gap-4 mt-4">
                <TextField label="From" className="flex-1" placeholder="Enter price" value={priceFrom} onChange={value => setPriceFrom(convertCurrency(parseCurrency(value)))} prefix={<span className="border-r border-base-border pr-3">Rp</span>} />
                <TextField label="To" className="flex-1" placeholder="Enter price" value={priceTo} onChange={value => setPriceTo(convertCurrency(parseCurrency(value)))} prefix={<span className="border-r border-base-border pr-3">Rp</span>} />
            </div>
        </div>
    </div>
}

export default SideFilter
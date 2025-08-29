import { Button } from "@components/button"


import { ClassInput, FlightInput, PassengerInput, DateInput } from "@components/input";
import { Link } from "@components/navigation";
import { useGetDates } from "@features/choose_flight/stores/apiStore";
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore";
import { useState } from "react";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";
import { GoArrowSwitch } from "react-icons/go";
import { Else, If, Then } from "react-if";




interface Props {
    onClick: () => void
}

const MainContent: React.FC<Props> = ({ onClick }) => {
    const [isClicked, setClicked] = useState(false)
    const chooseFlightStore = useChooseFlightStore()
    const { date, month, year, passenger, origin, destination, arabAirport, isRoundTrip } = chooseFlightStore


    const onSwitchDestination = () => {
        useChooseFlightStore.setState({ origin: destination, destination: origin, arabAirport: arabAirport === "arrival" ? "departure" : "arrival" })
    }

    const onSwitchRoundTrip = () => {
        useChooseFlightStore.setState({ isRoundTrip: !isRoundTrip })
    }

    return <div className="rounded-2xl p-4 bg-white">
        <h5 className="mb-6">Search Flight</h5>
        <div className="relative">
            <FlightInput />
            <button className="right-0 top-1/2 -translate-y-1/2 absolute text-[#1A94FF] border-[#1A94FF] border rounded-full p-1" onClick={onSwitchDestination}>
                <GoArrowSwitch className="w-4 h-4" />
            </button>
        </div>

        <div className="py-5 my-3 border-b border-t border-base-border flex items-center gap-1">
            <DateInput date={date} month={month} year={year} onChange={data => {
                useChooseFlightStore.setState({ ...data })
            }} />
            <span className="ml-auto text-xs">Round Trip</span>
            <If condition={isRoundTrip}>
                <Then>
                    <BiSolidToggleRight className="fill-[#1A94FF] cursor-pointer w-10 h-12" onClick={onSwitchRoundTrip} />
                </Then>
                <Else>
                    <BiSolidToggleLeft className="fill-[#C4C4CF] cursor-pointer w-10 h-12" onClick={onSwitchRoundTrip} />
                </Else>
            </If>
        </div>
        <div className="flex">
            <PassengerInput passenger={passenger} onChange={(passenger) => useChooseFlightStore.setState({ passenger: Number(passenger) })} />
            <ClassInput />
        </div>
        <Button className="w-full h-12 mt-5" loading={isClicked} onClick={() => {
            onClick()
            setClicked(true)
        }}>Search</Button>
    </div>
}

export default MainContent
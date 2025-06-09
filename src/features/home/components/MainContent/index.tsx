import { Button } from "@components/button"


import { ClassInput, FlightInput, PassengerInput, DateInput } from "@components/input";
import { Link } from "@components/navigation";
import { useChooseFlightStore } from "@features/choose_flight/stores/chooseFlightStore";
import { useState } from "react";




interface Props {

}

const MainContent: React.FC<Props> = ({ }) => {
    const chooseFlightStore = useChooseFlightStore()
    const { date, month, year, passenger } = chooseFlightStore

    return <div className="rounded-2xl p-4 bg-white">
        <h5 className="mb-6">Search Flight</h5>
        <FlightInput />
        <div className="py-5 my-3 border-b border-t border-base-border">
            <DateInput date={date} month={month} year={year} onChange={data => {
                useChooseFlightStore.setState({ ...data })
            }} />
        </div>
        <div className="flex">
            <PassengerInput passenger={passenger} onChange={(passenger) => useChooseFlightStore.setState({ passenger: Number(passenger) })} />
            <ClassInput />
        </div>
        <Link href="/choose_flight">
            <Button className="w-full h-12 mt-5">Search</Button>
        </Link>
    </div>
}

export default MainContent
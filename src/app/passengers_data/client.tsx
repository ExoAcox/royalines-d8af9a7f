"use client"

import { Button } from "@components/button"
import { Responsive, Wrapper } from "@components/layout"
import { PassengerHeader, PassengerTable, PassengerModal } from "@features/edit_passenger/components"
import { PiSeatFill } from "react-icons/pi"



const PassengersData: React.FC<Page> = ({ }) => {

    return <Wrapper>
        <Responsive className="py-12">
            <PassengerHeader />-
            <PassengerTable />
        </Responsive>
        <Responsive className="flex items-center justify-end h-[7.375rem]" parentClassName="fixed bottom-0 border-t bg-white">
            <Button><PiSeatFill />Manage Seats</Button>
        </Responsive>

        <PassengerModal id="add-passenger-modal" />
        <PassengerModal id="edit-passenger-modal" />
    </Wrapper>
}

export default PassengersData;
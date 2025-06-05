"use client"

import { Responsive, Wrapper } from "@components/layout"
import { SeatPicker, SeatSidebar, TopBar } from "@features/choose_seat/components";
import { useEffect, useState } from "react";
import { produce } from "immer"


const seat_data = {
    numbering: [1, 2, 3, 4, 10, 11, 12, 99, 21, 22, 23, 24, 25],
    layouts: [{
        alphabet: ["A", "B", "C", "D", "E", "F", "G", "H"],
        column: [2, 4, 2],
        row: 2
    },
    {
        alphabet: ["X", "Y", "Z", "M", "N", "O", "Q", "V"],
        column: [2, 2, 2],
        row: 3
    },
    {
        alphabet: ["A", "B", "G", "H"],
        column: [2, 0, 0, 0, 2],
        row: 3
    },
    {
        alphabet: ["A", "B", "C", "D", "E", "F"],
        column: [3, 0, 3],
        row: 5
    }]
}

const occupied_seats = ["G12", "B2", "X10", "X4", "O3", 'D1', 'E1', 'O10']

const ChooseSeat: React.FC<Page> = ({ }) => {
    const [passengers, setPassengers] = useState<{ name: string, id: number, seat: string }[]>([{
        name: "",
        id: 1,
        seat: "",
    }, {
        name: "",
        id: 2,
        seat: "",
    }, {
        name: "",
        id: 3,
        seat: "",
    }, {
        name: "",
        id: 4,
        seat: "",
    }, {
        name: "",
        id: 5,
        seat: "",
    }])

    const [passengerChoosenId, setPassengerChoosenId] = useState<number | null>(null)

    useEffect(() => {
        setPassengerChoosenId(passengers[0].id)
    }, [])

    const handleSeatSelect = (seatId: string) => {
        const passengerIndex = passengers.findIndex(passenger => passenger.id === passengerChoosenId)

        const passengers_ = produce(passengers, (draft) => {
            draft[passengerIndex].seat = seatId
        })

        setPassengers(passengers_)

        const emptyIndex = passengers_.findIndex(passenger => !passenger.seat)
        if (emptyIndex >= 0) {
            setPassengerChoosenId(passengers[emptyIndex].id)
        }

    }

    return <Wrapper navbarClassName="shadow-none">
        <div className="flex flex-col h-full">
            <TopBar />
            <div className="flex-1 overflow-scroll">
                <Responsive className="p-0 flex">
                    <div className="h-[calc(100dvh-10.75rem)] sticky top-0">
                        <SeatSidebar passengers={passengers} passengerChoosenId={passengerChoosenId} onClick={(passengerId) => {
                            setPassengerChoosenId(passengerId === passengerChoosenId ? null : passengerId)
                        }} />
                    </div>

                    <SeatPicker seats={seat_data} occupied_seats={occupied_seats} passengers={passengers} onSeatSelect={handleSeatSelect} passengerChoosenId={passengerChoosenId} />
                </Responsive>
            </div>
        </div>
    </Wrapper>
}

export default ChooseSeat

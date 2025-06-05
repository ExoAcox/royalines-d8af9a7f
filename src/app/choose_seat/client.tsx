"use client"

import { Responsive, Wrapper } from "@components/layout"
import { SeatPicker, SeatSidebar, TopBar } from "@features/choose_seat/components";
import clsx from "clsx";
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
        column: [2, 2, 2, 2],
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
    console.log(passengerChoosenId)
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
        setPassengerChoosenId(emptyIndex >= 0 ? passengers[emptyIndex].id : null)
    }


    return <Wrapper navbarClassName="shadow-none">
        <TopBar />
        <Responsive className="p-0">
            <div className="flex">
                <div className="fixed w-[31.25rem] h-[calc(100dvh-6rem-4.5rem)] overflow-scroll">
                    <SeatSidebar passengers={passengers} passengerChoosenId={passengerChoosenId} onClick={setPassengerChoosenId} />
                </div>
                <div className="w-[31.25rem]" />
                <div className="flex-1" >
                    <SeatPicker seats={seat_data} occupied_seats={occupied_seats} passengers={passengers} onSeatSelect={handleSeatSelect} passengerChoosenId={passengerChoosenId} />
                </div>
            </div>
        </Responsive>
    </Wrapper>
}

export default ChooseSeat

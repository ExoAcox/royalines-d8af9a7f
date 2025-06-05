import { tw } from "@functions/style"
import { MdClose } from "react-icons/md"

import Image from "next/image"

import { When } from "react-if"

import PlaneHead from "@images/bitmap/plane-head.png"

interface BoxProps {
    occupied: boolean;
    selected: number;
    onClick: () => void
}

const Box: React.FC<BoxProps> = ({ occupied, selected, onClick }) => {


    return <div onClick={() => {
        if (!occupied && !selected) onClick()
    }} className={tw("flex-center w-8 h-8 bg-blue-20 text-2xs font-semibold rounded-sm cursor-pointer",
        occupied && "bg-grey-50 cursor-not-allowed",
        selected > 0 && "bg-success-70 cursor-default")}>
        <When condition={occupied}>
            <MdClose className="fill-grey-90 w-5 h-5" />
        </When>
        <When condition={selected}>
            {selected}
        </When>
    </div>
}


interface Props {
    seats: {
        numbering: number[],
        layouts: {
            alphabet: string[],
            column: number[],
            row: number
        }[]
    }
    occupied_seats: string[],
    passengers: {
        name: string;
        id: number;
        seat?: string
    }[],
    onSeatSelect: (seatId: string) => void
    passengerChoosenId: number | null
}

const SeatPicker: React.FC<Props> = ({ seats, occupied_seats, passengers, onSeatSelect, passengerChoosenId }) => {

    const handleSeatSelect = (seatId: string) => {
        if (passengerChoosenId) onSeatSelect(seatId)
    }


    return <div className="flex flex-1 justify-center">
        <div className="bg-white flex flex-col gap-6 relative p-4 mt-[16rem] pb-16">
            <Image src={PlaneHead} alt="" className="absolute w-full left-1/2 -translate-x-1/2 top-0.5 -translate-y-full" />
            {seats.layouts.map((layout, layoutIndex) => {
                const lastLayoutIndex = seats.layouts.slice(0, layoutIndex).reduce((acc, current) => acc + current.row, 0)

                return <div key={layoutIndex}>
                    <div className="flex gap-12 justify-center">
                        {layout.column.map((column, columnIndex) => {
                            const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                            if (column === 0) {
                                return <div key={columnIndex} className="w-8 h-8" />
                            }

                            return <div key={columnIndex} className="flex gap-2">
                                {Array.from({ length: column }, (_, cellIndex) => {
                                    return <div key={cellIndex} className="flex-center w-8 h-8 text-2xs font-semibold">{layout.alphabet[lastIndex + cellIndex]}</div>
                                })}
                            </div>
                        })}
                    </div>
                    <div className="flex flex-col gap-2">
                        {Array.from({ length: layout.row }, (_, rowIndex) => {
                            return <div key={rowIndex} className="flex gap-12 justify-center">
                                <div className="flex-center w-8 h-8 text-2xs font-semibold absolute -left-10">{seats.numbering[lastLayoutIndex + rowIndex]}</div>
                                {layout.column.map((column, columnIndex) => {
                                    const lastIndex = layout.column.slice(0, columnIndex).reduce((acc, current) => acc + current, 0)

                                    if (column === 0) {
                                        return <div key={columnIndex} className="w-8 h-8" />
                                    }

                                    return <div key={columnIndex} className="flex gap-2">
                                        {Array.from({ length: column }, (_, cellIndex) => {
                                            const seatId = layout.alphabet[lastIndex + cellIndex] + seats.numbering[lastLayoutIndex + rowIndex]

                                            const isOccupied = occupied_seats.includes(seatId)
                                            const isSelected = passengers.findIndex(passenger => passenger.seat === seatId) + 1

                                            return <Box key={cellIndex} onClick={() => handleSeatSelect(seatId)} occupied={isOccupied} selected={isSelected} />
                                        })}
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default SeatPicker
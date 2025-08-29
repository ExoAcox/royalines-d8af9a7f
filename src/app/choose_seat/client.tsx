"use client"

import { Error, Responsive, Wrapper } from "@components/layout"
import { BottomBar, SeatPicker, SeatSidebar, TopBar } from "@features/choose_seat/components";
import { useEffect, useMemo, useState } from "react";
import { produce } from "immer"
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore";
import { useGetAvailableSeats } from "@features/choose_seat/stores/apiStore";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";
import { When } from "react-if";
import { Spinner } from "@components/loader";
import { useFlightScheduleStore } from "@features/choose_seat/stores/dataStore";
import { useCheckoutFlight } from "@features/choose_seat/stores/apiStore";
import { toast } from "react-toastify";

const ChooseSeat: React.FC<Page> = ({ user }) => {
    const [passengers, setPassengers] = useState<{ name: string, id: number, seat: string }[]>([])
    const [passengerChoosenId, setPassengerChoosenId] = useState<number | null>(null)
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const isBookDisabled = useMemo(() => {
        return passengers.some(passenger => !passenger.seat)
    }, [passengers])

    const chooseFlightStore = useChooseFlightStore()
    const { passenger, flightIdOutbound } = chooseFlightStore

    const flightSchedule = useFlightScheduleStore()
    const availableSeats = useGetAvailableSeats(flightIdOutbound!)

    const checkoutFlight = useCheckoutFlight()

    useEffect(() => {
        if (!flightIdOutbound) {
            routerChange()
            router.replace("/")
        }
    }, [flightIdOutbound])


    useEffect(() => {
        const passengers_ = Array.from({ length: passenger }, (_, index) => {
            return { name: "", id: index + 1, seat: "" }
        })

        setPassengers(passengers_)
        setPassengerChoosenId(passengers_[0].id)
    }, [passenger])


    const handleSeatSelect = (seatId: string) => {
        const passengerIndex = passengers.findIndex(passenger => passenger.id === passengerChoosenId)

        const passengers_ = produce(passengers, (draft) => {
            draft[passengerIndex].seat = seatId
        })

        setPassengers(passengers_)

        const emptyIndex = passengers_.findIndex(passenger => passenger.seat)
        if (emptyIndex >= 0) {
            setPassengerChoosenId(passengers[emptyIndex].id)
        }

    }

    const handleSubmit = async () => {
        const seats = passengers.map(passenger => availableSeats.data!.seats.find(seat => seat.seat_number === passenger.seat)?.flight_seat_id ?? 1)


        try {
            await checkoutFlight.mutateAsync({
                flights: [{
                    flight_schedule_id: flightIdOutbound!,
                    seats
                }]
            })

            routerChange()
            router.push("/payment")
        } catch (error) {
            toast.error((error as FetchError)?.message)
        }
    }

    return <Wrapper user={user} navbarClassName="shadow-none">
        <div className="flex flex-col h-full">
            <TopBar data={flightSchedule.data} />
            <div className="flex-1 overflow-scroll">
                <When condition={availableSeats.isPending}>
                    <Spinner className="pt-24" size={156} />
                </When>
                <When condition={availableSeats.isError}>
                    <Error className="pt-24" error={availableSeats.error?.message} />
                </When>
                <When condition={availableSeats.isSuccess}>
                    <Responsive className="p-0 flex">
                        <div className="h-[calc(100dvh-10.75rem)] sticky top-0">
                            <SeatSidebar passengers={passengers} passengerChoosenId={passengerChoosenId} onClick={(passengerId) => {
                                setPassengerChoosenId(passengerId === passengerChoosenId ? null : passengerId)
                            }} />
                        </div>

                        <SeatPicker seats={availableSeats.data!}
                            passengers={passengers} onSeatSelect={handleSeatSelect} passengerChoosenId={passengerChoosenId} />
                    </Responsive>
                </When>

            </div>
            <BottomBar onClick={handleSubmit} loading={checkoutFlight.isPending} disabled={isBookDisabled} />
        </div>
    </Wrapper>
}

export default ChooseSeat

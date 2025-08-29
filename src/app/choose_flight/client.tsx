"use client"

import { FlightSchedule } from "@api/flights";
import { Error, NotFound, Responsive, Wrapper } from "@components/layout"
import { Spinner } from "@components/loader";
import { FlightCard, FlightHeader, SearchFlightModal, SelectAirportModal, SideFilter } from "@features/choose_flight/components"
import { useGetFlightSchedules } from "@features/choose_flight/stores/apiStore";
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore"
import { useFlightScheduleStore } from "@features/choose_seat/stores/dataStore";
import { useRouterEvent } from "@hooks/useRouter";
import dayjs from "dayjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Case, Switch } from "react-if";



const ChooseFlight: React.FC<Page> = ({ user }) => {
    const chooseFlightStore = useChooseFlightStore()
    const { origin, destination, date, month, year, passenger } = chooseFlightStore
    const { routerChange } = useRouterEvent()
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        try {
            if (!searchParams.get("data")) throw "";
            const data = JSON.parse(searchParams.get("data")!)
            useChooseFlightStore.setState(data)
        } catch {
            routerChange()
            router.replace("/")
        }

    }, [searchParams.get("data")])


    const flightSchedules = useGetFlightSchedules({
        origin_airport_id: origin.airport_id,
        destination_airport_id: destination.airport_id,
        departure_date: dayjs(`${year}-${month}-${date}`, 'YYYY-M-D').format('YYYY-MM-DD'),
        minimum_seat: passenger
    })

    const navigate = (data: FlightSchedule) => {
        useChooseFlightStore.setState({ flightIdOutbound: data.flight_schedule_id })
        useFlightScheduleStore.setState({ data })

        routerChange()
        router.push("/choose_seat")
    }

    return <Wrapper user={user}>
        <Responsive className="flex p-0" parentClassName="h-full">
            <div className="sticky top-0 max-h-[calc(100dvh-6rem)] overflow-auto"><SideFilter /></div>
            <div className="flex-1 p-8">
                <FlightHeader data={chooseFlightStore} />
                <div className="mt-6 flex flex-col gap-4">
                    <Switch>
                        <Case condition={flightSchedules.isPending}>
                            <Spinner className="py-24" size={100} />
                        </Case>
                        <Case condition={flightSchedules.isError}>
                            <Error error={flightSchedules.error?.message} className="py-24" />
                        </Case>
                        <Case condition={flightSchedules.isSuccess && !flightSchedules.data?.length}>
                            <NotFound className="py-24" />
                        </Case>
                        <Case condition={flightSchedules.isSuccess && flightSchedules.data?.length}>
                            {flightSchedules.data?.map(flightSchedule => {
                                return <FlightCard key={flightSchedule.flight_schedule_id} data={flightSchedule} onClick={() => navigate(flightSchedule)} />
                            })}

                        </Case>
                    </Switch>
                </div>
            </div>
        </Responsive>
        <SearchFlightModal />
        <SelectAirportModal onSelect={() => null} />
    </Wrapper>
}

export default ChooseFlight

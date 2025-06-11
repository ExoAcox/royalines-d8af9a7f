"use client"

import { Responsive, Wrapper } from "@components/layout"
import { FlightCard, FlightHeader, SearchFlightModal, SelectAirportModal, SideFilter } from "@features/choose_flight/components"
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore"
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";



const ChooseFlight: React.FC<Page> = ({ }) => {
    const chooseFlightStore = useChooseFlightStore()
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const navigate = () => {
        routerChange()
        router.push("/payment")
    }

    return <Wrapper>
        <div className="h-full overflow-auto">
            <Responsive className="flex p-0">
                <div className="sticky top-0 max-h-[calc(100dvh-6rem)] overflow-auto"><SideFilter /></div>
                <div className="flex-1 p-8">
                    <FlightHeader data={chooseFlightStore} />
                    <div className="mt-6 flex flex-col gap-4">
                        <FlightCard onClick={navigate} />
                        <FlightCard onClick={navigate} />
                    </div>
                </div>
            </Responsive>
        </div>
        <SearchFlightModal />
        <SelectAirportModal onSelect={() => null} />
    </Wrapper>
}

export default ChooseFlight

"use client"

import { Responsive, Wrapper } from "@components/layout"
import { FlightHeader, FlightTable } from "@features/flight_history/components"
import { useState } from "react"


export type ActiveTab = "waiting_payment" | "booked" | "fully_paid" | "ticket_issued"

const TransactionHistory: React.FC<Page> = ({ user }) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("waiting_payment")


    return <Wrapper user={user}>
        <Responsive className="py-12">
            <FlightHeader activeTab={activeTab} onClick={setActiveTab} />
            <FlightTable />
        </Responsive>
    </Wrapper>
}

export default TransactionHistory
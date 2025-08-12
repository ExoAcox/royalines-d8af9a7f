"use client"

import { Responsive, Wrapper } from "@components/layout"
import { Pagination } from "@components/navigation"
import { FlightHeader, FlightTable } from "@features/flight_history/components"
import { useState } from "react"


export type ActiveTab = "waiting_payment" | "booked" | "fully_paid" | "ticket_issued"

const TransactionHistory: React.FC<Page> = ({ user }) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("waiting_payment")
    const [page, setPage] = useState(1)


    return <Wrapper user={user}>
        <Responsive className="py-12">
            <FlightHeader activeTab={activeTab} onClick={setActiveTab} />
            <FlightTable />
            <Pagination page={page} totalPage={20} onChange={setPage} />
        </Responsive>
    </Wrapper>
}

export default TransactionHistory
"use client"

import { Responsive, Wrapper } from "@components/layout"
import { FlightHeader, FlightTable } from "@features/flight_history/components"
import { useState } from "react"



const TransactionHistory: React.FC<Page> = ({ }) => {
    const [activeTab, setActiveTab] = useState("waiting_payment" as const)


    return <Wrapper>
        <Responsive className="py-12">
            <FlightHeader activeTab={activeTab} />
            <FlightTable />
        </Responsive>
    </Wrapper>
}

export default TransactionHistory
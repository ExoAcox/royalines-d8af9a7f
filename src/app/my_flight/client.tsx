"use client"

import { Responsive, Wrapper } from "@components/layout"
import { FlightHeader, FlightTable } from "@features/flight_history/components"



const TransactionHistory: React.FC<Page> = ({ }) => {

    return <Wrapper>
        <Responsive className="py-12">
            <FlightHeader />
            <FlightTable />
        </Responsive>
    </Wrapper>
}

export default TransactionHistory
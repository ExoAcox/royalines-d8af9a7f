"use client"

import { BackButton } from "@components/button"
import { TextField } from "@components/input"
import { Responsive, Wrapper } from "@components/layout"
import { PassengerTable } from "@features/edit_passenger/components"
import { ConfirmPaymentModal } from "@features/payment/components"
import { InvoiceCard, TicketSummaryCard, TransactionCard, TransactionHeader } from "@features/transaction_history/components"
import { IoSearch } from "react-icons/io5"



const TransactionDetail: React.FC<Page> = ({ }) => {

    return <Wrapper className="flex flex-col">
        <Responsive className="flex items-center gap-3 px-12 py-4" parentClassName="sticky top-0 bg-white z-[2] border-b">
            <BackButton />
            <h4>Transaction Detail</h4>
        </Responsive>
        <Responsive className="flex gap-6 py-6">
            <div className="flex-1">
                <InvoiceCard />
                <div className="flex items-center justify-between mt-8 mb-3">
                    <h4>Passengers Data</h4>
                    <TextField prefix={<IoSearch />} placeholder="Search Passenger" className="w-[21.875rem]" />
                </div>
                <PassengerTable hideAction />
            </div>
            <TicketSummaryCard />
        </Responsive>
        <ConfirmPaymentModal />
    </Wrapper>
}

export default TransactionDetail
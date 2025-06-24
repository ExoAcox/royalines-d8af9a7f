"use client"

import { BackButton } from "@components/button"
import { Responsive, Wrapper } from "@components/layout"
import { TransactionCard, TransactionHeader } from "@features/transaction_history/components"



const Payment: React.FC<Page> = ({ user }) => {

    return <Wrapper user={user} className="flex flex-col">
        <Responsive className="flex items-center gap-3 px-12 py-4" parentClassName="sticky top-0 bg-white z-[2] border-b">
            <BackButton />
            <h4>Transaction History</h4>
        </Responsive>
        <Responsive className="flex flex-col gap-6 items-center py-6 max-w-[740px]">
            <TransactionHeader />
            <div className="flex flex-col gap-4 w-full">
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </div>
        </Responsive>

    </Wrapper>
}

export default Payment
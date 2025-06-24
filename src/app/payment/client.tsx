"use client"

import { Wrapper } from "@components/layout"
import { OrderSummary, TripSummary } from "@features/payment/components"



const Payment: React.FC<Page> = ({ user }) => {

    return <Wrapper user={user}>
        <div className="my-[8rem] mx-auto shadow w-[26rem] rounded-2xl">
            <TripSummary />
            <div className="w-full h-1.5 bg-grey-40" />
            <OrderSummary />
        </div>
    </Wrapper>
}

export default Payment
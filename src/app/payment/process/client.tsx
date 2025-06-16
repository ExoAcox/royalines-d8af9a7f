"use client"

import { AirlineInfoCard, FlightInfoCard } from "@components/card"
import { Responsive, Wrapper } from "@components/layout"
import { PaymentDetail } from "@features/payment/components"



const PaymentProcess: React.FC<Page> = ({ }) => {

    return <Wrapper>
        <Responsive className="flex gap-4 py-12 max-w-[80rem]">
            <div className="flex-1 rounded-2xl shadow-xs overflow-hidden" >
                <div className="py-2 px-4 bg-white border-b border-grey-40">
                    <label className="text-lg font-semibold">Your Flights</label>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                    <div className="bg-white p-4">
                        <FlightInfoCard className="pb-4 mb-4 border-b" />
                        <AirlineInfoCard />
                    </div>
                </div>
            </div>
            <PaymentDetail />
        </Responsive>
    </Wrapper>
}

export default PaymentProcess
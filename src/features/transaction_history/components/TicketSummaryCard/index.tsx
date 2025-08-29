import { AirlineInfoCard, FlightInfoCard } from "@components/card"
import { FaRegCopy } from "react-icons/fa6"



interface Props {

}

const SummaryCard: React.FC<Props> = ({ }) => {
    return <div className="flex flex-col gap-2 bg-grey-40 shadow-xs h-fit rounded-2xl overflow-hidden w-[26rem] sticky top-22.25">
        <div className="flex flex-col bg-white">
            <div className="font-semibold text-lg py-2 px-4 border-b">Ticket Detail</div>
            <div className="flex flex-col p-4">
                <FlightInfoCard className="pb-4 mb-4 border-b" />
                <AirlineInfoCard />
            </div>
        </div>
        <div className="flex gap-6 p-6 bg-white">
            <div className="w-[5.375rem] h-[5.375rem] bg-green-200 shrink-0 rounded" />
            <div className="flex flex-col gap-2 justify-center w-full">
                <label className="text-black font-semibold">Booking Code</label>
                <button className="border border-grey-60 rounded-lg py-2 px-3 flex justify-between items-center">
                    <h5 className="text-grey-80">BQ9147K</h5>
                    <FaRegCopy className="w-5 h-5 fill-grey-70" />
                </button>
            </div>
        </div>
        <div className="bg-white">
            <div className="font-semibold text-lg py-2 px-4 border-b">Order Summary</div>
            <div className="flex flex-col py-2 px-4 gap-1 text-black">
                <div className="flex justify-between text-sm">
                    <span className="font-bold">
                        Royal Jet Aviation
                    </span>
                    <span className="text-grey-80">
                        Rp 27.000.000
                    </span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="font-bold">
                        Admin free
                    </span>
                    <span className="text-grey-80">
                        Rp 540.000
                    </span>
                </div>
                <span className="text-2xs text-grey-80">2%</span>
                <div className="flex justify-between items-center text-sm">
                    <span className="font-bold">
                        Total Amount Paid
                    </span>
                    <span className="text-lg font-primary font-semibold">
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default SummaryCard
import { Button, PaymentBadge } from "@components/button"
import { AirlineInfoCard, FlightInfoCard } from "@components/card";

import { MdCalendarMonth } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { Link } from "@components/navigation";


interface Props {

}

const TransactionCard: React.FC<Props> = ({ }) => {

    return <div className="p-4 flex flex-col bg-white shadow-xs rounded-2xl">
        <div className="flex gap-4 pb-2 items-center justify-between">
            <div className="flex flex-col gap-1">
                <span className="text-primary text-sm font-bold">INV/20250508/MPL/52188823546</span>
                <div className="flex gap-2 text-grey-100 text-xs">
                    <MdCalendarMonth className="w-4 h-4" />
                    08 Mei 2025, 15:38 WIB
                </div>
            </div>
            <PaymentBadge type="success" />
        </div>
        <div className="py-2 flex border-y">
            <div className="flex-1 flex flex-col gap-8 justify-center border-r border-grey-40 pr-6 mr-6">
                <FlightInfoCard />
                <AirlineInfoCard />
            </div>
            <div className="flex-1 flex flex-col text-grey-100 gap-1.5">
                <label className="text-grey-70 text-xs">Booking Code</label>
                <button className="border border-grey-60 rounded-lg py-2 px-3 flex justify-between items-center">
                    <span className="font-semibold text-sm text-grey-80">BQ9147K</span>
                    <FaRegCopy className="w-5 h-5 fill-grey-70" />
                </button>
                <label className="text-grey-70 text-xs mt-2">Payment Method</label>
                <span className="text-sm">BCA Virtual Account</span>
                <label className="text-grey-70 text-xs mt-2">Payment Type</label>
                <span className="text-sm">Full Paid</span>
            </div>
        </div>
        <div className="flex items-center gap-2 pt-2">
            <div className="flex flex-col gap-1 mr-auto">
                <label className="text-black text-sm font-bold">Total Amount Paid</label>
                <span className="text-lg font-semibold text-primary">Rp 13.770.000</span>
            </div>
            <Link href={`/transaction_history/52188823546`} ><Button className="h-8 w-36 text-xs" variant="ghost">View Detail</Button></Link>
            <Button className="h-8 w-36 text-xs">Request a Refund</Button>
        </div>
    </div>
}

export default TransactionCard
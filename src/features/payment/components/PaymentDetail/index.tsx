import { Button, PaymentBadge } from "@components/button"
import { Dropdown } from "@components/dropdown"
import { FaRegCopy } from "react-icons/fa6"
import { MdCalendarMonth } from "react-icons/md"



interface Props {

}

const PaymentDetail: React.FC<Props> = ({ }) => {
    return <div className="p-4 bg-white rounded-2xl flex-1 shadow-xs h-fit sticky top-12">
        <div className="flex items-center justify-between border-b pb-2.5">
            <div className="flex flex-col gap-1">
                <h5 className="text-primary">Payment Detail</h5>
                <span className="flex items-center gap-1 text-grey-100 text-xs">
                    <MdCalendarMonth className="w-4 h-4" />
                    08 Mei 2025, 15:38 WIB
                </span>
            </div>
            <PaymentBadge type="waiting" />
        </div>
        <div className="flex flex-col gap-1 mb-4 mt-3">
            <label className="font-bold text-sm text-black mb-2">Payment Method</label>
            <Dropdown id="payment-method-dropdown" value="BCA" onChange={() => null} options={["BCA"]} />
            <label className="text-grey-70 text-xs mt-2">Transfer to</label>
            <button className="border h-12 border-grey-60 rounded-lg py-2 px-3 flex justify-between items-center">
                <h5 className="text-grey-80">61167613</h5>
                <FaRegCopy className="w-5 h-5 fill-grey-70" />
            </button>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
                <span className="text-black font-bold text-sm">Total Amount Paid</span>
                <span className="text-primary font-semibold text-lg">Rp 13.770.000</span>
            </div>
            <Button className="rounded-lg text-xs px-2 h-8">Check Payment Status</Button>
        </div>
    </div>
}

export default PaymentDetail
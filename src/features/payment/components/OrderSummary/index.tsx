import { Button } from "@components/button"
import Dropdown from "@components/dropdown/Dropdown"
import { Link } from "@components/navigation"



interface Props {

}

const OrderSummary: React.FC<Props> = ({ }) => {
    return <div className="bg-white rounded-b-2xl">
        <div className="flex items-center gap-2 p-3 border-b-2 border-base-border">
            <h5 className="font-semibold">Trip Summary</h5>
        </div>
        <div className="p-3 text-sm">
            <div className="flex justify-between mb-2">
                <label className="font-bold">Emirates Airlines</label>
                <span className="text-grey-80">Rp 27.000.000</span>
            </div>
            <div className="flex justify-between">
                <label className="font-bold">Admin fee</label>
                <span className="text-grey-80">Rp 540.000</span>
            </div>
            <span className="text-2xs text-grey-80">2%</span>
            <div className="flex justify-between my-4">
                <label className="font-bold">Total Amount Paid</label>
                <h5 className="font-semibold text-primary">Rp 27.540.000</h5>
            </div>
            <Dropdown id="dropdown-payment-type" onChange={() => null} value={""} labelClassName="border-b last:border-none" panelClassName="-bottom-1 border" placeholder="Set up installment plan" options={[{
                label: "Pay in 2x Rp 13.770.000",
                value: "dp"
            }, {
                label: "Full Payment",
                value: "fp"
            }]} />
            <Link href="/my_flight"><Button className="w-full mt-4">Pay Now</Button></Link>
        </div>
    </div>
}

export default OrderSummary
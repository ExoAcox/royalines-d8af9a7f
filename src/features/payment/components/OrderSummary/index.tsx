import { Button } from "@components/button"
import Dropdown from "@components/dropdown/Dropdown"
import { Link } from "@components/navigation"
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore"
import { convertCurrency } from "@functions/common"
import { useState } from "react"



interface Props {

}

const OrderSummary: React.FC<Props> = ({ }) => {
    const chooseFlightStore = useChooseFlightStore()
    const { passenger } = chooseFlightStore

    const [method, setMethod] = useState("")

    const price = passenger * 9000000
    const pax = price / 100 * 2
    const totalPrice = price + pax;

    return <div className="bg-white rounded-b-2xl">
        <div className="flex items-center gap-2 p-3 border-b-2 border-base-border">
            <h5 className="font-semibold">Order Summary</h5>
        </div>
        <div className="p-3 text-sm">
            <div className="flex justify-between">
                <label className="font-bold">Royal Jet Aviation</label>
                <span className="text-grey-80">Rp {convertCurrency(price)}</span>
            </div>
            <span className="text-2xs text-grey-80">{passenger} passenger(s) x Rp {convertCurrency(9000000)}</span>
            <div className="flex justify-between mt-2">
                <label className="font-bold">Admin fee</label>
                <span className="text-grey-80">Rp {convertCurrency(pax)}</span>
            </div>
            <span className="text-2xs text-grey-80">2%</span>
            <div className="flex justify-between my-4 items-center">
                <label className="font-bold">Total Amount Paid</label>
                <h5 className="font-semibold text-primary">Rp {convertCurrency(totalPrice)}</h5>
            </div>
            <Dropdown lite id="dropdown-payment-type" onChange={(value) => setMethod(value)} value={method} labelClassName="border-b last:border-none" panelClassName="-bottom-1 border" placeholder="Set up installment plan" options={[{
                label: `Pay in 2x Rp ${convertCurrency(totalPrice / 2)}`,
                value: "dp"
            }, {
                label: "Full Payment",
                value: "fp"
            }]} />
            <Link href="/my_flight" disabled={!method}><Button className="w-full mt-4" disabled={!method}>Pay Now</Button></Link>
        </div>
    </div>
}

export default OrderSummary
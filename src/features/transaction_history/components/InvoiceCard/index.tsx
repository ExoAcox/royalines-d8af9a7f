import { Button, PaymentBadge } from "@components/button"
import useModal from "@hooks/useModal";
import { LuRefreshCw } from "react-icons/lu";

interface Props {

}

const InvoiceCard: React.FC<Props> = ({ }) => {
    const { setModal } = useModal("confirm-payment-modal")

    const handleConfirm = () => setModal(true)

    return <div className="shadow-xs py-4 px-5 rounded-2xl bg-white flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <span className="font-bold text-primary">
                INV/20250508/MPL/52188823546
            </span>
            <PaymentBadge type="success" />
        </div>
        <div className="flex justify-between">
            <span className="text-grey-70">Purchase Date</span>
            <span className="text-grey-100">08 Mei 2025, 15:38 WIB</span>
        </div>
        <div className="flex justify-between">
            <span className="text-grey-70">Payment Method</span>
            <span className="text-grey-100">Manual Bank Transfer</span>
        </div>
        <div className="flex justify-between">
            <span className="text-grey-70">Payment Type</span>
            <span className="text-grey-100">Manual Full Payment</span>
        </div>
        <div className="flex gap-4">
            <Button className="flex-1" onClick={handleConfirm}>Confirm Payment</Button>
            <Button className="flex-1" variant="ghost"><LuRefreshCw /> Refresh Status</Button>
        </div>
        <p className="text-xs text-grey-80">For a quicker verification process, please confirm your payment by clicking “Confirm Payment” and attaching the transfer proof.</p>
    </div>
}

export default InvoiceCard
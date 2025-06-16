import { PaymentBadge } from "@components/button"


interface Props {

}

const InvoiceCard: React.FC<Props> = ({ }) => {
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
    </div>
}

export default InvoiceCard
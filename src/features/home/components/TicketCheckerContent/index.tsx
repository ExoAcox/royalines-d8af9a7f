import { Button, PaymentBadge } from "@components/button"
import { AirlineInfoCard, FlightInfoCard } from "@components/card"
import { TextField } from "@components/input"
import { When } from "react-if"


interface Props {

}

const TicketCheckerContent: React.FC<Props> = ({ }) => {
    return <div><div className="bg-white rounded-2xl p-4">
        <div className="text-lg font-bold mb-6 mt-1 block">Search Ticket</div>
        <div className="flex items-end gap-4">
            <TextField label="Booking Code" placeholder="Insert your booking code" required parentClassName="flex-1" />
            <Button className="w-36 h-12">Search</Button>
        </div>
    </div>
        <When condition={true}>
            <div className="bg-white rounded-2xl mt-6">
                <div className="flex items-center justify-between py-2 px-4">
                    <label className="text-lg font-semibold">Ticket Detail</label>
                    <PaymentBadge type="success" />
                </div>
                <div className="p-4 border-t">
                    <FlightInfoCard className="pb-4 mb-4 border-b" />
                    <AirlineInfoCard />
                </div>
            </div>
        </When>
    </div>
}

export default TicketCheckerContent
import { ActionButton, BookingBadge } from "@components/button"
import { Table, TableHeader, TableBody } from "@components/table"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"



interface Props {

}


const flights = [{
    bookingCode: "ID-1",
    flightStatus: "Planned",
    flightCode: "GA-712",
    flightRouteFrom: "Jakarta, Indonesia (DHX)",
    flightRouteTo: "Jeddah, Saudi Arabia (JED)",
    departure: "22 Mei 2022, 7.00",
    paid: "Rp 27.000.000",
    ticketStatus: "green"
}, {
    bookingCode: "ID-2",
    flightStatus: "Planned",
    flightCode: "GA-712",
    flightRouteFrom: "Jakarta, Indonesia (DHX)",
    flightRouteTo: "Jeddah, Saudi Arabia (JED)",
    departure: "22 Mei 2022, 7.00",
    paid: "Rp 27.000.000",
    ticketStatus: "green"
}, {
    bookingCode: "ID-3",
    flightStatus: "Planned",
    flightCode: "GA-712",
    flightRouteFrom: "Jakarta, Indonesia (DHX)",
    flightRouteTo: "Jeddah, Saudi Arabia (JED)",
    departure: "22 Mei 2022, 7.00",
    paid: "Rp 27.000.000",
    ticketStatus: "green"
}, {
    bookingCode: "ID-4",
    flightStatus: "Planned",
    flightCode: "GA-712",
    flightRouteFrom: "Jakarta, Indonesia (DHX)",
    flightRouteTo: "Jeddah, Saudi Arabia (JED)",
    departure: "22 Mei 2022, 7.00",
    paid: "Rp 27.000.000",
    ticketStatus: "green"
}, {
    bookingCode: "ID-5",
    flightStatus: "Planned",
    flightCode: "GA-712",
    flightRouteFrom: "Jakarta, Indonesia (DHX)",
    flightRouteTo: "Jeddah, Saudi Arabia (JED)",
    departure: "22 Mei 2022, 7.00",
    paid: "Rp 27.000.000",
    ticketStatus: "green"
}]

const tableHeader = ["Booking Code", "Flight Status", "Flight Code", "Flight Route", "Departure", "Amount Paid", "Ticket Status", "Action"]



const TableContent: React.FC<Props> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()


    const tableBody = flights.map((flight) => {
        const data = [
            flight.bookingCode,
            <span className="text-blue-600 font-bold" key={flight.bookingCode}>{flight.flightStatus}</span>,
            flight.flightCode,
            <p className="text-grey-70" key={flight.bookingCode}>{flight.flightRouteFrom} -<br />{flight.flightRouteTo}</p>,
            <span className="text-grey-70" key={flight.bookingCode}>flight.departure</span>,
            <p className="text-grey-70" key={flight.bookingCode}>{flight.paid}/<br />{flight.paid}</p>,
            <BookingBadge color={flight.ticketStatus} key={flight.bookingCode} />,
            <div className="flex flex-col gap-1 items-center" key={flight.bookingCode}>
                <ActionButton type="fill_passenger" onClick={() => {
                    routerChange()
                    router.push("/choose_seat")
                }} />
                <ActionButton type="view_receipt" />
            </div>
        ]

        return data
    })

    return <div>
        <Table>
            <TableHeader data={tableHeader} />
            <TableBody data={tableBody} />
        </Table>
    </div>
}

export default TableContent
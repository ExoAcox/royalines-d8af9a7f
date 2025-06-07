import { ActionButton, BookingBadge } from "@components/button"
import { Table, TableHeader, TableBody } from "@components/table"
import useModal from "@hooks/useModal"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"



interface Props {

}


const passengers = [{
    name: "Ms. Anya Forger",
    seat: "C23",
    birthDate: "20 May 1980",
    nationality: "Indonesia",
    passport: "582374462",
    passportCountry: "Indonesia",
    expired: "January 2030",
}, {
    name: "Ms. Anya Forger",
    seat: "C23",
    birthDate: "20 May 1980",
    nationality: "Indonesia",
    passport: "582374462",
    passportCountry: "Indonesia",
    expired: "January 2030",
}, {
    name: "Ms. Anya Forger",
    seat: "C23",
    birthDate: "20 May 1980",
    nationality: "Indonesia",
    passport: "582374462",
    passportCountry: "Indonesia",
    expired: "January 2030",
}, {
    name: "Ms. Anya Forger",
    seat: "C23",
    birthDate: "20 May 1980",
    nationality: "Indonesia",
    passport: "582374462",
    passportCountry: "Indonesia",
    expired: "January 2030",
}, {
    name: "Ms. Anya Forger",
    seat: "C23",
    birthDate: "20 May 1980",
    nationality: "Indonesia",
    passport: "582374462",
    passportCountry: "Indonesia",
    expired: "January 2030",
}]

const tableHeader = ["No", "Full Name", "Seat Number", "Date of Birth", "Nationality", "Passport Number", "Issuing Country", "Expiry Date", "Action"]



const TableContent: React.FC<Props> = ({ }) => {
    const { setData } = useModal("edit-passenger-modal")


    const tableBody = passengers.map((passenger, index) => {
        const data = [
            index + 1,
            passenger.name,
            passenger.seat ?? "-",
            passenger.birthDate,
            passenger.nationality,
            passenger.passport,
            passenger.passportCountry,
            passenger.expired,
            <div className="flex flex-col gap-1 items-center">
                <ActionButton id={`passenger-action-${index}`} type="edit_passenger" onEdit={() => setData(passenger)} onDelete={() => null} />
                <ActionButton type="view_passenger" />
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
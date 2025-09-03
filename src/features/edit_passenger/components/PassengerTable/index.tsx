import { ActionButton } from "@components/button"
import { Table, TableHeader, TableBody } from "@components/table"
import useModal from "@hooks/useModal"



interface Props {
    hideAction?: boolean;
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



const TableContent: React.FC<Props> = ({ hideAction }) => {
    const { setData } = useModal("edit-passenger-modal")
    const deleteConfirmModal = useModal("delete-confirm-modal")


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
            <div className="flex flex-col gap-1 items-center" key={index}>
                <ActionButton id={`passenger-action-${index}`} type="edit_passenger" onEdit={() => setData(passenger)} onDelete={() => {
                    deleteConfirmModal.setModal(true)
                }} />
                <ActionButton type="view_passenger" />
            </div>
        ]



        return hideAction ? data.slice(0, -1) : data
    })

    return <div>
        <Table>
            <TableHeader data={hideAction ? tableHeader.slice(0, -1) : tableHeader} />
            <TableBody data={tableBody} />
        </Table>
    </div>
}

export default TableContent
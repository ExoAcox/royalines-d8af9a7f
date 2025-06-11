"use client"

import { Button } from "@components/button"
import { Responsive, Wrapper } from "@components/layout"
import { Link } from "@components/navigation"
import { PassengerHeader, PassengerTable, PassengerModal, ConfirmModal } from "@features/edit_passenger/components"
import useModal from "@hooks/useModal"
import { PiSeatFill } from "react-icons/pi"



const PassengersData: React.FC<Page> = ({ }) => {
    const cancelConfirmModal = useModal("cancel-confirm-modal")
    const deleteConfirmModal = useModal("delete-confirm-modal")
    const addPassengerModal = useModal("add-passenger-modal")


    return <Wrapper>
        <Responsive className="pt-12 pb-32">
            <PassengerHeader />
            <PassengerTable />
        </Responsive>
        <Responsive className="flex items-center justify-end h-[5rem]" parentClassName="w-full fixed bottom-0 border-t bg-white">
            <Link href="/choose_seat"><Button><PiSeatFill />Manage Seats</Button></Link>
        </Responsive>

        <PassengerModal id="add-passenger-modal" />
        <PassengerModal id="edit-passenger-modal" />

        <ConfirmModal id="cancel-confirm-modal" title="Discard new passenger?" buttons={[{
            label: "Keep Editing",
            onClick: () => {
                cancelConfirmModal.setModal(false)
            }
        },
        {
            label: "Discard Passenger",
            onClick: () => {
                cancelConfirmModal.setModal(false)
                addPassengerModal.setModal(false)
            }
        }]}>If you cancel now, the passenger details you entered will be lost.</ConfirmModal>
        <ConfirmModal id="delete-confirm-modal" title="Remove this passenger?" buttons={[{
            label: "Keep Passenger",
            onClick: () => {
                deleteConfirmModal.setModal(false)
            }
        },
        {
            label: "Delete Passenger",
            onClick: () => null
        }]}>If you cancel now, the passenger details you entered will be lost.</ConfirmModal>
    </Wrapper>
}

export default PassengersData;
import { Button } from "@components/button";
import { Dropdown } from "@components/dropdown";
import { TextField } from "@components/input";
import { Modal } from "@components/layout"
import { WarningText } from "@components/text";
import useModal from "@hooks/useModal";




interface Props {
    id: string;
}

const PassengerModal: React.FC<Props> = ({ id }) => {
    const { modal, setModal, data } = useModal(id);
    const cancelConfirmModal = useModal("cancel-confirm-modal")

    const close = () => cancelConfirmModal.setModal(true)


    return <Modal visible={modal} className="!max-w-[52rem]">
        <div className="flex items-center gap-3 mb-8">
            <h4>Add Passengers</h4>
            <Button onClick={close} className="ml-auto border-error-80 text-error-80 w-[8.375rem]" variant="ghost">Cancel</Button>
            <Button className="w-[8.375rem]">Save Data</Button>
        </div>
        <WarningText>For international travel/transit, your name must exactly match your passport. Airlines may deny boarding or charge a fee for name changes.</WarningText>
        <div className="flex flex-col gap-4 mt-4">
            <Dropdown parentClassName="max-w-[20rem]" id="passenger-dropdown-title" value="" label="Title" placeholder="Mr/Mrs/Ms" onChange={() => null} options={["Mr", "Mrs", "Ms"]} required />
            <div className="flex gap-4">
                <TextField parentClassName="flex-1" label="First & Middle Name" required placeholder="e.g. Anya" example="If you do not have a middle name, please enter only your first name" />
                <TextField parentClassName="flex-1" label="last Name" required placeholder="e.g. Forger" example="Without title and punctuation marks" />
            </div>
            <div className="flex gap-4">
                <TextField parentClassName="flex-1" label="Date of Birth" required placeholder="DD/MM/YYYY" />
                <Dropdown parentClassName="flex-1" id="passenger-dropdown-nationality" value="" label="Nationality" placeholder="Select nationality" onChange={() => null} options={["Indonesia"]} required />
            </div>
            <div className="flex gap-4">
                <TextField parentClassName="flex-1" label="Password Number" required placeholder="Input your passport number" />
                <Dropdown parentClassName="flex-1" id="passenger-dropdown-country" value="" label="Issuing Country" placeholder="Select issuing country" onChange={() => null} options={["Indonesia"]} required />
            </div>
            <div className="flex gap-4">
                <TextField parentClassName="flex-1" label="Expiry Date" required placeholder="DD/MM/YYYY" />
                <div className="flex-1" />
            </div>
        </div>
    </Modal>
}

export default PassengerModal
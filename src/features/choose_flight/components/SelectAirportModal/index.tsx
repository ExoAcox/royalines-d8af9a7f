import { TextField } from "@components/input"
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal";
import { MdClose } from "react-icons/md"

import AirportList from "./components/AirportList";

interface Props {
    onSelect: (data: { airport: object, type?: string }) => void;
}

const airports = [{
    name: "Soekarno-Hatta International Airport (CGK)",
    location: "Jakarta, Indonesia"
},]

const SelectAirportModal: React.FC<Props> = ({ onSelect }) => {
    const { modal, setModal, data } = useModal("select-airport-modal")

    const close = () => setModal(false)

    return <Modal visible={modal} className="!p-0">
        <div className="flex items-center justify-between border-b border-grey-40 px-4 py-3"><h5>Select City or Airports</h5><MdClose className="cursor-pointer" onClick={close} /></div>
        <div className="p-4 pt-3">
            <TextField className="w-[50.75rem]" placeholder="City, Airport..." />
            <AirportList airports={airports} onSelect={() => setModal(false)}>Popular places</AirportList>
        </div>

    </Modal>
}

export default SelectAirportModal
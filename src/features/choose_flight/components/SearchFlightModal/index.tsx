import { Modal } from "@components/layout"
import useModal from "@hooks/useModal"
import SearchFlightMenu from "../SearchFlightMenu"



interface Props {

}

const EditSearchModal: React.FC<Props> = ({ }) => {
    const { modal, setModal } = useModal("search-flight-modal")

    return <Modal visible={modal} onBackgroundClick={() => setModal(false)}>
        <SearchFlightMenu title="Edit Search" />
    </Modal>
}

export default EditSearchModal
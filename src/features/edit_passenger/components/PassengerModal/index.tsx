import { Modal } from "@components/layout"
import useModal from "@hooks/useModal";




interface Props {
    id: string;
}

const PassengerModal: React.FC<Props> = ({ id }) => {
    const { modal, setModal, data } = useModal(id);


    return <Modal visible={modal} onBackgroundClick={() => setModal(false)}>
        <div>ini modal</div>
    </Modal>
}

export default PassengerModal
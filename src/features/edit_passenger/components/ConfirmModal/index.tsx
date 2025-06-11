import { Button } from "@components/button";
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal";




interface Props {
    id: string;
    title: string;
    children: string;
    buttons: {
        label: string;
        onClick: () => void;
    }[]
}

const ConfirmModal: React.FC<Props> = ({ id, title, children, buttons }) => {
    const { modal, data } = useModal(id);

    return <Modal visible={modal} className="!mt-24 !max-w-[27.5rem]">
        <h4 className="text-center">{title}</h4>
        <p className="text-center my-5">{children}</p>
        <div className="flex gap-4">
            <Button onClick={buttons[0].onClick} className="flex-1">
                {buttons[0].label}
            </Button>
            <Button onClick={buttons[1].onClick} className="flex-1 text-error-80 border-error-80" variant="ghost">
                {buttons[1].label}
            </Button>
        </div>
    </Modal>
}

export default ConfirmModal
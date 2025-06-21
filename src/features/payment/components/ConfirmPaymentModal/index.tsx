import { Button } from "@components/button"
import { TextField } from "@components/input";
import { Modal } from "@components/layout";
import useModal from "@hooks/useModal";
import Image from "next/image"

import { BsTrash3Fill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { TbFileUpload } from "react-icons/tb";

import UploadIcon from "@images/bitmap/icon-upload-big.png"
import { useState } from "react";



interface Props {
}

const ConfirmPaymentModal: React.FC<Props> = ({ }) => {
    const { modal, setModal } = useModal("confirm-payment-modal")
    const [file, setFile] = useState<File | null>(null)

    const close = () => setModal(false)

    const handleFile = (files: FileList) => {
        if (files.length > 0) {
            setFile(files[0]);
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files

        if (files) handleFile(files)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        handleFile(e.dataTransfer.files);
    };

    return <Modal visible={modal}>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <h4>Confirm My Payment</h4>
                <Button color="red" variant="ghost" onClick={close} className="ml-auto w-28"><BsTrash3Fill /> Cancel</Button>
                <Button className="w-28"><IoSend /> Send</Button>
            </div>
            <TextField label="Account's Name" placeholder="e.g. Anya Forger" required />
            <TextField label="Account Number" placeholder="e.g. 1234567890" required />

            <label className="-mb-2 font-semibold text-sm">Transfer Proof</label>
            <div className="border border-dashed rounded-2xl flex-center flex-col w-[40rem] p-2 pb-5" onDrop={handleDrop}>
                <Image src={UploadIcon} alt="upload" />
                <label className="text-xl">{file?.name ?? "Drop file to upload"}</label>
                <div className="flex items-center gap-2 my-3">
                    <div className="w-18 h-[1px] bg-grey-60" />
                    <span className="text-grey-80 text-xs">or</span>
                    <div className="w-18 h-[1px] bg-grey-60" />
                </div>
                <input
                    id="hiddenInput"
                    type="file"
                    onChange={handleInput}
                    className="hidden"
                />
                <Button><TbFileUpload /> Upload File</Button>
            </div>
        </div>
    </Modal>
}

export default ConfirmPaymentModal
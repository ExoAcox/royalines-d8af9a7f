import { IoMdClose } from "react-icons/io";
import { TextArea, TextField } from "@components/input";
import { Button } from "@components/button";

import { AiOutlineMail } from "react-icons/ai";
import { When } from "react-if";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "@hooks/useSidebar";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { requestUsecase, RequestUsecase } from "@api/customer";
import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";

const PHONE_NUMBER_REGEX = /\(?(?:\+62|62|0)(?:\d{2,3})?\)?[ .-]?\d{2,4}[ .-]?\d{2,4}[ .-]?\d{2,4}/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


interface Props {
    dict: Dictionary
}

const Sidebar: React.FC<Props> = ({ dict }) => {
    const [isLoading, setLoading] = useState(false)
    const sidebar = useSidebar()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RequestUsecase>({ shouldFocusError: true });

    const onSubmit: SubmitHandler<RequestUsecase> = async (data, e) => {
        e?.preventDefault();
        setLoading(true)

        try {
            await requestUsecase(data)
            setLoading(false)
            toast.success("Request telah berhasil")
            sidebar.set({ contactUs: false })
            reset()
        } catch (error) {
            setLoading(false)
            toast.error((error as FetchError)?.message)
        }
    };

    useEffect(() => {
        if (sidebar.usecase) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [sidebar.usecase])

    useEffect(() => {
        return () => {
            document.body.style.overflow = "scroll"
        }
    }, [sidebar.usecase])

    return <AnimatePresence>
        {sidebar.usecase && (
            <motion.div

                key="sidebar-usecase"
                initial={{ translateX: "100%", opacity: 0 }}
                animate={{ translateX: "0%", opacity: 1 }}
                exit={{ translateX: "100%", opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed z-[4] top-0 right-0 overflow-auto h-dvh w-[25rem] bg-tertiary-25 p-6"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <IoMdClose onClick={() => sidebar.set({ usecase: false })} className="w-6 h-6 cursor-pointer shrink-0" />
                    <h5>{dict.sidebar.usecase.title}</h5>
                    <span className="text-bl mb-2">{dict.sidebar.usecase.body}</span>
                    <TextField controller={register("name", {
                        required: "Name tidak boleh kosong.",
                    })} error={errors.name} placeholder="Nama anda" />
                    <TextField controller={register("email", {
                        required: "Email tidak boleh kosong.",
                        pattern: {
                            value: new RegExp(`(${EMAIL_REGEX.source})`),
                            message: "Masukan email yang valid",
                        },
                    })} error={errors.email} prefix={<AiOutlineMail className="fill-primary-500" />} placeholder="Email anda" />
                    <TextField controller={register("phone", {
                        required: "Nomor telepon tidak boleh kosong.",
                        pattern: {
                            value: new RegExp(`(${PHONE_NUMBER_REGEX.source})`),
                            message: "Masukan nomor telepon yang valid",
                        },
                    })} error={errors.phone} prefix={<BsTelephone className="fill-primary-500" />} placeholder="Nomor handphone anda" />
                    <TextField controller={register("institution", {
                        required: "Instansi tidak boleh kosong.",
                    })} error={errors.institution} placeholder="Instansi anda" />
                    <TextField controller={register("institution_field", {
                        required: "Bidang instansi tidak boleh kosong.",
                    })} error={errors.institution_field} placeholder="Bidang instansi anda" />
                    <TextArea rows={4} controller={register("description", {
                        required: "Tidak boleh kosong.",
                    })} error={errors.description} placeholder="Kebutuhan anda" />
                    <Button loading={isLoading} type="submit" className="w-full font-bold bg-tertiary-500 border-tertiary-500">{dict.sidebar.usecase.button}</Button>
                    <p className="text-cs text-center">{dict.sidebar.usecase.term}</p>
                    <div className="p-4 pl-6 border border-information-500 border-l-4 mt-2 text-cl text-primary-700">
                        Kami akan memberi tahu melalui email ketika usecase yang Anda cari sudah kami siapkan.
                    </div>
                </form>
            </motion.div>
        )}
    </AnimatePresence>

};

export default Sidebar;

import { IoMdClose } from "react-icons/io";
import { TextArea, TextField } from "@components/input";
import { Button } from "@components/button";

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "@hooks/useSidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import { requestDemo, RequestDemo } from "@api/customer";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

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
    } = useForm<RequestDemo>({ shouldFocusError: true });

    const onSubmit: SubmitHandler<RequestDemo> = async (data, e) => {
        e?.preventDefault();
        setLoading(true)

        try {
            await requestDemo(data)
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
        if (sidebar.contactUs) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [sidebar.contactUs])

    useEffect(() => {
        return () => {
            document.body.style.overflow = "scroll"
        }
    }, [sidebar.contactUs])

    return <AnimatePresence>
        {sidebar.contactUs && (
            <motion.div
                key="sidebar-contactus"
                initial={{ translateX: "100%", opacity: 0 }}
                animate={{ translateX: "0%", opacity: 1 }}
                exit={{ translateX: "100%", opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed z-[4] top-0 right-0 overflow-auto h-dvh w-[25rem] sm:w-full bg-tertiary-25 p-6 sm:p-4"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <IoMdClose onClick={() => sidebar.set({ contactUs: false })} className="w-6 h-6 cursor-pointer shrink-0" />
                    <h5>{dict.sidebar.contact_us.title}</h5>
                    <span className="text-bl mb-2">{dict.sidebar.contact_us.body}</span>
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
                    <TextArea rows={4} controller={register("description", {
                        required: "Tidak boleh kosong.",
                    })} error={errors.description} placeholder="Kebutuhan anda" />
                    <Button loading={isLoading} type="submit" className="w-full font-bold bg-tertiary-500 border-tertiary-500">{dict.sidebar.contact_us.button1}</Button>
                    <p className="text-cs text-center">{dict.sidebar.contact_us.term}</p>
                    <div className="flex items-center gap-2 my-6 lg:my-4"><div className="flex-1 h-[1px] bg-primary-100" /><span className="text-cl text-primary-300">{dict.or}</span><div className="flex-1 h-[1px] bg-primary-100" /></div>
                    <Button onClick={() => {
                        window.open('https://wa.me/6281320707004', '_blank');
                    }} className="bg-success-500 w-full font-bold border-success-500">{dict.sidebar.contact_us.button2}</Button>
                </form>
            </motion.div>

        )}
    </AnimatePresence>

    // <div className="h-dvh w-dvh hidden md:block fixed inset-0">
    //     <div className="absolute top-0 bottom-0 right-0 w-[500px] bg-white"></div>
    // </div>
};

export default Sidebar;

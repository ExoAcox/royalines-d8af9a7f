import { Link } from "@components/navigation";
import Image from "next/image"

import Background from "@images/bitmap/background_kabah_1.jpg"
import Logo from "@images/bitmap/logo-royalines.png"

interface Props {
    children: React.ReactNode
    title: string;
}



const LoginWrapper: React.FC<Props> = ({ children, title }) => {
    return <div className="relative py-24 px-18 min-h-dvh w-full flex justify-end items-center max-lg:px-4">
        <Image src={Background} alt="" fill={true} className="absolute inset-0 object-cover" />
        <div className="absolute inset-0 z-[2] opacity-60" style={{ background: "linear-gradient(107.14deg, rgba(217, 217, 217, 0), #000000)" }} />
        <div className="w-[31.25rem] overflow-hiddenrelative z-[3] bg-white h-fit rounded-2xl" >
            <div className="px-6 py-10 flex flex-col ">
                <Link href="/">
                    <Image src={Logo} alt="logo" className="h-10 w-[11.375rem]" />
                </Link>
                <label className="text-xl text-primary font-bold mt-6">{title}</label>
                <p className="text-grey-80 text-sm mt-1 mb-5">
                    Manage client bookings easily and quickly. Log in or sign up to start using Royalines.
                </p>
                <div>
                    {children}
                </div>
            </div>
            <div className="flex-center h-21 shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)]">
                <p className="text-grey-70 text-sm text-center p-4 max-w-[26rem]">
                    By continuing, you agree to the <Link href="/" className="font-bold text-primary">Terms & Conditions </Link> and
                    acknowledge that you have read the <Link href="/" className="font-bold text-primary">Privacy Notice.</Link>
                </p>
            </div>
        </div>
    </div >
}

export default LoginWrapper;
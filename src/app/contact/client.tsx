"use client"

import { Responsive, Wrapper } from "@components/layout"
import { ContactInfo, InputForm } from "@features/contact/components"
import Image from "next/image"

import Background from "@images/bitmap/background-flight-3.jpg"


const Contact: React.FC<Page> = ({ }) => {

    return <Wrapper className="flex flex-col">
        <Responsive className="flex-center w-full h-full" parentClassName="flex-1">
            <div className="flex justify-between w-full max-w-[90rem] py-12 items-center">
                <Image src={Background} alt="" fill={true} className="absolute object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(108.68deg, #FFFFFF 28%, rgba(255, 255, 255, 0) 90.61%)" }} />
                <ContactInfo />
                <InputForm />
            </div>
        </Responsive>
        <Responsive className="flex-center p-16" parentClassName="bg-[#0A142F]">
            <span className="text-white/65 text-xs">© 2025 Royal Jet Aviation. All rights reserved.</span>
        </Responsive>
    </Wrapper >

}

export default Contact
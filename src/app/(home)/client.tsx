"use client";

import { Wrapper } from "@components/layout";

import Image from "next/image"

import { PrivateFlightContent, TopNavbar, Footer, TicketCheckerContent } from "@features/home/components";

import Background from "@images/bitmap/background-flight-2.jpg"
import { SelectAirportModal } from "@features/choose_flight/components";
import { useState } from "react";
import { When } from "react-if";


const HomeClient: React.FC<Page> = ({ user }) => {
    const [activeTab, setActiveTab] = useState("private-flight")

    console.log(process.env.AUTH_SECRET)
    console.log(process.env.NEXT_PUBLIC_TOKEN_KEY)

    return (
        <Wrapper user={user} className="bg-[#0A142F]">
            <div className="bg-black px-6 py-20 flex justify-center relative">
                <Image src={Background} alt="" fill={true} className="absolute inset-0 object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(107.14deg, rgba(217, 217, 217, 0), #000000)" }} />
                <div className="min-w-[50rem] relative">
                    <TopNavbar activeTab={activeTab} onClick={setActiveTab} />
                    <When condition={activeTab === "private-flight"}>
                        <PrivateFlightContent />
                    </When>
                    <When condition={activeTab === "ticket-checker"}>
                        <TicketCheckerContent />
                    </When>
                </div>
            </div>
            <Footer />

            <SelectAirportModal onSelect={(data) => console.log(data.airport)} />
        </Wrapper>
    );
};

export default HomeClient;

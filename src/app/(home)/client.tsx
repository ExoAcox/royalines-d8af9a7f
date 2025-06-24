"use client";

import { Wrapper } from "@components/layout";

import Image from "next/image"

import { PrivateFlightContent, TopNavbar, Footer, TicketCheckerContent } from "@features/home/components";

import Background from "@images/bitmap/background-flight-2.jpg"
import { SelectAirportModal } from "@features/choose_flight/components";
import { useState } from "react";
import { When } from "react-if";
import { useRouterEvent } from "@hooks/useRouter";
import { useRouter } from "next/navigation";
import { useChooseFlightStore } from "@features/choose_flight/stores/dataStore";


const HomeClient: React.FC<Page> = ({ user }) => {
    const [activeTab, setActiveTab] = useState("private-flight")
    const chooseFlightStore = useChooseFlightStore()

    const { routerChange } = useRouterEvent()
    const router = useRouter()


    const handleSearchFlight = () => {
        routerChange()
        router.push(`/choose_flight?data=${JSON.stringify(chooseFlightStore)}`)
    }

    return (
        <Wrapper user={user} className="bg-[#0A142F]">
            <div className="bg-black px-6 py-20 flex justify-center relative">
                <Image src={Background} alt="" fill={true} className="absolute inset-0 object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(107.14deg, rgba(217, 217, 217, 0), #000000)" }} />
                <div className="min-w-[50rem] relative">
                    <TopNavbar activeTab={activeTab} onClick={setActiveTab} />
                    <When condition={activeTab === "private-flight"}>
                        <PrivateFlightContent onClick={handleSearchFlight} />
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

"use client";

import { Wrapper } from "@components/layout";

import Image from "next/image"

import { MainContent, TopNavbar, Footer } from "@features/home/components";

import Background from "@images/bitmap/background_kabah_2.jpg"
import { SelectAirportModal } from "@features/choose_flight/components";


const HomeClient: React.FC<Page> = () => {
    return (
        <Wrapper>
            <div className="bg-black px-6 py-20 flex justify-center relative">
                <Image src={Background} alt="" fill={true} className="absolute inset-0 object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(107.14deg, rgba(217, 217, 217, 0), #000000)" }} />
                <div className="min-w-[50rem] relative">
                    <TopNavbar />
                    <MainContent />
                </div>
            </div>
            <Footer />

            <SelectAirportModal onSelect={(data) => console.log(data.airport)} />
        </Wrapper>
    );
};

export default HomeClient;

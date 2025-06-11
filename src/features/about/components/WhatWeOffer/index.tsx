import { Responsive } from "@components/layout"
import Image, { StaticImageData } from "next/image";

import IconPlane from "@images/bitmap/icon-plane-big.png"
import IconBaggage from "@images/bitmap/icon-baggage-big.png"
import IconHotel from "@images/bitmap/icon-hotel-big.png"
import IconVisa from "@images/bitmap/icon-visa-big.png"
import IconCs from "@images/bitmap/icon-cs-big.png"
import { When } from "react-if";

interface CardProps {
    children: string;
    src: StaticImageData
    soon?: boolean;
}

const Card: React.FC<CardProps> = ({ children, src, soon }) => {
    return <div className="rounded-2xl bg-white px-4 pb-8 pt-12 flex-1 flex items-center gap-10 flex-col min-w-[20rem] relative">
        <When condition={soon}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-warning-80 text-xl rounded-3xl px-2 font-semibold bg-warning-30">Soon</div>
        </When>
        <Image src={src} alt="icon" />
        <span className="text-xl text-center font-semibold text-primary">{children}</span>
    </div>
}

interface Props {

}

const WhatWeOffer: React.FC<Props> = ({ }) => {
    return <Responsive parentClassName="bg-primary-bg" className="flex flex-col items-center pt-14 pb-10">
        <h1 className="text-primary">What We Offer</h1>
        <p className="font-semibold text-grey-80 mt-5 mb-6">With Royalines, your pilgrimage begins with peace of mind—on the ground and in the air. We are Your Royal Journey Solution to Umrah and beyond.</p>
        <div className="flex flex-wrap gap-4 justify-center max-w-[90rem]">
            <Card src={IconPlane}>Private Charter Flights</Card>
            <Card src={IconHotel} soon>Easy Hotel Reservation</Card>
            <Card src={IconVisa} soon>Visa Processing Assistance</Card>
            <Card src={IconCs}>End-to-end travel coordination with 24/7 support</Card>
        </div>
    </Responsive>
}

export default WhatWeOffer
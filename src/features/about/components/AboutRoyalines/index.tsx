
import Image from "next/image"
import Illustration from "@images/bitmap/illustration-about.jpg"
import { Responsive } from "@components/layout"

interface Props {

}

const AboutRoyalines: React.FC<Props> = ({ }) => {
    return <Responsive className="flex items-center justify-between gap-10 pt-12 pb-10 max-w-[90rem]" parentClassName="bg-white">
        <div className="text-grey-80 flex flex-col gap-4">
            <h1 className="text-primary">
                About Royalines,<br />
                Your Royal Journey Solution.
            </h1>
            <p className="max-w-[38.75rem]">
                Royalines, proudly operated by PT Royal Jet Aviation, is a premier travel service specializing in private chartered flights for Umrah and complete pilgrimage support-from visas to hotel accommodations.
            </p>
            <p className="max-w-[38.75rem]">
                We understand the importance of your spiritual journey, and our mission is to make it seamless, safe, and supremely comfortable. Our bespoke services are tailored for individuals, families, and groups who value privacy, convenience, and peace of mind during every leg of their sacred trip.
            </p>
        </div>
        <Image src={Illustration} alt="image" className="rounded-2xl" />
    </Responsive>
}

export default AboutRoyalines
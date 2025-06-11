
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
                Royalines, operated by <b>PT Royal Jet Aviation</b>, provides premium charter aircraft services for all travel needs. While we frequently arrange flights for the Umrah pilgrimage, our services also extend to business travel, family trips, and any destination you may require. We focus on delivering safe, reliable, and comfortable private flights tailored to individuals, families, and groups who prioritize convenience and privacy. Additional services including visa assistance and hotel bookings are coming soon.
            </p>
        </div>
        <Image src={Illustration} alt="image" className="rounded-2xl" />
    </Responsive>
}

export default AboutRoyalines
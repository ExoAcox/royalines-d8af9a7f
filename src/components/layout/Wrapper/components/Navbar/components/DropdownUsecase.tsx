import { Link } from "@components/navigation"
import { tw } from "@functions/style"
import useOverlay from "@hooks/useOverlay"
import { sendGTMEvent } from "@next/third-parties/google"
import { IoIosArrowDown } from "react-icons/io"
import { When } from "react-if"

interface Props {
    dict: Dictionary;
}

const contents = [{
    label: "Logistik",
    industries: [{
        name: "Perusahaan Logistik",
        href: "/usecase/logistik/perusahaan_logistik"
    },
    {
        name: "Gudang",
        href: "/usecase/logistik/gudang"
    },
    {
        name: "Jasa Kurir",
        href: "/usecase/logistik/jasa_kurir"
    }]
}]

const Dropdown: React.FC<Props> = ({ dict }) => {
    const [isOpen, setOpen] = useOverlay("#navbar_dropdown_usecase")


    return <div
        id={"navbar_dropdown_usecase"}
        className={tw(
            "h-[4.25rem] flex items-center border-t-4 border-b-4 border-transparent relative",
        )}
    >
        <button className="whitespace-nowrap flex items-center gap-3" onClick={() => setOpen(!isOpen)}>
            {dict.usecase} <IoIosArrowDown />
        </button>
        <When condition={isOpen}>
            <div className="p-4 text-bl font-normal text-primary-700 absolute bottom-0 translate-y-full left-0 bg-tertiary-25 flex justify-stretch gap-3">
                <div className="w-[2px] bg-primary-100" />
                <div className="flex flex-col gap-3">
                    {contents.map(content => {
                        return <div key={content.label} className="flex flex-col gap-1">
                            <span className="w-fit text-cl text-primary-800 border border-primary-300 bg-primary-50 rounded-xl px-2">{content.label}</span>
                            <div className="flex flex-col gap-1">
                                {content.industries.map(industry => {
                                    return <Link onClick={() => {
                                        sendGTMEvent({ event: `navbar_clicked_usecase`, value: { href: industry.href } })
                                    }} className="whitespace-nowrap hover:font-semibold" key={industry.name} href={industry.href}>{industry.name}</Link>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </When>
    </div>
}

export default Dropdown
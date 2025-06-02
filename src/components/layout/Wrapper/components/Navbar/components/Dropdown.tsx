import { Link } from "@components/navigation"
import { tw } from "@functions/style"
import useOverlay from "@hooks/useOverlay"
import { sendGTMEvent } from "@next/third-parties/google"
import { IoIosArrowDown } from "react-icons/io"
import { When } from "react-if"

interface Props {
    id: string;
    label: string
    contents: { name: string, href: string }[]
}

const Dropdown: React.FC<Props> = ({ id, contents, label }) => {
    const [isOpen, setOpen] = useOverlay("#navbar_dropdown_" + label)


    return <div
        id={"navbar_dropdown_" + label}
        className={tw(
            "h-[4.25rem] flex items-center border-t-4 border-b-4 border-transparent relative",
        )}
    >
        <button className="whitespace-nowrap flex items-center gap-3" onClick={() => setOpen(!isOpen)}>
            {label} <IoIosArrowDown />
        </button>
        <When condition={isOpen}>
            <div className="p-4 text-bl font-normal text-primary-700 absolute bottom-0 translate-y-full left-0 bg-tertiary-25 flex justify-stretch gap-3">
                <div className="w-[2px] bg-primary-100" />
                <div className="flex flex-col gap-1">
                    {contents.map(content => {
                        return <Link onClick={() => {
                            sendGTMEvent({ event: `navbar_clicked_${id}`, value: { href: content.href } })
                        }} className="whitespace-nowrap hover:font-semibold" key={content.name} href={content.href}>{content.name}</Link>
                    })}
                </div>
            </div>
        </When>
    </div>
}

export default Dropdown
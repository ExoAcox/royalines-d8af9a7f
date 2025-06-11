
import { tw } from "@functions/style";
import { IoWarning } from "react-icons/io5";

interface Props {
    children: React.ReactNode
    className?: string;
}

const WarningText: React.FC<Props> = ({ children, className }) => {
    return <div className={tw("w-full bl border-l-6 border-warning-70 bg-warning-20 flex items-center gap-3 p-3 h-[4.75rem]", className)}>
        <div className="bg-warning-30 rounded-full w-11 h-11 flex-center shrink-0">
            <IoWarning className="fill-warning-60 w-6 h-6" />
        </div>
        <p className="text-black text-sm">{children}</p>
    </div>
}

export default WarningText
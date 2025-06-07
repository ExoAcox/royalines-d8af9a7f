
import { IoWarning } from "react-icons/io5";

interface Props {
    children: React.ReactNode
}

const WarningText: React.FC<Props> = ({ children }) => {
    return <div className="w-full bl border-warning-70 flex items-center gap-3 p-3 h-[4.75rem]">
        <div className="bg-warning-30 rounded-full w-11 h-11 flex-center">
            <IoWarning />
        </div>
        <p className="text-black text-sm">{children}</p>
    </div>
}

export default WarningText
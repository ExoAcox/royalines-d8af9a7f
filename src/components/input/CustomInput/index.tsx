import { IconType } from "react-icons";

interface Props {
    Icon: IconType;
    label: string;
    children: React.ReactNode;
}

const Input: React.FC<Props> = ({ Icon, children, label }) => {
    return <div className="flex flex-1 gap-3 text-grey-70">
        <Icon className="w-5 h-5 mt-1" />
        <div className="flex flex-col">
            <label className="text-mbs">{label}</label>
            <div className="text-mbm font-bold text-grey-100">{children}</div>
        </div>
    </div>

}

export default Input
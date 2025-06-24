import { Button } from "@components/button"
import { MdClose } from "react-icons/md"



interface Props {
    onClick: () => void;
    loading?: boolean;
    disabled?: boolean;
}

const BottomBar: React.FC<Props> = ({ onClick, loading, disabled }) => {
    return <div className="fixed bottom-0 w-full bg-white border-t gap-8 flex items-center text-black text-sm font-medium h-22 px-24">
        <div className="flex items-center gap-2">
            <div className="bg-[#ADE2FE] rounded-sm w-8 h-8" /> Available
        </div>
        {/* <div className="flex items-center gap-2">
            <div className="bg-[#ADE2FE] rounded-sm w-8 h-8 flex-center">
                <div className="w-5.5 h-5.5 bg-[#0771A7] rounded-full flex-center text-white text-2xs font-semibold">1</div>
            </div>
            Active Selected
        </div> */}
        <div className="flex items-center gap-2">
            <div className="bg-[#12B76A] flex-center rounded-sm w-8 h-8 text-white text-2xs font-semibold">1</div>
            Selected
        </div>
        <div className="flex items-center gap-2">
            <div className="bg-grey-50 rounded-sm w-8 h-8 flex-center"><MdClose className="w-5 h-5" /></div>
            Booked
        </div>
        <Button className="ml-auto h-12 px-5" onClick={onClick} loading={loading} disabled={disabled}>Book Seats</Button>
    </div>
}

export default BottomBar    
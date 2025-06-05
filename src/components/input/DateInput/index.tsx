import { MdEditCalendar } from "react-icons/md"
import CustomInput from "../CustomInput"
import Dropdown from "@components/dropdown/Dropdown"
import dayjs from "dayjs";
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData);
dayjs().localeData();

interface Props {

}

const DateInput: React.FC<Props> = ({ }) => {
    return <CustomInput Icon={MdEditCalendar} label="Departure date">
        <div className="w-fit gap-2 flex mt-2 font-medium">
            <Dropdown id="dropdown-departure-date" labelClassName="text-center block" value={1} options={[
                { label: 1, value: 1 },
                { label: 6, value: 6 },
                { label: 9, value: 9 },
                { label: 24, value: 24 },
                { label: 25, value: 25 },
                { label: 28, value: 28 }
            ]} onChange={() => null} />
            <Dropdown id="dropdown-departure-month" labelClassName="text-center block" value={"December"} options={dayjs.months().map(month => ({ label: month, value: month }))} onChange={() => null} />
            <Dropdown id="dropdown-departure-year" labelClassName="text-center block" value={2025} options={Array.from({ length: 10 }, (_, index) => ({ label: dayjs().year() + index, value: dayjs().year() + index }))} onChange={() => null} />
        </div>
    </CustomInput>
}

export default DateInput
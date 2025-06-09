import { MdEditCalendar } from "react-icons/md"
import CustomInput from "../CustomInput"
import Dropdown from "@components/dropdown/Dropdown"
import dayjs from "dayjs";
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localeData);
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs().localeData();
dayjs.extend(customParseFormat);

interface Props {
    date: number;
    month: number;
    year: number;
    onChange: (data: object) => void
}

const DateInput: React.FC<Props> = ({ date, month, year, onChange }) => {


    return <CustomInput Icon={MdEditCalendar} label="Departure date">
        <div className="w-fit gap-2 flex mt-2 font-medium">
            <Dropdown id="dropdown-departure-date" labelClassName="text-center block" value={date} options={[
                { label: 1, value: 1 },
                { label: 6, value: 6 },
                { label: 9, value: 9 },
                { label: 24, value: 24 },
                { label: 25, value: 25 },
                { label: 28, value: 28 }
            ]} onChange={(date) => onChange({ date })} />
            <Dropdown id="dropdown-departure-month" labelClassName="text-center block" value={dayjs().month(month - 1).format("MMMM")} options={dayjs.months().map(month => ({ label: month, value: month }))} onChange={(month) => onChange({ month: dayjs(month, 'MMMM').month() + 1 })} />
            <Dropdown id="dropdown-departure-year" labelClassName="text-center block" value={year} options={Array.from({ length: 10 }, (_, index) => ({ label: dayjs().year() + index, value: dayjs().year() + index }))} onChange={(year) => onChange({ year })} />
        </div>
    </CustomInput>
}

export default DateInput
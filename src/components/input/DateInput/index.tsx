import { MdEditCalendar } from "react-icons/md"
import CustomInput from "../CustomInput"
import Dropdown from "@components/dropdown/Dropdown"
import dayjs from "dayjs";
import localeData from 'dayjs/plugin/localeData'
import { useGetDates } from "@features/choose_flight/stores/apiStore";
import { Else, If, Then } from "react-if";
import { Spinner } from "@components/loader";
import { useEffect } from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(localeData);
dayjs().localeData();
dayjs.extend(customParseFormat);

interface Props {
    date: number;
    month: number;
    year: number;
    onChange: (data: object) => void
}

const DateInput: React.FC<Props> = ({ date, month, year, onChange }) => {

    const dates = useGetDates({ year })

    useEffect(() => {
        if (dates.data && dates.data.length) {
            onChange({ month: dates.data[0].month, date: dates.data[0].available_dates[0] })
        }
    }, [dates.data])

    useEffect(() => {
        if (dates.data && dates.data.length) {
            onChange({ date: dates.data?.[dates.data?.findIndex(dateData => dateData.month === month)].available_dates[0] })
        }
    }, [month])


    return <CustomInput Icon={MdEditCalendar} label="Departure date">
        <div className="w-fit gap-2 flex mt-2 font-medium">
            <If condition={dates.isPending}>
                <Then>
                    <Spinner />
                </Then>
                <Else>
                    <Dropdown lite id="dropdown-departure-date" labelClassName="text-center block" value={date}
                        options={dates.data?.[dates.data?.findIndex(dateData => dateData.month === month)]?.available_dates.map(value => ({ label: value, value })) ?? [{ label: "-", value: 0 }]}
                        onChange={(date) => onChange({ date })} />
                    <Dropdown lite id="dropdown-departure-month" labelClassName="text-center block" value={month}
                        options={dates.data?.map(dateData => ({ label: dayjs().month(dateData.month - 1).format("MMMM"), value: dateData.month })) ?? [{ label: "-", value: 0 }]}
                        onChange={(month) => onChange({ month })} />
                    <Dropdown lite id="dropdown-departure-year" labelClassName="text-center block" value={year}
                        options={Array.from({ length: 5 }, (_, index) => ({ label: dayjs().year() + index, value: dayjs().year() + index }))}
                        onChange={(year) => onChange({ year })} />
                </Else>
            </If>
        </div>
    </CustomInput>
}

export default DateInput
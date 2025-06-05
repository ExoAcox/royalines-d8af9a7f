import { Button } from "@components/button"


import { ClassInput, FlightInput, PassengerInput, DateInput } from "@components/input";
import { Link } from "@components/navigation";




interface Props {
    title?: string
}

const SearchFlightMenu: React.FC<Props> = ({ title = "Search Flight" }) => {

    return <div className="rounded-2xl p-4 bg-white">
        <h5 className="mb-6">{title}</h5>
        <FlightInput />
        <div className="py-5 my-3 border-b border-t border-base-border">
            <DateInput />
        </div>
        <div className="flex">
            <PassengerInput />
            <ClassInput />
        </div>
        <Link href="/choose_flight">
            <Button className="w-full h-12 mt-5">Search</Button>
        </Link>
    </div>
}

export default SearchFlightMenu
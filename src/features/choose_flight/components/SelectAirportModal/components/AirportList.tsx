
import { Airport } from "@api/airports";

interface Props {
    children: string;
    airports: Airport[]
    onSelect: () => void;
}

const AirportList: React.FC<Props> = ({ children, airports, onSelect }) => {
    return <div className="pb-4">
        <h5 className="mt-2">
            {children}
        </h5>
        <div className="flex flex-col">
            {airports.map(airport => {
                return <button key={airport.airport_id} onClick={onSelect} className="hover:bg-primary-bg pl-8 text-left flex flex-col py-4 border-b">
                    <label className="font-medium">{airport.airport_name}</label>
                    <span className="text-sm text-grey-80">{airport.city}</span>
                </button>
            })}
        </div>
    </div>
}

export default AirportList
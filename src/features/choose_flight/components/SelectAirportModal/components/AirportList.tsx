


interface Props {
    children: string;
    airports: { name: string; location: string }[]
    onSelect: () => void;
}

const AirportList: React.FC<Props> = ({ children, airports, onSelect }) => {
    return <div>
        <h5 className="mb-2 mt-8">
            {children}
        </h5>
        <div className="flex flex-col">
            {airports.map(airport => {
                return <button onClick={onSelect} className="hover:font-bold text-left flex flex-col py-2 border-b border-grey-40 last:border-none last:pb-0">
                    <label className="text-mbm">{airport.name}</label>
                    <span className="text-cs text-grey-80">{airport.location}</span>
                </button>
            })}
        </div>
    </div>
}

export default AirportList
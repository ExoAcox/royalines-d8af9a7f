import { TextField } from "@components/input"
import { Modal } from "@components/layout"
import useModal from "@hooks/useModal";
import { MdClose } from "react-icons/md"

import AirportList from "./components/AirportList";
import { arabAirports, indoAirports, useChooseFlightStore } from "@features/choose_flight/stores/dataStore";
import { useMemo, useState } from "react";
import { useGetAirports } from "@features/choose_flight/stores/apiStore";


interface Props {
    onSelect: (data: { airport: object, type?: string }) => void;
}

const SelectAirportModal: React.FC<Props> = ({ onSelect }) => {
    const [search, setSearch] = useState("")
    const { modal, setModal, data } = useModal<{ type: string }>("select-airport-modal")
    const arabAirport = useChooseFlightStore(data => data.arabAirport)

    const airports_ = useGetAirports({ search }, modal)

    const airports = useMemo(() => {
        if (data?.type) {
            if (data.type === arabAirport) {
                return arabAirports
            } else {
                return indoAirports
            }
        } else {
            return []
        }
    }, [arabAirport, data])

    const close = () => setModal(false)

    return <Modal visible={modal} className="!p-0">
        <div className="flex items-center justify-between border-b border-grey-40 px-4 py-3"><label className="font-bold text-lg">Select City or Airports</label><MdClose className="cursor-pointer" onClick={close} /></div>
        <div className="p-4 pt-3">
            <TextField className="w-[50.75rem]" placeholder="City, Airport..." value={search} onChange={(value) => setSearch(value)} />
            <AirportList airports={airports} onSelect={() => setModal(false)}>Popular places</AirportList>
        </div>

    </Modal>
}

export default SelectAirportModal
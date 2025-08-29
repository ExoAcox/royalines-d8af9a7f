import { TextField } from "@components/input"
import { Modal, Error, NotFound } from "@components/layout"
import useModal from "@hooks/useModal";
import { MdClose } from "react-icons/md"

import AirportList from "./components/AirportList";
import { arabAirports, indoAirports, useChooseFlightStore } from "@features/choose_flight/stores/dataStore";
import { useMemo, useState } from "react";
import { useGetAirports } from "@features/choose_flight/stores/apiStore";
import { Case, Switch } from "react-if";
import { Spinner } from "@components/loader";


interface Props {
    onSelect: (data: { airport: object, type?: string }) => void;
}

const SelectAirportModal: React.FC<Props> = ({ }) => {
    const [search, setSearch] = useState("")
    const { modal, setModal, data } = useModal<{ type: string }>("select-airport-modal")
    const arabAirport = useChooseFlightStore(data => data.arabAirport)

    const airports = useGetAirports({ search, "country[ilike]": data?.type === arabAirport ? "arab" : "indo" }, modal && (search !== ""))

    const airports_ = useMemo(() => {
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


    return <Modal visible={modal} className="!p-0" onClose={() => setSearch("")}>
        <div className="flex items-center justify-between border-b border-grey-40 px-4 py-3"><label className="font-bold text-lg">Select City or Airports</label><MdClose className="cursor-pointer" onClick={close} /></div>
        <div className="p-4 pt-3">
            <TextField className="w-[50.75rem]" parentClassName="mb-6" placeholder="City, Airport..." value={search} onChange={(value) => setSearch(value)} />
            <Switch>
                <Case condition={airports.isFetching}>
                    <Spinner size={76} className="h-48 mb-8" />
                </Case>
                <Case condition={airports.isError}>
                    <Error error={airports.error?.message} className="h-48 mb-8" />

                </Case>
                <Case condition={airports.isSuccess && !airports.data?.length}>
                    <NotFound className="h-48 mb-8" />
                </Case>
                <Case condition={airports.isSuccess && airports.data?.length}>
                    <AirportList airports={airports.data!} onSelect={() => setModal(false)}>Search Result</AirportList>
                </Case>
            </Switch>


            <AirportList airports={airports_} onSelect={() => setModal(false)}>Popular places</AirportList>


        </div>

    </Modal>
}

export default SelectAirportModal
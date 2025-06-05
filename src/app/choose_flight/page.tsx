

import { getDevice } from "@functions/server";

import ChooseFlightClient from "./client";


const ChooseFlight: React.FC<Server> = async () => {
    const device = await getDevice();

    return <ChooseFlightClient device={device} />;
};

export default ChooseFlight;

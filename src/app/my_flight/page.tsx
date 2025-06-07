

import { getDevice } from "@functions/server";

import MyFlightClient from "./client";


const MyFlight: React.FC<Server> = async () => {
    const device = await getDevice();

    return <MyFlightClient device={device} />;
};

export default MyFlight;

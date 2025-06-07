

import { getDevice } from "@functions/server";

import PassengersDataClient from "./client";


const PassengersData: React.FC<Server> = async () => {
    const device = await getDevice();

    return <PassengersDataClient device={device} />;
};

export default PassengersData;

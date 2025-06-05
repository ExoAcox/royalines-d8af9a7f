

import { getDevice } from "@functions/server";

import ChooseSeatClient from "./client";


const ChooseSeat: React.FC<Server> = async () => {
    const device = await getDevice();

    return <ChooseSeatClient device={device} />;
};

export default ChooseSeat;



import { getDevice } from "@functions/server";

import HomeClient from "./client";


const Home: React.FC<Server> = async () => {
    const device = await getDevice();

    return <HomeClient device={device} />;
};

export default Home;

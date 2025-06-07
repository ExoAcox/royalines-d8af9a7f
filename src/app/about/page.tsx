

import { getDevice } from "@functions/server";

import AboutClient from "./client";


const About: React.FC<Server> = async () => {
    const device = await getDevice();

    return <AboutClient device={device} />;
};

export default About;

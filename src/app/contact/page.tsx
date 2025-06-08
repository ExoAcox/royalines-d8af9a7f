

import { getDevice } from "@functions/server";

import ContactClient from "./client";


const Contact: React.FC<Server> = async () => {
    const device = await getDevice();

    return <ContactClient device={device} />;
};

export default Contact;



import { getDevice } from "@functions/server";

import PaymentClient from "./client";


const Payment: React.FC<Server> = async () => {
    const device = await getDevice();

    return <PaymentClient device={device} />;
};

export default Payment;



import { getDevice } from "@functions/server";

import PaymentProcessClient from "./client";


const PaymentProcess: React.FC<Server> = async () => {
    const device = await getDevice();

    return <PaymentProcessClient device={device} />;
};

export default PaymentProcess;

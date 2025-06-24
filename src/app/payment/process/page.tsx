

import { auth } from "@libs/auth";

import PaymentProcessClient from "./client";


const PaymentProcess: React.FC<Server> = async () => {
    const session = await auth()

    return <PaymentProcessClient user={session?.user} />;
};

export default PaymentProcess;

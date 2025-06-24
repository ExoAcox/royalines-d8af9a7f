

import { auth } from "@libs/auth";

import PaymentClient from "./client";


const Payment: React.FC<Server> = async () => {
    const session = await auth()

    return <PaymentClient user={session?.user} />;
};

export default Payment;

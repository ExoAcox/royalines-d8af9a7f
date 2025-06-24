

import { auth } from "@libs/auth";

import TransactionHistoryClient from "./client";


const TransactionHistory: React.FC<Server> = async () => {
    const session = await auth()

    return <TransactionHistoryClient user={session?.user} />;
};

export default TransactionHistory;



import { getDevice } from "@functions/server";

import TransactionHistoryClient from "./client";


const TransactionHistory: React.FC<Server> = async () => {
    const device = await getDevice();

    return <TransactionHistoryClient device={device} />;
};

export default TransactionHistory;

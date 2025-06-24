

import { auth } from "@libs/auth";

import PassengersDataClient from "./client";


const PassengersData: React.FC<Server> = async () => {
    const session = await auth()

    return <PassengersDataClient user={session?.user} />;
};

export default PassengersData;

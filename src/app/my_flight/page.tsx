

import { auth } from "@libs/auth";

import MyFlightClient from "./client";


const MyFlight: React.FC<Server> = async () => {
    const session = await auth()

    return <MyFlightClient user={session?.user} />;
};

export default MyFlight;

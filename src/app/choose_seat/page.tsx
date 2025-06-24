

import { auth } from "@libs/auth";

import ChooseSeatClient from "./client";


const ChooseSeat: React.FC<Server> = async () => {
    const session = await auth()

    return <ChooseSeatClient user={session?.user} />;
};

export default ChooseSeat;

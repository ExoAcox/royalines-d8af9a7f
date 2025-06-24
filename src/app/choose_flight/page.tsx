



import ChooseFlightClient from "./client";
import { auth } from "@libs/auth";


const ChooseFlight: React.FC<Server> = async () => {
    const session = await auth()

    return <ChooseFlightClient user={session?.user} />;
};

export default ChooseFlight;

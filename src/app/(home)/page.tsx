

import { auth } from "@libs/auth";
import HomeClient from "./client";


const Home: React.FC<Server> = async () => {
    const session = await auth()

    return <HomeClient user={session?.user} />;
};

export default Home;

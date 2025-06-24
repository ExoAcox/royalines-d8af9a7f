

import { auth } from "@libs/auth";

import AboutClient from "./client";


const About: React.FC<Server> = async () => {
    const session = await auth()

    return <AboutClient user={session?.user} />;
};

export default About;

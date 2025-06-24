

import { auth } from "@libs/auth";

import ContactClient from "./client";


const Contact: React.FC<Server> = async () => {
    const session = await auth()

    return <ContactClient user={session?.user} />;
};

export default Contact;

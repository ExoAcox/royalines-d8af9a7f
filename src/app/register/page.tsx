

import RegisterClient from "./client";
import { auth } from "@libs/auth";
import { redirect } from "next/navigation";


const Register: React.FC<Server> = async () => {
    const session = await auth()

    if (session?.user) redirect("/")

    return <RegisterClient />;
};

export default Register;

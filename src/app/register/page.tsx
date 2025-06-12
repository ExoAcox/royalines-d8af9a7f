

import { getDevice } from "@functions/server";

import RegisterClient from "./client";
import { auth } from "@libs/auth";
import { redirect } from "next/navigation";


const Register: React.FC<Server> = async () => {
    const device = await getDevice();
    const session = await auth()

    if (session?.user) redirect("/")

    return <RegisterClient device={device} />;
};

export default Register;



import { getDevice } from "@functions/server";

import LoginClient from "./client";
import { auth } from "@libs/auth";
import { redirect } from "next/navigation";


const Login: React.FC<Server> = async () => {
    const device = await getDevice();
    const session = await auth()

    if (session?.user) redirect("/")

    return <LoginClient device={device} />;
};

export default Login;

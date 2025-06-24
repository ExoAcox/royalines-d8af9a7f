



import LoginClient from "./client";
import { auth } from "@libs/auth";
import { redirect } from "next/navigation";


const Login: React.FC<Server> = async () => {
    const session = await auth()

    if (session?.user) redirect("/")

    return <LoginClient />;
};

export default Login;

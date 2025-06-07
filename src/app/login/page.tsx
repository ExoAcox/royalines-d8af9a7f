

import { getDevice } from "@functions/server";

import LoginClient from "./client";


const Login: React.FC<Server> = async () => {
    const device = await getDevice();

    return <LoginClient device={device} />;
};

export default Login;

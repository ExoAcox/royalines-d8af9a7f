

import { getDevice } from "@functions/server";

import RegisterClient from "./client";


const Register: React.FC<Server> = async () => {
    const device = await getDevice();

    return <RegisterClient device={device} />;
};

export default Register;

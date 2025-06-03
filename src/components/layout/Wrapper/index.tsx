import Head from "next/head";
import { Else, If, Then, When } from "react-if";

import { tw } from "@functions/style";

import Navbar from "./components/Navbar";

interface Props {
    children: React.ReactNode;
    device?: Device;
    title?: string;
    className?: string;
    navbarClassName?: string;
    centered?: boolean;
    transparent?: boolean;
}

const Wrapper: React.FC<Props> = ({ transparent = true, children, title, className, navbarClassName, centered }) => {

    return (
        <div className={tw("flex flex-col")}>
            <Head>
                <title>{title ? `${title} | GEARS` : "GEARS"}</title>
            </Head>
            <Navbar transparent={transparent} className={navbarClassName} />

            <main
                className={tw(
                    "relative flex-1 bg-background min-w-[360px] overflow-hidden pt-[6rem]",
                    centered && "flex items-center justify-center",
                    className
                )}
            >
                {children}
            </main>
        </div>
    );
};

export default Wrapper;

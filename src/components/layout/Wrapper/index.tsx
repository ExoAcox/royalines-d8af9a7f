import Head from "next/head";

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

const Wrapper: React.FC<Props> = ({ transparent = true, children, className, navbarClassName, centered }) => {

    return (
        <div className={tw("h-dvh w-full flex flex-col")}>
            <Navbar transparent={transparent} className={navbarClassName} />

            <main
                className={tw(
                    "relative flex-1 min-w-[1080px] overflow-auto pt-[6rem]",
                    centered && "flex items-center justify-center",
                    className
                )}
            >{children}
            </main>
        </div>
    );
};

export default Wrapper;

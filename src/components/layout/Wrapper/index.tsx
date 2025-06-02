import Head from "next/head";
import { Else, If, Then, When } from "react-if";

import { tw } from "@functions/style";

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarResponsive";
import Sidebar from "./components/Sidebar";
import SidebarUsecase from "./components/SidebarUsecase";
import { useSidebar } from "@hooks/useSidebar";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode;
    device?: Device;
    title?: string;
    className?: string;
    navbarClassName?: string;
    centered?: boolean;
    transparent?: boolean;
    locale: Locale;
    dict: Dictionary;
}

const Wrapper: React.FC<Props> = ({ transparent = true, device, children, title, className, navbarClassName, centered, locale = "id", dict }) => {
    const sidebar = useSidebar()

    return (
        <div className={tw("flex flex-col")}>
            <Head>
                <title>{title ? `${title} | GEARS` : "GEARS"}</title>
            </Head>
            <If condition={device !== "desktop"}>
                <Then>
                    <NavbarMobile transparent={transparent} className={navbarClassName} locale={locale} dict={dict} />
                </Then>
                <Else>
                    <Navbar transparent={transparent} className={navbarClassName} locale={locale} dict={dict} />
                </Else>
            </If>

            <main
                className={tw(
                    "relative flex-1 bg-background min-w-[360px] overflow-hidden",
                    centered && "flex items-center justify-center",
                    className
                )}
            >
                {children}

                <When condition={sidebar.contactUs || sidebar.usecase}>
                    <div className="fixed z-[3] inset-0 bg-black/30" />
                </When>

                <Sidebar dict={dict} />
                <SidebarUsecase dict={dict} />
            </main>
        </div>
    );
};

export default Wrapper;

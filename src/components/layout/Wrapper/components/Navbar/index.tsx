
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { tw } from "@functions/style";

import GearsLogo from "@images/bitmap/gears_logo.png";

import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { Image, Responsive } from "@components/layout";
import { Link } from "@components/navigation";

import { Button } from "@components/button";
import { useSidebar } from "@hooks/useSidebar";

import Dropdown from "./components/Dropdown";

import { sendGTMEvent } from '@next/third-parties/google'


import { getSegments } from "@constants/segments";
import { getIndustries } from "@constants/industries";
import { IoIosArrowDown } from "react-icons/io";
import DropdownUsecase from "./components/DropdownUsecase";

export interface NavbarProps {
    transparent?: boolean;
    className?: string;
    locale: Locale;
    dict: Dictionary;
}

const Navbar: React.FC<NavbarProps> = ({ transparent, className, locale, dict }) => {
    const [isOnTop, setOnTop] = useState(true);
    const [isTransparent, setTransparent] = useState(transparent);
    const [isDropdownActive, setDropdownActive] = useState(false);
    const segments = getSegments(locale)
    const industries = getIndustries(locale)

    const sidebar = useSidebar()
    const pathName = usePathname();

    useEffect(() => {
        const trigger = () => {
            setOnTop(window.scrollY < 300);
        };

        if (transparent) {
            trigger();
            window.addEventListener("scroll", trigger);
            return () => {
                window.removeEventListener("scroll", trigger);
            };
        }
    }, []);

    useEffect(() => {
        if (!isDropdownActive) setTransparent(isOnTop);
    }, [isOnTop]);

    useEffect(() => {
        if (isOnTop) setTransparent(!isDropdownActive);
    }, [isDropdownActive]);


    const switchLanguage = () => {
        const newLocale = locale === "en" ? "id" : "en";
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = newLocale;

        return segments.join("/");
    };


    return (
        <nav
            className={tw(
                "fixed top-0 left-0 right-0 z-[3] overflow-visible transition duration bg-white",
                className,
                isTransparent ? "" : "shadow"
            )}
            onClick={() => {
                if (isDropdownActive) setDropdownActive(false);
            }}
        >
            <Responsive
                className={tw("flex items-center w-full gap-6 mx-auto font-semibold sm:gap-4 bg-transparent px-8 max-w-none")}
                parentClassName="h-[4.25rem] flex item-center relative z-[2] bg-transparent"
            >
                <div className="flex items-center w-full gap-24 mx-auto font-semibold sm:gap-4">
                    <Link href="/" className="sm:hidden">
                        <Image src={GearsLogo} alt="Gears Logo" width={120} height={32} />
                    </Link>
                    <div className="flex gap-[3rem] mx-auto items-center flex-1 sm:gap-2 md:gap-[2rem] xl:gap-[4rem] xl:mr-[4rem] sm:justify-around lg:justify-end sm:text-sm">

                        <Dropdown id="segment" label={dict.segmentation} contents={segments} />
                        <Dropdown id="industry" label={dict.industry} contents={industries} />
                        <DropdownUsecase dict={dict} />
                        <Link onClick={() => sendGTMEvent({ event: "navbar_clicked_aboutus" })} href="/about_us" className="whitespace-nowrap">{dict.about_us}</Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href={switchLanguage()}>
                            <Button color="secondary" className="whitespace-nowrap flex items-center gap-1">{locale === "id" ? "Indonesia" : "English"} <IoIosArrowDown /></Button>
                        </Link>
                        <Button className="whitespace-nowrap flex items-center gap-1" onClick={() => {
                            sendGTMEvent({ event: "navbar_clicked_contactus" })
                            sidebar.set({ contactUs: true })
                        }}>{dict.try_gears} <HiOutlineArrowUpRight /></Button>

                    </div>
                </div>
            </Responsive>
        </nav>
    );
};

export default Navbar;

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { When } from "react-if";

import { tw } from "@functions/style";


import GearsLogo from "@images/bitmap/gears_logo.png";



import { Image } from "@components/layout";
import { Link } from "@components/navigation";

import { NavbarProps } from "../Navbar";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Button } from "@components/button";
import { useSidebar } from "@hooks/useSidebar";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { getSegments } from "@constants/segments";
import { getIndustries } from "@constants/industries";
import { sendGTMEvent } from "@next/third-parties/google";

const NavbarMobile: React.FC<NavbarProps> = ({ transparent, className, dict, locale }) => {
    const [isOnTop, setOnTop] = useState(true);
    const [isTransparent, setTransparent] = useState(transparent);
    const [isDropdownActive, setDropdownActive] = useState(false);

    const sidebar = useSidebar()
    const pathName = usePathname();

    const segments = getSegments(locale)
    const industries = getIndustries(locale)

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

    useEffect(() => {
        if (isDropdownActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [isDropdownActive])

    useEffect(() => {
        return () => {
            document.body.style.overflow = "scroll"
        }
    }, [isDropdownActive])

    const switchLanguage = () => {
        const newLocale = locale === "en" ? "id" : "en";
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = newLocale;

        return segments.join("/");
    };

    const close = () => {
        setDropdownActive(false)
    }

    return (
        <>
            <nav
                className={tw(
                    "fixed top-0 left-0 right-0 z-[3] max-h-dvh overflow-visible transition duration bg-white text-tertiary-800",
                    className,
                    isTransparent ? "" : "shadow"
                )}
            >
                <div className="h-[4.25rem] flex items-center px-4 gap-4">
                    <Link href="/">
                        <Image src={GearsLogo} alt="Gears Logo" width={120} height={32} />
                    </Link>
                    <Button className="ml-auto whitespace-nowrap flex items-center gap-1 sm:invisible" onClick={() => sidebar.set({ contactUs: true })}>{dict.try_gears} <HiOutlineArrowUpRight /></Button>
                    <GiHamburgerMenu onClick={() => setDropdownActive(!isDropdownActive)} className="cursor-pointer" />
                </div>
            </nav>
            <When condition={isDropdownActive}>
                <div className="fixed z-[3] inset-0 bg-black/30" />
                <div className="fixed top-0 left-0 right-0 bg-white p-4 pt-0 overflow-auto z-[5]">
                    <div className="flex items-center justify-between h-[4.25rem] mb-4">
                        <Link href="/">
                            <Image src={GearsLogo} alt="Gears Logo" width={120} height={32} />
                        </Link>
                        <MdClose onClick={close} className="hover:fill-error-500 cursor-pointer" />
                    </div>
                    <div className="flex flex-col gap-4 text-primary-900">
                        <label className="text-cl font-semibold">
                            {dict.for} {dict.segmentation}
                        </label>
                        {segments.map((segment) => {
                            return <Link key={segment.href} onClick={() => {
                                sendGTMEvent({ event: "navbar_clicked_segment", value: { href: segment.href } })
                            }} href={segment.href} className="text-bs ">
                                {segment.name}
                            </Link>
                        })}
                        <div className="w-full h-[1px] bg-tertiary-100" />
                        <label className="text-cl font-semibold">
                            {dict.for} {dict.industry}
                        </label>
                        {industries.map((industry) => {
                            return <Link key={industry.href} onClick={() => {
                                sendGTMEvent({ event: "navbar_clicked_industry", value: { href: industry.href } })
                            }} href={industry.href} className="text-bs">
                                {industry.name}
                            </Link>
                        })}
                        <div className="w-full h-[1px] bg-tertiary-100" />
                        <Link onClick={() => {
                            sendGTMEvent({ event: "navbar_clicked_aboutus" })
                        }} href="/about_us" className="text-cl font-bold">
                            {dict.about_us}
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mt-24 sticky bottom-0">
                        <Link href={switchLanguage()} className="flex-1">
                            <Button color="secondary" className="w-full flex items-center gap-1">{locale === "id" ? "Indonesia" : "English"} <IoIosArrowDown /></Button>
                        </Link>
                        <Button onClick={() => {
                            sendGTMEvent({ event: "navbar_clicked_contactus" })
                            sidebar.set({ contactUs: true })

                        }} className="flex-1 flex items-center gap-1">{dict.try_gears} <HiOutlineArrowUpRight /></Button>
                    </div>
                </div>
            </When>
        </>
    );
};

export default NavbarMobile;

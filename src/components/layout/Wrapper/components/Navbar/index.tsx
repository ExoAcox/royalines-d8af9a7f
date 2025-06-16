
import { useEffect, useState } from "react";

import { tw } from "@functions/style";

import { Responsive } from "@components/layout";
import Image from "next/image"

import Logo from "@images/bitmap/logo-royalines.png"
import { Link } from "@components/navigation";
import { Button } from "@components/button";
import { Else, If, Then } from "react-if";
import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";
import { useRouterEvent } from "@hooks/useRouter";
import { logout } from "@features/login/functions";

export interface NavbarProps {
    user?: User;
    transparent?: boolean;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ user, transparent, className }) => {
    const [isOnTop, setOnTop] = useState(true);
    const [isTransparent, setTransparent] = useState(transparent);
    const [isDropdownActive, setDropdownActive] = useState(false);

    const { routerChange } = useRouterEvent()


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


    const onLogout = async () => {
        routerChange()
        logout()
    }

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
                parentClassName="h-[6rem] flex item-center relative z-[2] bg-transparent"
                className={tw("flex items-center gap-8 text-grey-80 w-full")}

            >
                <Image src={Logo} alt="logo" className="h-10 w-[11.375rem] mr-auto" />
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/my_flight">My Flight</Link>
                <Link href="/transaction_history">Transaction History</Link>
                <If condition={!!user}>
                    <Then>
                        <Button onClick={onLogout}>Logout</Button>
                    </Then>
                    <Else>
                        <Link href="/login">
                            <Button variant="ghost" className="min-h-12 min-w-36">
                                Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="-ml-2 min-h-12 min-w-36">
                                Register
                            </Button>
                        </Link>
                    </Else>
                </If>

            </Responsive>
        </nav>
    );
};

export default Navbar;

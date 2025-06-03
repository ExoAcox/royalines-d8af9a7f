
import { useEffect, useState } from "react";

import { tw } from "@functions/style";

import { Image, Responsive } from "@components/layout";

import Logo from "@images/bitmap/logo.png"
import { Link } from "@components/navigation";
import { Button } from "@components/button";

export interface NavbarProps {
    transparent?: boolean;
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ transparent, className }) => {
    const [isOnTop, setOnTop] = useState(true);
    const [isTransparent, setTransparent] = useState(transparent);
    const [isDropdownActive, setDropdownActive] = useState(false);


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
                className={tw("flex w-full gap-6 sm:gap-4 bg-transparent px-8 max-w-none")}

            >
                <Image src={Logo} alt="logo" height={54} />
                <div className="ml-auto flex items-center gap-8 text-grey-80">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Button variant="ghost" className="min-h-12 min-w-36">
                        Login
                    </Button>
                    <Button className="min-h-12 min-w-36">
                        Register
                    </Button>
                </div>
            </Responsive>
        </nav>
    );
};

export default Navbar;

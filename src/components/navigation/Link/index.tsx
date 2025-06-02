"use client";

import Link_ from "next/link";

import { useRouterEvent } from "@hooks/useRouterEvent";

interface Props {
    children: React.ReactNode;
    href: string;
    className?: string;
    target?: string;
    disable?: boolean;
    onClick?: () => void;
}

const Link: React.FC<Props> = ({ children, href = "#", className, target, disable, onClick }) => {
    const { routerChange } = useRouterEvent();

    if (disable) return <div className={"inline " + className}>{children}</div>;

    return (
        <Link_
            href={href}
            className={className}
            target={target}
            onClick={() => {
                const { pathname, search, hash } = window.location;
                const path = pathname.substring(3) ? pathname.substring(3) : "/"
                if (href !== path + search + hash && !target) routerChange();
                if (onClick) onClick();
            }}
        >
            {children}
        </Link_>
    );
};

export default Link;

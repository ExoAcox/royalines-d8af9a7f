"use client";

import { usePathname, useRouter as useRouter_, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type StartRouterChangeContextValue = {
    routerChange: () => void;
    isChanging: boolean;
};

type RouterEventProviderProps = {
    children: React.ReactNode;
    onStart: () => void;
    onComplete: (pathname: string | null) => void;
};

export const StartRouterChangeContext = createContext<StartRouterChangeContextValue>({} as StartRouterChangeContextValue);

const RouterEventProvider: React.FC<RouterEventProviderProps> = ({ children, onStart, onComplete }) => {
    const [isChanging, setIsChanging] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter_();

    useEffect(() => setIsChanging(false), [pathname, searchParams]);

    useEffect(() => {
        if (isChanging) {
            onStart();
            router.refresh();
        } else onComplete(pathname);
    }, [isChanging]);

    const routerChange = () => {
        setIsChanging(true);
    };

    return (
        <StartRouterChangeContext.Provider
            value={{
                routerChange,
                isChanging,
            }}
        >
            {children}
        </StartRouterChangeContext.Provider>
    );
};

export const useRouterEvent = () => useContext(StartRouterChangeContext);

export default RouterEventProvider;

"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import NProgress from "nprogress";
import { Suspense, useCallback } from "react";

import queryClient from "@libs/react-query";

import RouterEventProvider from "@hooks/useRouter";
import { SessionProvider } from "next-auth/react";

NProgress.configure({ showSpinner: false });

interface ProvidersProps {
    children: React.ReactNode;
}

const Provider: React.FC<ProvidersProps> = ({ children }) => {
    const onStartProgress = useCallback(() => NProgress.start(), []);
    const onCompleteProgress = useCallback(() => NProgress.done(), []);

    /**
     * ! issue Next Link not scroll to top when change page
     * ! workaround scroll to top when change page
     */

    const scrollToTop = () => {
        const { hash } = window.location;

        if (!hash) window.scrollTo(0, 0);
    };

    const onStart = useCallback(() => {
        onStartProgress();
    }, []);

    const onComplete = useCallback(() => {
        onCompleteProgress();
        scrollToTop();
    }, []);

    return (
        <Suspense>
            <SessionProvider>
                <RouterEventProvider onStart={onStart} onComplete={onComplete}>
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </RouterEventProvider>
            </SessionProvider>
        </Suspense>
    );
};

export default Provider;

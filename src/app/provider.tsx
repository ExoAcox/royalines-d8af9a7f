"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import NProgress from "nprogress";
import { Suspense, useCallback, useEffect } from "react";

import queryClient from "@libs/react-query";

import RouterEventProvider from "@hooks/useRouter";
import { SessionProvider, signIn } from "next-auth/react";
import { refreshToken } from "@api/users";
import { getCookie, setCookie } from "cookies-next";
import { logout } from "@features/login/functions";

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

    const getUser = async () => {
        const token = getCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY)

        if (token) {
            try {
                const data = await refreshToken(token as string)
                setCookie(process.env.NEXT_PUBLIC_TOKEN_KEY, data.access_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });
                setCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY, data.refresh_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });

                await signIn("credentials", { ...data, redirect: false })
            } catch (error) {
                console.warn(error)
                logout()
            }

        }
    }

    useEffect(() => {
        getUser()
    }, [])

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

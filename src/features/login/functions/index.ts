
import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";



export const logout = async () => {
    await signOut({ redirect: false });
    deleteCookie(process.env.NEXT_PUBLIC_TOKEN_KEY)
    deleteCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY)
    window.location.href = "/login";
}
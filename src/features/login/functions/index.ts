import { signOut } from "@libs/auth";
import { deleteCookie } from "cookies-next";



export const logout = async () => {
    await signOut({ redirect: false });
    deleteCookie(process.env.NEXT_PUBLIC_TOKEN_KEY)
    window.location.href = "/login";
}
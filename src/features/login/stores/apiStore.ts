import { useMutation } from "@tanstack/react-query";
import { login, LoginPayload } from "@api/users";
import { setCookie } from "cookies-next";


export const useLogin = () => useMutation({
    mutationFn: (args: LoginPayload) => login(args),
    onSuccess: (data) => {
        setCookie(process.env.NEXT_PUBLIC_TOKEN_KEY, data.access_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });
        setCookie(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY, data.refresh_token, { maxAge: 60 * 60 * 365, sameSite: "strict" });
    }
});
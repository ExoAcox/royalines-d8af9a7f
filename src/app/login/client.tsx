"use client"

import { Button } from "@components/button"
import { PasswordField, TextField } from "@components/input"
import { LoginWrapper } from "@features/login/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useRouterEvent } from "@hooks/useRouter"

interface Form { email: string; password: string }

const Login: React.FC<Page> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<Form>({ shouldFocusError: true, mode: "onChange" });

    const onSubmit: SubmitHandler<Form> = async (input, e) => {
        e?.preventDefault()

        // toast.error("Email or password is incorrect")

        try {
            await signIn("credentials", { ...input, redirect: false })
            routerChange()
            router.replace("/")
        } catch (error) {

        }



    }

    return <LoginWrapper title="Login">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField controller={register("email", {
                // required: "Email is required",
                // pattern: {
                //     value: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                //     message: "Please enter a valid email address",
                // },
            })}
                error={errors.email} label="Email" placeholder="Input your email" example="Example: yourname@email.com" required />
            <PasswordField controller={register("password", {
                // required: "Password is required",
            })} error={errors.password} label="Password" placeholder="Input your password" required />
            <Button type="submit" className="w-full mt-2">Login</Button>
        </form>
    </LoginWrapper>

}

export default Login
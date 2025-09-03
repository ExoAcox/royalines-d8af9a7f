"use client"

import { Button } from "@components/button"
import { PasswordField, TextField } from "@components/input"
import { LoginWrapper } from "@features/login/components"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface Form { fullname: string; email: string; password: string, repassword: string; }


const Register: React.FC<Page> = ({ }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit
    } = useForm<Form>({ shouldFocusError: true, mode: "onChange" });

    const onSubmit: SubmitHandler<Form> = (input, e) => {
        e?.preventDefault()
        toast.success("Register success, waiting for approval")

        routerChange()
        router.push("/login")
    }

    return <LoginWrapper title="Register">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField controller={register("fullname", {
                required: "Fullname is required",
            })} error={errors.fullname} label="Fullname" placeholder="Input your fullname" example="Example: Anya Forger" required />
            <TextField controller={register("email", {
                required: "Email is required",
                pattern: {
                    value: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                    message: "Please enter a valid email address",
                },
            })} error={errors.email} label="Email" placeholder="Input your email" example="Example: yourname@email.com" required />
            <PasswordField controller={register("password", {
                required: "Password is required",
            })} error={errors.password} label="Password" placeholder="Input your password" required />
            <PasswordField controller={register("repassword", {
                required: "Re-type password is required",
                validate: (value) => value === getValues("password") || "Password and re-type password is not same"
            })} error={errors.repassword} label="Re-type password" placeholder="Re-input your password" required />
            <Button type="submit" className="w-full mt-2">Register</Button>
        </form>
    </LoginWrapper>

}

export default Register
"use client"

import { Button } from "@components/button"
import { PasswordField, TextField } from "@components/input"
import { LoginWrapper } from "@features/login/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"

interface Form { username: string; password: string }

const Login: React.FC<Page> = ({ }) => {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<Form>({ shouldFocusError: true, mode: "onChange" });

    const onSubmit: SubmitHandler<Form> = (input, e) => {
        e?.preventDefault()
        toast.error("Email or password incorrect")
    }

    return <LoginWrapper title="Login">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <TextField controller={register("username", {
                required: "Email is required",
                pattern: {
                    value: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
                    message: "Please enter a valid email address",
                },
            })}
                error={errors.username} label="Email" placeholder="Input your email" example="Example: yourname@email.com" required />
            <PasswordField controller={register("password", {
                required: "Password is required",
            })} error={errors.password} label="Password" placeholder="Input your password" required />
            <Button type="submit" className="w-full mt-2">Login</Button>
        </form>
    </LoginWrapper>

}

export default Login
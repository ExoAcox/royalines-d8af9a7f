"use client"

import { Button } from "@components/button"
import { PasswordField, TextField } from "@components/input"
import { Link } from "@components/navigation"
import { LoginWrapper } from "@features/login/components"


const Login: React.FC<Page> = ({ }) => {

    return <LoginWrapper title="Login">
        <form className="flex flex-col gap-3">
            <TextField label="Email" placeholder="Input your email" example="yourname@email.com" required />
            <PasswordField label="Password" placeholder="Input your password" required />
            <Link href="/" className="w-full mt-2"><Button className="w-full">Login</Button></Link>
        </form>
    </LoginWrapper>

}

export default Login
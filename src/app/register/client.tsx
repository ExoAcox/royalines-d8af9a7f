"use client"

import { Button } from "@components/button"
import { PasswordField, TextField } from "@components/input"
import { Link } from "@components/navigation"
import { LoginWrapper } from "@features/login/components"


const Register: React.FC<Page> = ({ }) => {

    return <LoginWrapper title="Register">
        <form className="flex flex-col gap-3">
            <TextField label="Fullname" placeholder="Input your fullname" example="Anya Forger" required />
            <TextField label="Email" placeholder="Input your email" example="yourname@email.com" required />
            <PasswordField label="Password" placeholder="Input your password" required />
            <PasswordField label="Re-type password" placeholder="Re-input your password" required />
            <Link href="/login" className="w-full mt-2"><Button className="w-full">Register</Button></Link>
        </form>
    </LoginWrapper>

}

export default Register
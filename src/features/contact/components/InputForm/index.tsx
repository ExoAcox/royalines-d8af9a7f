import { Button } from "@components/button"
import { TextArea, TextField } from "@components/input"




interface Props {

}

const InputForm: React.FC<Props> = ({ }) => {
    return <form className="flex flex-col bg-primary-bg w-[32.375rem] p-4 rounded-2xl relative z-[2] gap-4">
        <TextField placeholder="Input your fullname" label="Fullname" />
        <TextField placeholder="Input your email" label="Email" />
        <TextField placeholder="Input your phone number" label="Phone Number" />
        <TextArea placeholder="Hello, Royalines..." label="Message" />
        <Button className="border-[#1CA19E] bg-[#1CA19E] w-full mt-1">Submit</Button>
    </form>
}

export default InputForm
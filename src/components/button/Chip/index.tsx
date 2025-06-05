import { tw } from "@functions/style"




interface Props {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const Chip: React.FC<Props> = ({ children, className, onClick }) => {
    return <div onClick={() => {
        if (onClick) onClick()
    }} className={tw("flex gap-2 max-w-fit font-semibold items-center border text-xs text-grey-70 rounded-md h-8 px-2 bg-grey-20 border-grey-60", className)}>{children}</div>
}

export default Chip
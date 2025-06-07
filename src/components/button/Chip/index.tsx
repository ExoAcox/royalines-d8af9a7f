import { tw } from "@functions/style"




interface Props {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    color?: string
    onClick?: () => void
}

const Chip: React.FC<Props> = ({ children, className, disabled, color = "grey", onClick }) => {

    const classNameFinal = tw(
        "flex gap-2 max-w-fit font-semibold items-center border text-xs text-grey-60 rounded-md h-8 px-2 bg-grey-10 border-grey-60",
        color === "green" && "text-primary bg-primary-bg border-primary",
        disabled && "text-grey-70 bg-grey-20 border-grey-60 cursor-default",
        className
    )


    return <button onClick={() => {
        if (onClick) onClick()
    }} className={classNameFinal}>{children}</button>
}

export default Chip
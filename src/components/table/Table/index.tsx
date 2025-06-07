

import { tw } from "@functions/style"


interface Props {
    children: React.ReactNode
    className?: string
}

const Table: React.FC<Props> = ({ children, className }) => {
    return <table className={tw("rounded-xs border-spacing-y-2 border-separate w-full", className)}>
        {children}
    </table>
}

export default Table
import { tw } from "@functions/style"


interface Props {
    data: React.ReactNode[]
    className?: string
}

const TableRow: React.FC<Props> = ({ data, className }) => {
    return <tr className={tw("text-black text-sm h-[4.875rem] text-center border rounded-xs bg-white pb-8 ring ring-base-border", className)}>
        {data.map((cell, index) => {
            return <td key={index}>{cell}</td>
        })}
    </tr>
}

export default TableRow
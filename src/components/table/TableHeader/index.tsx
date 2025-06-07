import { tw } from "@functions/style"


interface Props {
    data: React.ReactNode[]
    className?: string
}

const TableHeader: React.FC<Props> = ({ data, className }) => {
    return <thead>
        <tr className={tw("text-grey-80 text-sm font-bold h-12 border pb-4 rounded-xs bg-base-background ring ring-base-border", className)}>
            {data.map((header, index) => {
                return <th key={index} >{header}</th>
            })}
        </tr>
    </thead>
}

export default TableHeader
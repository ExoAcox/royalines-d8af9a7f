import TableRow from "../TableRow"




interface Props {
    data: React.ReactNode[][]
    className?: string
}

const TableBody: React.FC<Props> = ({ data, className }) => {
    return <tbody>
        {data.map((body, index) => <TableRow key={index} data={body} className={className} />)}
    </tbody>
}

export default TableBody
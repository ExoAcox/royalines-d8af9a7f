
import NotFound from "../NotFound";

interface Props {
    title?: string;
    error?: string;
    className?: string;
}

const Error: React.FC<Props> = ({ title = "An error has occured!", error, className }) => {
    return <NotFound title={title} subtitle={error} className={className} />
}

export default Error
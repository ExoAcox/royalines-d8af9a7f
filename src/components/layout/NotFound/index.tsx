import Image from "next/image"
import Illustration from "@images/bitmap/illustration-plane.png"
import { tw } from "@functions/style";

interface Props {
    title?: string;
    subtitle?: string;
    className?: string;
}

const NotFound: React.FC<Props> = ({
    title = "We couldn't find any result!",
    subtitle = "Please check your search for any typos or spelling errors, or try a different search term.",
    className
}) => {
    return <div className={tw("flex-center flex-col gap-1", className)}>
        <Image src={Illustration} alt="Not found" />
        <span className="font-bold text-center mt-2">{title}</span>
        <p className="text-center text-grey-70 text-sm">
            {subtitle}
        </p>
    </div>
}

export default NotFound
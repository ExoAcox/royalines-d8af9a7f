

import { GoArrowLeft } from "react-icons/go"
import { useRouterEvent } from "@hooks/useRouter"
import { useRouter } from "next/navigation"

interface Props {
    onClick?: () => void
}

const BackButton: React.FC<Props> = ({ onClick }) => {
    const { routerChange } = useRouterEvent()
    const router = useRouter()

    const back = () => {
        if (onClick) onClick()
        routerChange();
        router.back()
    }

    return <GoArrowLeft onClick={back} className="fill-grey-90 cursor-pointer w-6 h-6" />
}

export default BackButton
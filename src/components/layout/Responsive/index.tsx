import { CSSProperties } from "react";

import { tw } from "@functions/style";

interface Props {
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
    parentStyle?: CSSProperties;
    id?: string;
}

const Responsive: React.FC<Props> = ({ children, className, parentClassName, parentStyle, id }) => {
    return (
        <div className={tw("relative scroll-mt-[4.25rem]", parentClassName)} style={parentStyle} id={id}>
            <div className={tw("mx-auto 2xl:px-8 sm:px-4 max-w-default", className)}>{children}</div>
        </div>
    );
};

export default Responsive;

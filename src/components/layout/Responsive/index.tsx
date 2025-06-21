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
        <div className={tw("relative scroll-mt-[4.5rem] w-full", parentClassName)} style={parentStyle} id={id}>
            <div className={tw("mx-auto px-8 max-w-999", className)}>{children}</div>
        </div>
    );
};

export default Responsive;

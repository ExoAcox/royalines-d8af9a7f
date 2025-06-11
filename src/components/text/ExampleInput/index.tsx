import { tw } from "@functions/style";

const LabelInput: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    if (!children) return null;
    return <div className={tw("text-xs text-grey-80 mt-1", className)}>{children}</div>;
};

export default LabelInput;

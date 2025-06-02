import { tw } from "@functions/style";

const LabelInput: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    if (!children) return null;
    return <label className={tw("text-cl mt-1 text-grey-80", className)}>{children}</label>;
};

export default LabelInput;

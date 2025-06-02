import { tw } from "@functions/style";

const LabelInput: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    if (!children) return null;
    return <label className={tw("text-bs mb-2 font-bold text-grey-90", className)}>{children}</label>;
};

export default LabelInput;

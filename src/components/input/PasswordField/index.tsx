import { useMemo, useState } from "react";
import { tw } from "@functions/style";

import { LabelInput, ErrorInput, ExampleInput } from "@components/text";
import { When } from "react-if";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
export interface TextField extends BasicInput {
    value?: string | number;
    onChange?: (value: string) => void;
    type?: "text" | "number";
    controller?: object;
    example?: string;
    inputClassName?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    onkeyDown?: (value: string) => void;
    required?: boolean;
}

const TextField: React.FC<TextField> = ({
    value,
    onChange,
    label,
    placeholder,
    example,
    className,
    parentClassName,
    inputClassName,
    controller,
    disabled,
    error,
    required,
    onkeyDown
}) => {
    const [isVisible, setVisible] = useState(false);
    const inputProps = { value, placeholder, disabled };

    const classNameFinal = useMemo(() => {
        return tw(
            `h-12 border border-grey-60 bg-white w-full flex gap-3 justify-between items-center px-3 rounded-lg`,
            disabled && "bg-secondary-20",
            error && "border-error-80",
            className
        );
    }, [disabled, error, className]);

    return (
        <div className={tw(parentClassName)}>
            <LabelInput className="block" required={required}>{label}</LabelInput>
            <div className={classNameFinal}>
                <input
                    type={isVisible ? "text" : "password"}
                    className={tw("flex-1 w-full focus:outline-none text-grey-90 placeholder:text-grey-60", disabled && "bg-grey-40", inputClassName)}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (onkeyDown) onkeyDown(e.key);
                    }}
                    {...controller}
                    {...inputProps}
                />
                <div className="ml-2 cursor-pointer" onClick={() => setVisible(!isVisible)}>
                    {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
            </div>
            <ErrorInput error={error} />
            <ExampleInput>{example}</ExampleInput>
        </div>
    );
};


export default TextField;

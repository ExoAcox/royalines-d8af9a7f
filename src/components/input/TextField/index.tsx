import { useMemo } from "react";
import { tw } from "@functions/style";

import { LabelInput, ErrorInput } from "@components/text";
import { When } from "react-if";
export interface TextField extends BasicInput {
    value?: string;
    onChange?: (value: string) => void;
    type?: "text" | "number";
    controller?: object;
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
    type = "text",
    className,
    parentClassName,
    inputClassName,
    controller,
    disabled,
    prefix,
    suffix,
    error,
    required,
    onkeyDown
}) => {
    const inputProps = { value, placeholder, type, disabled };

    const classNameFinal = useMemo(() => {
        return tw(
            `h-12 border border-grey-60 w-full flex gap-3 justify-between items-center p-3 rounded-xl`,
            disabled && "bg-secondary-20",
            error && "border-error-400",
            className
        );
    }, [disabled, error, className]);

    return (
        <div className={tw(parentClassName)}>
            <LabelInput className="block">{label} <When condition="required"><span className="text-red-80">*</span></When></LabelInput>
            <div className={classNameFinal}>
                {prefix}
                <input
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
                {suffix}
            </div>
            <ErrorInput error={error} />
        </div>
    );
};


export default TextField;

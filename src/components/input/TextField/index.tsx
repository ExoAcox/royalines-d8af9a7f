import { useMemo } from "react";
import { tw } from "@functions/style";

import { LabelInput, ErrorInput, ExampleInput } from "@components/text";
import { Else, If, Then, When } from "react-if";

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
    onFocus?: (target: EventTarget) => void;
    required?: boolean;
}

const TextField: React.FC<TextField> = ({
    value,
    onChange,
    label,
    placeholder,
    type = "text",
    example,
    className,
    parentClassName,
    inputClassName,
    controller,
    disabled,
    prefix,
    suffix,
    error,
    required,
    onkeyDown,
    onFocus
}) => {
    const inputProps = { value, placeholder, type, disabled };

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
                {prefix}
                <input
                    className={tw("flex-1 w-full focus:outline-none text-grey-90 placeholder:text-grey-60", disabled && "bg-grey-40", inputClassName)}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (onkeyDown) onkeyDown(e.key);
                    }}
                    onFocus={(e) => {
                        if (onFocus) onFocus(e.target);
                    }}
                    {...controller}
                    {...inputProps}
                />
                {suffix}
            </div>
            <If condition={error}>
                <Then><ErrorInput error={error} /></Then>
                <Else><ExampleInput>{example}</ExampleInput></Else>
            </If>

        </div>
    );
};


export default TextField;

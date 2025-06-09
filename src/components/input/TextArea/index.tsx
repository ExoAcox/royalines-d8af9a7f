import { useMemo } from "react";
import { tw } from "@functions/style";

import { LabelInput, ErrorInput } from "@components/text";
import { TextField } from "../TextField";

export interface TextAreaProps extends TextField {
    value?: string;
    rows?: number;
    cols?: number;
    controller?: object;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, label, placeholder, rows = 4, cols, className, controller, disabled, error }) => {
    const inputProps = { value, placeholder, rows, cols, disabled };

    const classNameFinal = useMemo(() => {
        return tw(
            `border border-grey-60 bg-white w-full flex gap-3 justify-between items-center px-3 py-2 rounded-lg`,
            disabled && "bg-secondary-20",
            error && "border-error-80",
            className
        );
    }, [disabled, error, className]);

    return (
        <div className="flex flex-col">
            <LabelInput>{label}</LabelInput>
            <div className={classNameFinal}>
                <textarea
                    className={tw("flex-1 focus:outline-none bg-primary-25 placeholder:text-black-60-40 text-cl", disabled && "bg-secondary-20")}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    {...controller}
                    {...inputProps}
                />
            </div>
            <ErrorInput error={error} />
        </div>
    );
};


export default TextArea;

import { useMemo } from "react";
import { Case, Default, Switch, When } from "react-if";

import { tw } from "@functions/style";

import BoxChecked from "@images/vector/box-checked.svg";
import BoxUncheck from "@images/vector/box-uncheck.svg";

import { Spinner } from "@components/loader";
import { ErrorInput, LabelInput } from "@components/text";

interface CheckBox<Value> extends BasicInput {
    value: Value[];
    options: (Option<Value> | Value)[];
    onChange: (value: Value[], data: Option<Value>) => void;
    labelClassName?: string;
    variant?: "normal" | "inline";
}

const CheckBox = <Value,>({
    value,
    onChange,
    options,
    label,
    className,
    labelClassName,
    parentClassName,
    disabled,
    error,
    variant = "normal",
}: CheckBox<Value>) => {
    const handleClick = (data: Option<Value>) => {
        const newValue = [...value];
        const index = newValue.findIndex((value) => value === data.value);

        if (index >= 0) {
            newValue.splice(index, 1);
        } else {
            newValue.push(data.value);
        }

        onChange(newValue, data);
    };

    const classNameFinal = useMemo(() => {
        return tw(
            `w-fit h-fit flex gap-2 justify-start items-center cursor-pointer text-start`,
            disabled && "text-slate-200 cursor-default",
            error && "text-primary-40",
            labelClassName
        );
    }, [disabled, error, className]);

    return (
        <div className={tw("flex flex-col", parentClassName)}>
            <LabelInput>{label}</LabelInput>
            <div className={tw("flex flex-col gap-y-2 gap-x-6", variant === "inline" && "flex-row flex-wrap", className)}>
                {options.map((option, i) => {
                    const data = (
                        typeof option === "object" ? option : { value: option, label: option, disabled: false, loading: false }
                    ) as Option<Value>;

                    return (
                        <button
                            type="button"
                            key={String(data.value) + i}
                            onClick={() => handleClick(data)}
                            className={classNameFinal}
                            disabled={disabled ?? data.disabled ?? data.loading}
                        >
                            <Switch>
                                <Case condition={data.loading}>
                                    <Spinner className="w-fit" size={20} thickness={300} />
                                </Case>
                                <Case condition={value.includes(data.value)}>
                                    <BoxChecked className="shrink-0" />
                                </Case>
                                <Default>
                                    <BoxUncheck className="shrink-0" />
                                </Default>
                            </Switch>
                            <When condition={!!data.label}>
                                <label className={tw(`text-cl w-full text-base-black`, !disabled && "cursor-pointer", data.className)}>{data.label}</label>
                            </When>
                        </button>
                    );
                })}
            </div>
            <ErrorInput error={error} />
        </div>
    );
};

export default CheckBox;

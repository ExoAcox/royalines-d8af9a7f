import { useEffect, useMemo, useState } from "react";
import { Else, If, Then, When } from "react-if";
import useOverlay from "@hooks/useOverlay";
import { tw } from "@functions/style";
import { Spinner } from "@components/loader";
import { ErrorInput, LabelInput } from "@components/text";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface DropdownProps<Value> extends BasicInput {
    id: string;
    value: Value;
    onChange: (value: Value, data: unknown) => void;
    options: Option<Value>[] | Value[];
    icon?: React.ReactNode;
    position?: Position;
    loading?: boolean;
    placeholderClassName?: string;
    parentClassName?: string;
    arrowClassName?: string;
    panelClassName?: string;
    labelClassName?: string;
    autocomplete?: boolean;
}

const Dropdown = <Value,>({
    id,
    value,
    onChange,
    options,
    label,
    error,
    disabled,
    placeholder,
    loading,
    icon,
    className,
    position = "bottom center",
    placeholderClassName,
    parentClassName,
    arrowClassName,
    panelClassName,
    labelClassName,
    autocomplete,
}: DropdownProps<Value>) => {
    const [search, setSearch] = useState("");
    const [isOpen, setOpen] = useOverlay("#" + id);

    useEffect(() => {
        if (!isOpen) {
            setSearch("");
            document.getElementById("panel-dropdown_" + id)!.scrollTop = 0;
        }
    }, [isOpen]);

    const verticalPosition = position.split(" ")[0];
    const horizontalPosition = position.split(" ")[1];

    const classNameLabel = `bg-white w-full flex gap-2 justify-between items-center p-4 cursor-pointer whitespace-nowrap`;

    const classNamePanel = useMemo(() => {
        return tw(
            `z-50 absolute z-10 flex flex-col w-full max-h-[20rem] rounded overflow-auto shadow`,
            horizontalPosition === "center" && `left-1/2 -translate-x-1/2`,
            horizontalPosition === "left" && `left-0`,
            horizontalPosition === "right" && `right-0`,
            verticalPosition === "bottom" && `bottom-0 translate-y-full`,
            verticalPosition === "top" && `top-0 -translate-y-full`,
            panelClassName
        );
    }, [position, panelClassName]);

    const classNameFinal = useMemo(() => {
        return tw(
            classNameLabel,
            "h-9 border border-base-border rounded-md p-2",
            disabled && "border-tertiary-100 bg-tertiary-100 cursor-default",
            error && "border-error-80",
            className
        );
    }, [disabled, error, className]);

    const formattedOptions: Option<Value>[] = useMemo(() => {
        return options
            .map((option) => {
                if (typeof option === "object") {
                    return option as Option<Value>;
                } else {
                    return { label: option, value: option, className: "" } as unknown as Option<Value>;
                }
            })
            .filter((option) => String(option.label).toLowerCase().includes(search.toLowerCase()));
    }, [options, search]);

    const labelMessage = useMemo(() => {
        const label = formattedOptions.find((option) => option.value === value)?.label;
        return label || placeholder;
    }, [label, value, options]);

    const arrowClassNameDefault = useMemo(() => {
        const isVerticalReverse = verticalPosition === "top";

        if ((isOpen && !isVerticalReverse) || (!isOpen && isVerticalReverse)) {
            return "rotate-180 min-w-[.75rem]";
        } else if ((!isOpen && !isVerticalReverse) || (isOpen && isVerticalReverse)) {
            return "translate-y-[1px] min-w-[.75rem]";
        }
    }, [isOpen, verticalPosition]);

    return (
        <div className={tw("flex flex-col text-cl", parentClassName)}>
            <LabelInput>{label}</LabelInput>
            <div id={id} className="relative">
                <div className={classNameFinal} onClick={() => !disabled && setOpen(!isOpen)}>
                    <button
                        type="button"
                        className={tw(
                            !value && "text-grey-60",
                            // "max-w-fit",
                            disabled && "text-secondary-40 cursor-not-allowed",
                            placeholderClassName
                        )}
                    >
                        {labelMessage}
                    </button>
                    <If condition={icon === undefined}>
                        <Then>
                            <MdOutlineKeyboardArrowDown className={tw(arrowClassNameDefault, arrowClassName, disabled && "cursor-default")} />
                        </Then>
                        <Else>{icon}</Else>
                    </If>
                </div>
                <div className={isOpen ? "visible" : "hidden"}>
                    <div className={classNamePanel} id={"panel-dropdown_" + id}>
                        <When condition={loading}>
                            <Spinner className="py-4 bg-white" />
                        </When>
                        <When condition={!loading}>
                            <When condition={autocomplete}>
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search here ..."
                                    className="sticky top-0 px-3 py-2.5 w-full border-b outline-none border-secondary-20 text-base-black"
                                />
                            </When>
                            <div>
                                {formattedOptions.map((option) => {
                                    const data = typeof option === "object" ? option : { value: option, label: option, className: "" };

                                    return (
                                        <button
                                            type="button"
                                            key={String(data.value)}
                                            className={tw(classNameLabel, "hover:bg-primary-bg", labelClassName, data.className)}
                                            onClick={() => {
                                                if (data.value !== value) {
                                                    onChange(data.value, data);
                                                }

                                                setOpen(false);
                                            }}
                                        >
                                            {data.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </When>
                    </div>
                </div>
            </div>
            <ErrorInput error={error} />
        </div>
    );
};

export default Dropdown;

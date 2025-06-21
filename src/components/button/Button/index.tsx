"use client";

import { useMemo } from "react";
import useRipple from "use-ripple-hook";

import { tw } from "@functions/style";

import { Spinner } from "@components/loader";

interface Button {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    color?: "primary" | "secondary" | "red";
    variant?: "filled" | "ghost" | "nude";
    type?: "button" | "submit";
    rippleColor?: string;
    hoverColor?: string;
    className?: string;
    labelClassName?: string;
    loading?: boolean;
    disabled?: boolean;
}

const getColor = (color: string) => {
    switch (color) {
        case "red":
            return "text-error-80 bg-error-80 border-error-80 disabled:text-grey-70 disabled:border-grey-20";
        default:
            return "text-primary bg-primary border-primary disabled:text-grey-70 disabled:border-grey-20";
    }
};

const getVariant = (variant: string, color: string) => {
    switch (variant) {
        case "ghost":
            return `bg-white`;
        case "nude":
            return `bg-transparent border-transparent disabled:border-transparent`;
        default:
            return `text-white disabled:bg-grey-20`;
    }
};

const Button: React.FC<Button> = ({
    children,
    onClick,
    color = "primary",
    variant = "filled",
    type = "button",
    rippleColor,
    hoverColor,
    className,
    labelClassName,
    loading,
    disabled,
}) => {
    const [buttonRef, event] = useRipple({ color: rippleColor || "rgba(0, 0, 0, 0.1)", disabled: variant === "nude" });

    const buttonProps = { onClick, type };

    const classNameFinal = useMemo(
        () =>
            tw(
                `flex group shrink-0 font-semibold items-center justify-center gap-2 whitespace-nowrap relative rounded-lg border w-fit h-fit px-3.5 py-2 overflow-hidden`,
                getColor(color),
                getVariant(variant, color),
                className
            ),
        [className, disabled, color, variant]
    );

    const hoverColorFinal = useMemo(() => {
        if (hoverColor) return hoverColor;

        if (variant === "filled" || color === "secondary") {
            return "bg-black/5";
        } else {
            return "bg-primary/5";
        }
    }, [hoverColor, color, variant]);

    return (
        <button
            data-testid="button-test"
            className={classNameFinal}
            ref={buttonRef}
            onMouseDown={event}
            disabled={loading || disabled}
            {...buttonProps}
        >
            <div className={tw("flex items-center gap-1", labelClassName)}>{loading ? "Loading ..." : children}</div>
            {loading && (
                <Spinner
                    color={variant === "filled" ? "#fff" : color === "primary" ? "var(--color-primary)" : "var(--color-primary)"}
                    className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    size={buttonRef.current?.offsetHeight ? (buttonRef.current?.offsetHeight / 10) * 6 : undefined}
                />
            )}
            <div
                className={tw(
                    "absolute invisible left-0 top-0 w-full h-full group-hover:visible",
                    disabled && "group-hover:invisible",
                    hoverColorFinal
                )}
            />
        </button>
    );
};

export default Button;

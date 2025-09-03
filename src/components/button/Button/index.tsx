"use client";

import { useMemo } from "react";
import useRipple from "use-ripple-hook";

import { tw } from "@functions/style";

import { Spinner } from "@components/loader";
import { When } from "react-if";

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
            return "text-error-80 bg-error-80 border-error-80 disabled:text-grey-60 disabled:border-grey-50";
        default:
            return "text-primary bg-primary border-primary disabled:text-grey-60 disabled:border-grey-50";
    }
};

const getVariant = (variant: string) => {
    switch (variant) {
        case "ghost":
            return `bg-white`;
        case "nude":
            return `bg-transparent border-transparent disabled:border-transparent`;
        default:
            return `text-white disabled:bg-grey-40`;
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


    const classNameFinal = useMemo(
        () =>
            tw(
                `flex group shrink-0 font-semibold items-center justify-center gap-2 whitespace-nowrap relative rounded-lg border w-fit h-fit px-3.5 py-2 overflow-hidden`,
                getColor(color),
                getVariant(variant),
                loading && "!cursor-wait",
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
            disabled={disabled}
            type={type}
            onClick={(e) => {
                if (loading) e.preventDefault()
                if (onClick) onClick(e)
            }}
        >
            <div className={tw("flex items-center gap-1", loading && "text-transparent", labelClassName)}>{children}</div>
            <When condition={loading}>
                <div className="flex-center inset-0 absolute">
                    <Spinner
                        color={variant === "filled" ? "#fff" : color === "primary" ? "var(--color-primary)" : "var(--color-primary)"}
                        size={buttonRef.current?.offsetHeight ? (buttonRef.current?.offsetHeight / 10) * 6 : undefined}
                    />
                </div>
            </When>
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

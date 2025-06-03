import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    extend: {
        theme: {
            color: ["primary", "grey-40", "grey-50", "grey-60", "grey-70", "grey-80", "grey-90", "error-40", "error-50", "error-60", "error-70", "error-80", "error-90"]
        },
    },
});

export const tw = (...classNames: (string | boolean | undefined)[]) => {
    return customTwMerge(clsx(...classNames));
};

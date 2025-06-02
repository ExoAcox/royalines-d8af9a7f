import colors from "@styles/theme/colors.json";
import fontSize from "@styles/theme/fonts.json";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "text-color": [{ text: Object.keys(colors) }],
            "font-size": [{ text: Object.keys(fontSize) }],
            "max-w": [{ "max-w": ["default"] }],
        },
    },
});

export const tw = (...classNames: (string | boolean | undefined)[]) => {
    return customTwMerge(clsx(...classNames));
};

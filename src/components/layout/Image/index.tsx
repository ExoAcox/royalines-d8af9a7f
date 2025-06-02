import Image_, { StaticImageData } from "next/image";

import { tw } from "@functions/style";

interface Props {
    src?: StaticImageData | string;
    alt?: string;
    fill?: boolean;
    className?: string;
    parentClassName?: string;
    quality?: number;
    width?: number;
    height?: number;
    onLoad?: () => void;
}

const Image: React.FC<Props> = ({ src, alt = "", fill, className, parentClassName, quality = 100, width, height, onLoad }) => {
    const imageProps = { fill, quality, width, height, onLoad };

    return (
        <div className={tw("relative flex items-center justify-center overflow-hidden", parentClassName)}>
            {src && <Image_ src={src} alt={alt} className={className} {...imageProps} />}
        </div>
    );
};

export default Image;

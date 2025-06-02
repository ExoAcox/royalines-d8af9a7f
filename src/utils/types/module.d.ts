declare module "*module.css" {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}

declare namespace NodeJS {
    interface ProcessEnv {
        SESSION_KEY: string;
        SESSION_PASSWORD: string;

        NEXT_PUBLIC_API_KEY: string;
        NEXT_PUBLIC_TOKEN_KEY: string;
        NEXT_PUBLIC_REFRESH_TOKEN_KEY: string;
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;

        NEXT_PUBLIC_TELKOM_USERNAME: string;
        NEXT_PUBLIC_TELKOM_PASSWORD: string;
        NEXT_PUBLIC_MYSIIS_USERNAME: string;
        NEXT_PUBLIC_MYSIIS_PASSWORD: string;

        NEXT_PUBLIC_ACCOUNT_URL: string;
        NEXT_PUBLIC_ODP_URL: string;
    }
}

declare module "nprogress";
declare module "ua-parser-js";

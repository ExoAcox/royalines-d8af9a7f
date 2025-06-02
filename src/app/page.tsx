import "@styles/global.scss";
import { Inter } from "next/font/google";
import "nprogress/nprogress.css";

import { ToastContainer } from 'react-toastify';

import { tw } from "@functions/style";

import Provider from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "GEARS",
  description: "Enabler",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  const { lang } = await params

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico?v=1.1" sizes="any" />
      </head>
      <body
        className={tw(
          inter.variable,
          "font-inter antialiased text-primary-900",
          process.env.NODE_ENV === "development" && "debug-screens"
        )}
      >
        <Provider>
          {children}
          <div id="__modal" />
          <ToastContainer hideProgressBar />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

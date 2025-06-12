import "./globals.css";
import { Inter } from "next/font/google";
import "nprogress/nprogress.css";


import { ToastContainer } from 'react-toastify';

import Provider from "./provider";
import { tw } from "@functions/style";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Royalines",
  description: "One Stop Solution for Your Journey",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}

const RootLayout: React.FC<Props> = async ({ children, params }) => {

  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico?v=1.1" sizes="any" />
        <meta name="viewport" content="width=1920" />
      </head>
      <body
        className={tw(process.env.NODE_ENV === "development" && "debug-screens", "antialiased", inter.className)}
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

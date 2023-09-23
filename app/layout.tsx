import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ThemeSwitch from "@/components/buttons/ThemeSwitch";
import SocialsBtn from "@/components/buttons/SocialsBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jimmy's Portfolio | React Developer",
    description: "Jimmy Nguyen is a full stack developer with focus on React Frontend Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
            >
                {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Navigation />
                        {children}

                        <Toaster position="top-right" />
                        <SocialsBtn />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}

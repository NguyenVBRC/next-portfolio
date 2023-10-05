import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

// import Navigation from "@/components/layout/Navigation";
import ThemeSwitch from "@/components/buttons/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Jimmy's Portfolio | React Developer",
    description: "Jimmy Nguyen is a full stack developer with focus on React Frontend Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-teal-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
            >
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        {/* <Navigation /> */}
                        {children}
                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}

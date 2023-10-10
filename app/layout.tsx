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
  description:
    "Jimmy Nguyen is a full stack developer with focus on React Frontend Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseStyling =
    "relative bg-teal-50 text-gray-950 pt-28 bg-gradient-to-br from-sky-500 to-indigo-100";

  const darkModeStyling =
    "dark:bg-gradient-to-br dark:from-indigo-950 dark:to-violet-900 dark:text-opacity-90";

  const mobileStyling = "sm:pt-36";

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} ${baseStyling} ${darkModeStyling} ${mobileStyling}`}
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

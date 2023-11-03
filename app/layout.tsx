import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import ActiveSectionContextProvider from "@/context/active-section-context";

// import Navigation from "@/components/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jimmy's Portfolio | React Developer",
  description: "Jimmy Nguyen is a full stack developer with focus on React Frontend Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseStyling = "pt-28";

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] ${baseStyling}`}>
        <ActiveSectionContextProvider>
          {/* <Navigation /> */}
          {children}
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

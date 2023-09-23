"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import About from "./About";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);

    return (
        <section
            ref={ref}
            id="home"
            className="flex flex-col mb-28 max-w-[70rem] text-center sm:mb-0 sm:flex-row scroll-mt-[100rem]"
        >
            <motion.div
                className="flex flex-col text-center mb-10 mt-4 px-4 font-small !leading-[1.5] sm:text-start sm:mr-20"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="font-bold text-5xl">Jimmy Nguyen</h1>
                <p className="text-2xl my-3">React Frontend Developer</p>
                <p className="text-gray-500">
                    Building web applications with cutting edge technologies.
                </p>
                <p className="text-xs mt-3">
                    <span className="text-gray-500  ">
                        This portfolio was built with React & Next.js (App Router & Server Actions),
                        TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel
                        hosting.{" "}
                    </span>
                </p>
            </motion.div>
            <About />
        </section>
    );
}

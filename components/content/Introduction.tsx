"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import About from "./About";
import SocialsBtn from "../buttons/SocialsBtn";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col mb-28 max-w-[70rem] text-center sm:mb-0 sm:flex-row scroll-mt-[100rem] "
    >
      <motion.div
        className="flex flex-col text-center mb-10 mt-4 px-4 font-small !leading-[1.5] sm:text-start sm:mr-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="rounded-xl object-cover border-[0.35rem] border-white shadow-xl p-7 relative">
          <h1 className="font-bold text-5xl">Jimmy Nguyen</h1>
          <p className="text-2xl my-3">React Frontend Developer</p>
          <p className="text-gray-500">
            Building web applications with cutting edge technologies.
          </p>
          <p className="text-xs my-3">
            <span className="text-gray-500  ">
              This portfolio was built with React & Next.js (App Router & Server
              Actions), TypeScript, Tailwind CSS, Framer Motion, React Email &
              Resend, Vercel hosting.{" "}
            </span>
          </p>
          <Image
            src="/headshot.png"
            alt="Jimmy's Wedding Headshot"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl absolute right-5 top-5"
          />
          <SocialsBtn />
        </div>
      </motion.div>
      <About />
    </section>
  );
}

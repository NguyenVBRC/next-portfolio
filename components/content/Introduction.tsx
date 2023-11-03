"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div className="w-[100%] flex flex-col items-center text-gray-50 justify-center h-[55vh] mb-10 mt-4" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
      <div className=" relative p-6 sm:p-7">
        <h3 className="text-3xl">Welcome.</h3>
        <h1 className="my-5 text-3xl sm:text-5xl">
          My name is <span className="font-bold">Jimmy Nguyen</span>.
        </h1>
        <p className="my-3 text-gray-400 text-lg sm:text-2xl ">
          I am a <span className="font-bold text-gray-50">Full Stack Developer</span> building web applications with cutting edge technologies.
        </p>
        {/* Borders */}
        <div className="absolute top-0 left-0 h-1 w-[30%] border-t-2"></div>
        <div className="absolute top-0 left-0 h-[30%] w-1 border-l-2"></div>
        <div className="absolute bottom-0 right-0 h-[30%] w-1 border-r-2"></div>
        <div className="absolute bottom-0 right-0 h-1 w-[30%] border-b-2"></div>
      </div>
    </motion.div>
  );
}

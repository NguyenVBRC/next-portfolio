"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[55vh] mb-10 mt-4 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="p-7 relative">
        <h3 className="text-3xl">Welcome.</h3>
        <h1 className="text-5xl my-5">
          My name is <span className="font-bold">Jimmy Nguyen</span>.
        </h1>
        <p className="text-2xl my-3 text-gray-700">
          I am a{" "}
          <span className="font-bold text-gray-900">Full Stack Developer</span>{" "}
          building web applications with cutting edge technologies.
        </p>
      </div>
    </motion.div>
  );
}

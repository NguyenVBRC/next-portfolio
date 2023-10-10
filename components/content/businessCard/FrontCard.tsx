"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SocialsBtn from "../../buttons/SocialsBtn";

const FrontCard = () => {
  const [animateHeight, setAnimateHeight] = useState("230px");

  useEffect(() => {
    if (window.innerWidth < 405) {
      setAnimateHeight("300px");
    } else {
      setAnimateHeight("230px");
    }

    console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <motion.div
      className="w-[95%] sm:w-[400px]"
      initial={{ opacity: 0, height: "580px" }}
      animate={{ opacity: 1, y: 0, height: animateHeight }}
      transition={{ delay: 0.25 }}
    >
      <h1 className="font-bold text-4xl">Jimmy Nguyen</h1>
      <p className="text-xl my-3 sm:text-2xl">React Frontend Developer</p>
      <p className="text-gray-500">
        Building web applications with cutting edge technologies.
      </p>
      <Image
        src="/headshot.png"
        alt="Jimmy's Wedding Headshot"
        width="192"
        height="192"
        quality="95"
        priority={true}
        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl absolute right-4 top-5 hidden xl:block"
      />
      <div className="flex justify-between items-end">
        <SocialsBtn />
        <p>Click Me</p>
      </div>
    </motion.div>
  );
};

export default FrontCard;

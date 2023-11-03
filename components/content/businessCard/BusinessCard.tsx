"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import FrontCard from "./FrontCard";
import About from "./BackCard";

export default function Intro() {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref } = useSectionInView("Home", 0.5);

  const flipCard = () => {
    controls.start({ rotateY: isFlipped ? 0 : 180 });
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col max-w-[75rem] text-center sm:mb-0 sm:flex-row scroll-mt-[100rem]"
      onClick={flipCard}
    >
      <motion.div
        className="flex flex-col text-center mb-10 mt-4 px-4 font-small !leading-[1.5] sm:text-start"
        initial={{ rotateY: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-teal-50 rounded-xl border-[0.35rem] border-gray-900 shadow-xl p-7 relative dark:bg-slate-200">
          {!isFlipped ? <FrontCard /> : <About />}
        </div>
      </motion.div>
    </section>
  );
}

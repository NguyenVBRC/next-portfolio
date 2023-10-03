"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="flex flex-col overflow-auto w-[95%] max-w-[30rem] text-center sm:text-start leading-8 scroll-mt-28 sm:w-[400px] sm:overflow-visible"
      initial={{ opacity: 0, rotateY: 180, height: "230px" }}
      animate={{ opacity: 1, y: 0, height: "580px" }}
      transition={{ delay: 0.5 }}
    >
      <p className="mb-6">
        I've in worked in Human Resources for 5 years but despite the
        promotions, I always felt like my skills were never truly being tested.
        The skill ceiling always felt pretty easy to reach.
      </p>
      <p className="mb-6">
        I've always loved the idea of coding so I decided to go for it and
        studied <span className="font-medium">Full Stack Web Development</span>.
      </p>

      <p className="mb-6">
        <span className="italic">My favorite part of programming</span> is the
        ever-rising skill ceiling. I love the feeling of learning and developing
        my skills.
      </p>

      <p>
        I have successfully transitioned into a React Frontend Developer role
        from a Human Resources role with emphasis on recruitment. With a deep
        appreciation for both people and code, I bring a unique blend of skills
        that empower me to build user-centric web applications while fostering
        collaborative, diverse teams.
      </p>
    </motion.section>
  );
}

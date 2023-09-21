"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-6">
        I've in worked in Human Resources for 5 years but despite the
        promotions, I always felt like my skills were never truly being tested.
        The skill ceiling always felt pretty easy to reach.
      </p>
      <p className="mb-6">
        I've always loved the idea of coding so I decided to go for it and
        enrolled in a class for{" "}
        <span className="font-medium">Full Stack Web Development</span>.
      </p>

      <p className="mb-6">
        <span className="italic">My favorite part of programming</span> is the
        ever-rising skill ceiling. I <span className="underline">love</span> the
        feeling of learning and developing my skills.
      </p>

      <p>
        To summarize, I am a Full Stack Developer and former Full Cycle
        Recruiter. I have developed, but always improving, both my technical and
        soft skills making me a well-rounded{" "}
        <span className="line-through">developer</span> person.
      </p>
    </motion.section>
  );
}

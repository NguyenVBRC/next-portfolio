"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const SocialsBtn = () => {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.div
      className="flex flex-row justify-center lg:justify-start gap-2 text-lg font-medium mt-5 pt-5 border-t"
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //     delay: 0.1,
      // }}
    >
      <a
        className="bg-white h-[55.59px] w-[55.59px] p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="/resume.pdf"
        download
      >
        CV
      </a>
      <a
        className="bg-white h-[55.59px] w-[55.59px] p-4 text-gray-700 hover:text-gray-950 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://www.linkedin.com/in/jimmynguyendev/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/NguyenVBRC"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </motion.div>
  );

};

export default SocialsBtn;

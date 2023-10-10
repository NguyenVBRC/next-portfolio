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

  const btnStyles =
    "h-[40px] w-[40px] bg-white text-gray-700 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack";

  return (
    <motion.div className="flex flex-row justify-center gap-2 mt-5 pt-5 border-t">
      <a className={btnStyles} href="/resume.pdf" download>
        CV
      </a>
      <a
        className={btnStyles}
        href="https://www.linkedin.com/in/jimmynguyendev/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        className={btnStyles}
        href="https://github.com/NguyenVBRC"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </motion.div>
  );
};

export default SocialsBtn;

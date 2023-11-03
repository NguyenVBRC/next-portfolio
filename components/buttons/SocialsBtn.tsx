"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import DownloadResume from "./DownloadResume";

const SocialsBtn = () => {
  const [showResumeDownload, setShowResumeDownload] = useState(false);

  const handleClick = () => {
    setShowResumeDownload((prevShowResumeDownload) => !prevShowResumeDownload);
  };

  const btnStyles = "h-[40px] w-[40px] border-[1px] border-slate-50 text-gray-50 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] cursor-pointer";

  return (
    <div className="relative">
      <motion.div className="fixed left-5 bottom-5 flex flex-col justify-center items-center gap-4">
        <a className={btnStyles} onClick={handleClick}>
          CV
        </a>
        <a className={btnStyles} href="https://www.linkedin.com/in/jimmynguyendev/" target="_blank">
          <BsLinkedin />
        </a>
        <a className={btnStyles} href="https://github.com/NguyenVBRC" target="_blank">
          <FaGithubSquare />
        </a>
        <div className="h-[40px] border-[1px] border-slate-50"></div>
      </motion.div>
      {showResumeDownload && <DownloadResume />}
    </div>
  );
};

export default SocialsBtn;

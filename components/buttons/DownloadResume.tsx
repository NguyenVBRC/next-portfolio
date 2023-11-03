import React from "react";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";

const DownloadResume = () => {
  return (
    <motion.a
      className="flex fixed left-[70px] bottom-5 bg-slate-50 border-[0.15rem] border-gray-950 rounded-xl p-[1rem] hover:cursor-pointer"
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 70,
      }}
      initial={{ y: 100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      href="/resume.pdf"
      download
    >
      Resume
      <div className="flex ml-2 items-center">
        <BsDownload />
      </div>
    </motion.a>
  );
};

export default DownloadResume;

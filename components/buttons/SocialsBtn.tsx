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
            className="fixed bottom-4 left-4 flex flex-col items-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
        >
            {/* <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}
            >
                Contact Me
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link> */}
            <a
                className="group bg-white px-3 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/resume.pdf"
                download
            >
                CV
                {/* <HiDownload className="opacity-60" /> */}
            </a>
            <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
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

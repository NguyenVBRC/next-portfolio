"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../buttons/SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      className="z-40 fixed bottom-[6rem] w-[90%] text-center border-[0.35rem] border-gray-950 shadow-xl rounded-xl p-[1rem] bg-gray-100 dark:bg-gray-950 dark:border-black/40 dark:border-teal-50 sm:bottom-5 sm:right-[11rem] sm:w-[25rem] sm:bottom-5"
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 70,
      }}
      initial={{ y: 100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <form
        className="flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

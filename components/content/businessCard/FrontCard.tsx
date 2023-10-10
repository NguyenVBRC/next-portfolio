import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SocialsBtn from "../../buttons/SocialsBtn";

const FrontCard = () => {
  return (
    <motion.div
      className="flex flex-col justify-between w-[95%] sm:w-[400px]"
      initial={{ opacity: 0, height: "580px" }}
      animate={{ opacity: 1, y: 0, height: "250px" }}
      transition={{ delay: 0.25 }}
    >
      <div>
        {" "}
        <h1 className="font-bold text-3xl">Jimmy Nguyen</h1>
        <p className="text-lg my-3 sm:text-2xl">React Frontend Developer</p>
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
      </div>
      <div className="flex justify-between items-end">
        <SocialsBtn />
        <p className="absolute bottom-2 right-2">Click Me</p>
      </div>
    </motion.div>
  );
};

export default FrontCard;

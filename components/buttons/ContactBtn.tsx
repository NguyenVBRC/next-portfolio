"use client";

import { useState } from "react";
import Contact from "../content/Contact";

export default function ContactBtn() {
  const [showContact, setShowContact] = useState(false);

  const handleClick = () => {
    setShowContact((prevShowContact) => !prevShowContact);
  };

  return (
    <div className="flex flex-col items-center justify-center z-40">
      {showContact && <Contact />}
      <button
        className="fixed bottom-5 right-20 text-teal-50 bg-gray-950 w-[5rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-teal-50 dark:border-slate-950 dark:border-2 dark:text-gray-950"
        onClick={handleClick}
      >
        Contact
      </button>
    </div>
  );
}

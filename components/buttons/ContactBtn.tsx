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
        className="fixed bottom-5 right-5 border-[1px] border-[black] bg-teal-50 text-gray-950 w-[5rem] h-[3rem] rounded-full items-center justify-center hover:scale-[1.15] active:scale-105"
        onClick={handleClick}
      >
        Contact
      </button>
    </div>
  );
}

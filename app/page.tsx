"use client";

import { useEffect } from "react";

import Image from "next/image";
import logo from "@/public/jLogo.png";

import Introduction from "@/components/content/Introduction";
import Technologies from "@/components/content/Technologies";
import Experience from "@/components/content/Experience";
import ContactBtn from "@/components/buttons/ContactBtn";
import SocialsBtn from "@/components/buttons/SocialsBtn";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  function toTop() {
    scrollTo(0, 0);
  }

  useEffect(() => {
    toTop();
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <div className="fixed top-5 left-5 hover:cursor-pointer" onClick={toTop}>
        <Image src={logo} alt="Page Logo" height={40} width={40} />
      </div>
      <Introduction />
      <SectionDivider />
      <Technologies />
      <Experience />
      <ContactBtn />
      <SocialsBtn />
    </main>
  );
}

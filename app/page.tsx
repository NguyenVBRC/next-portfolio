import Intro from "@/components/Introduction";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import ResourceBtns from "@/components/ResourceBtns";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <ResourceBtns />
      <SectionDivider />
      <About />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

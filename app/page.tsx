import Intro from "@/components/content/Introduction";
import About from "@/components/content/About";
import Contact from "@/components/content/Contact";
import Technologies from "@/components/content/Technologies";
import Experience from "@/components/content/Experience";
import Projects from "@/components/content/projects/Projects";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <Technologies />
            <Experience />
            <Contact />
        </main>
    );
}

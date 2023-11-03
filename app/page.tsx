import ContactBtn from "@/components/buttons/ContactBtn";
import Technologies from "@/components/content/Technologies";
import Experience from "@/components/content/Experience";
import SectionDivider from "@/components/SectionDivider";
import Introduction from "@/components/content/Introduction";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* <BusinessCard /> */}
      <Introduction />
      <ContactBtn />
      {/* <SectionDivider /> */}
      <Technologies />
      <Experience />
    </main>
  );
}

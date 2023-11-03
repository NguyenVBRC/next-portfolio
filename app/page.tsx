import Introduction from "@/components/content/Introduction";
import Technologies from "@/components/content/Technologies";
import Experience from "@/components/content/Experience";
import ContactBtn from "@/components/buttons/ContactBtn";
import SocialsBtn from "@/components/buttons/SocialsBtn";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      {/* <SectionDivider /> */}
      <Technologies />
      <Experience />
      <ContactBtn />
      <SocialsBtn />
    </main>
  );
}

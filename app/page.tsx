import BusinessCard from "@/components/content/businessCard/BusinessCard";
// import Technologies from "@/components/content/Technologies";
// import Experience from "@/components/content/Experience";
import SectionDivider from "@/components/SectionDivider";
import ResourceBtns from "@/components/ResourceBtns";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <BusinessCard />
      {/* <SectionDivider />
      <Technologies />
      <Experience /> */}
    </main>
  );
}

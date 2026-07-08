import Image from "next/image";
import Bannerslider from "./components/Bannerslider";
import WhyChooseUs from "./components/Whychooseus";
import ResearchStat from "./components/Researchstat";
import PartneredWith from "./components/Partneredwith";

export default function Home() {
  return (
    <>
    <Bannerslider/>
    <WhyChooseUs/>
    <ResearchStat/>
    <PartneredWith/>
    
    </>
  );
}

import Image from "next/image";
import Bannerslider from "./components/Bannerslider";

import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseus from "./components/Whychooseus";
import About from "./components/About";
import Process from "./components/Process";
import Statistics from "./components/Statistics";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import InsuranceBanner from "./components/InsuranceBanner";

export default function Home() {
  return (
    <>
    <Bannerslider/>
    <InsuranceBanner/>
    <Hero/>
    <Services/>
    <WhyChooseus/>
    <About/>
    <Process/>
    <Statistics/>
    <Partners/>
    <Reviews/>
    <ContactCTA/>
    <FAQ/>
    </>
  );
}

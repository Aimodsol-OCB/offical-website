import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturePartners from "@/components/sections/FeaturePartners";
import Services from "@/components/sections/Services";
import AboutCase from "@/components/sections/AboutCase";
import ProcessTech from "@/components/sections/ProcessTech";
import Faq from "@/components/sections/Faq";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="page_content">
        <Hero />
        <FeaturePartners />
        <Services />
        <AboutCase />
        <ProcessTech />
        <Faq />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

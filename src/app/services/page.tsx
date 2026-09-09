import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import AboutIntro from "@/components/sections/AboutIntro";
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Our Services — Amidsol",
  description: "Explore Amidsol's featured IT and software development services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner prefix="Our Main" badge="Services" title="Our Services" bgImage="/images/bg_pattern_4.svg" />
        <AboutIntro />
        <WhyUsSection />
        <FeaturedServices />
        <CallToAction
          title="Ready to Work, Let's Chat"
          description="Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation."
          buttonLabel="Contact Us Today!"
          buttonHref="/contact"
          bgImage="/images/bg_image_1.webp"
        />
      </main>
      <Footer />
    </>
  );
}

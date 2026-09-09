import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import IntroAbout from "@/components/sections/IntroAbout";
import PolicySection from "@/components/sections/PolicySection";
import ClientLogosFunfacts from "@/components/sections/ClientLogosFunfacts";
import TeamSection from "@/components/sections/TeamSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "About Us — Amidsol",
  description: "Learn more about Amidsol — our history, mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner prefix="About" badge="Amidsol" title="About Us" bgImage="/images/bg_pattern_4.svg" />
        <IntroAbout />
        <PolicySection />
        <ClientLogosFunfacts />
        {/* <TeamSection /> */}
        <WhyUsSection />
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

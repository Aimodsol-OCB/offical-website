import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Our Portfolio — Amidsol",
  description: "Browse Amidsol's portfolio of technology, helpdesk, analysis, and marketing projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner prefix="Our" badge="Portfolio" title="Our Portfolio" bgImage="/images/bg_pattern_4.svg" />
        <PortfolioGrid />
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

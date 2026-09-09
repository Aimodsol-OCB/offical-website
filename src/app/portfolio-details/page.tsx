import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import PortfolioDetailContent from "@/components/sections/PortfolioDetailContent";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Portfolio Details — Amidsol",
  description: "Case study: Cloud Migration and Integration Project by Amidsol.",
};

export default function PortfolioDetailsPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner prefix="Portfolio" badge="Details" title="Portfolio Details" bgImage="/images/bg_pattern_4.svg" />
        <PortfolioDetailContent />
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

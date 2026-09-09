import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import ServiceDetailContent from "@/components/sections/ServiceDetailContent";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Service Details — Amidsol",
  description: "Network Infrastructure and Design services by Amidsol.",
};

export default function ServiceDetailsPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner prefix="Services" badge="Details" title="Services Details" bgImage="/images/bg_pattern_4.svg" />
        <ServiceDetailContent />
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

import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageBanner from "@/components/sections/PageBanner";
import ContactFormSection from "@/components/sections/ContactFormSection";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  title: "Contact Us — Amidsol",
  description:
    "Get in touch with Amidsol — location, phone, email, office hours, and a message form.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="page_content">
        <PageBanner badge="Contact" suffix="Us" title="Contact Us" bgImage="/images/bg_pattern_4.svg" />
        <ContactFormSection />
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

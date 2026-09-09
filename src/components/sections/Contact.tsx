import { Phone, Mail, MapPin } from "lucide-react";
import MultiStepContactForm from "@/components/sections/MultiStepContactForm";

const contactMethods = [
  { icon: Phone, href: "tel:+923164638200", text: "+923-164-638-200" },
  { icon: Mail, href: "mailto:hello@amidsol.com", text: "hello@amidsol.com" },
  { icon: MapPin, href: "#!", text: "Islamabad, Pakistan" },
];

const supportSteps = [
  "Share your requirements",
  "Discuss them with our experts",
  "Get a free quote",
  "Start the project",
];

/**
 * Literal port of `<section class="contact_section pb-80 bg-light
 * section_decoration">`. The form is presentational (no backend wired up
 * yet) — `onSubmit` just prevents the default page reload.
 */

export default function Contact() {
  return (
    <section className="contact_section pb-80 bg-light section_decoration">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_method_box">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex mb-3"
                  style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
                >
                  You Are Here
                </div>
                <h2 className="heading_text mb-0">Let&apos;s Start</h2>
                <p className="heading_description mb-0">
                  Initiating Your Journey to Success and Growth.
                </p>
              </div>
              <ul className="contact_method_list unordered_list_block">
                {contactMethods.map((m) => (
                  <li key={m.text}>
                    <a href={m.href}>
                      <span className="icon">
                        <m.icon size={16} />
                      </span>
                      <span className="text">{m.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="support_step unordered_list_block">
                {supportSteps.map((step, i) => (
                  <li key={step}>
                    <span className="serial_number">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <MultiStepContactForm />
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img alt="" src="/images/shape_line_5.svg" />
      </div>
      <div className="decoration_item shape_image_2">
        <img alt="" src="/images/shape_line_6.svg" />
      </div>
      <div className="decoration_item shape_image_3">
        <img alt="" src="/images/shape_space_5.svg" />
      </div>
    </section>
  );
}
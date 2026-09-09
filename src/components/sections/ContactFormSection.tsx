"use client";

import { contactInfoBoxes } from "@/data/contactInfo";
import ContactPageMultiStepForm from "@/components/sections/ContactPageMultiStepForm";

/**
 * Literal port of the Contact page's `<section class="contact_section
 * section_space bg-light">` — 4 info boxes, a form (Full Name / Email /
 * Phone / Message), and a Google Map embed. This is distinct from the
 * homepage's inline `Contact.tsx` (which mirrors index.html's own
 * `.instant_contact_form` card); this is the dedicated /contact page's
 * simpler `.contact_form` layout, ported from the scraped contact.html.
 *
 * Note: the source contact.html had this section as plain flat
 * `bg-light` with no decoration shapes. Added `section_decoration` +
 * the same three shape assets the homepage's contact section uses
 * (shape_line_5/6.svg, shape_space_5.svg) so the two contact forms
 * look visually consistent across the site.
 */
export default function ContactFormSection() {
  return (
    <section className="contact_section section_space bg-light section_decoration">
      <div className="container">
        <div className="contact_info_box row">
          {contactInfoBoxes.map((box) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={box.title}>
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img alt={box.title} src={box.icon} />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{box.title}</h3>
                  {box.lines.map((line) => (
                    <p className="mb-0" key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section_space pb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-7 contact_form_panel">
              <ContactPageMultiStepForm />
            </div>
            <div className="col-lg-5">
              <div className="gmap_canvas ps-lg-5">
                <iframe
                  src="https://maps.google.com/maps?q=Rawalpindi%2C%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Amidsol location"
                />
              </div>
            </div>
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
import Link from "next/link";
import { whyUsFacilities } from "@/data/services";

/**
 * Literal port of the "Why Our Services are Better Than Others?"
 * `<section class="service_section section_space bg-light">` block —
 * identical markup/content on both the Service page and the About page
 * in the source template, so it's shared here as one component.
 */
export default function WhyUsSection() {
  return (
    <section className="service_section section_space bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="image_wrap">
              <img alt="Amidsol - About" src="/images/about_image_5.webp" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-5">
              <div className="heading_block">
                <div className="heading_focus_text">
                  <span className="badge bg-success text-white">Why Us</span> Better
                </div>
                <h2 className="heading_text mb-0">Why Our Services are Better Than Others?</h2>
              </div>
              <ul className="service_facilities_group unordered_list">
                {whyUsFacilities.map((item) => (
                  <li key={item.title}>
                    <Link className="iconbox_block layout_icon_left" href="/services">
                      <span className="iconbox_icon">
                        <img alt={item.title} src={item.icon} />
                      </span>
                      <span className="iconbox_content">
                        <strong className="iconbox_title mb-0">{item.title}</strong>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

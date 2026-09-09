import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredServices } from "@/data/services";

/**
 * Literal port of the Service page's `<section class="service_section
 * section_space">` — an 8-card grid (the first two full-width, then a
 * 3+2+2 layout, matching the original's exact col-lg spans).
 */
export default function FeaturedServices() {
  const spans = ["col-lg-6", "col-lg-6", "col-lg-4", "col-lg-4", "col-lg-4", "col-lg-6", "col-lg-6"];

  return (
    <section className="service_section section_space">
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            Our <span className="badge bg-success text-white">Specialize</span>
          </div>
          <h2 className="heading_text mb-0">Featured Services</h2>
        </div>
        <div className="row">
          {featuredServices.map((service, i) => (
            <div className={spans[i] ?? "col-lg-6"} key={service.title}>
              <div className="service_block">
                <div className="service_image">
                  <img alt={service.title} src={service.image} />
                </div>
                <div className="service_content">
                  <h3 className="service_title">
                    <Link href="/services">{service.title}</Link>
                  </h3>
                  <div className="links_wrapper">
                    <ul className="category_btns_group unordered_list">
                      {service.tags.map((tag) => (
                        <li key={tag}>
                          <Link href="/services">{tag}</Link>
                        </li>
                      ))}
                    </ul>
                    <Link className="icon_block" href="/services">
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

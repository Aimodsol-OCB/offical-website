import Link from "next/link";
import { CircleDot } from "lucide-react";
import { services } from "@/data/services";

/**
 * Literal port of `<section class="service_section pt-175 pb-80 bg-light
 * section_decoration xb-hidden">`.
 */
export default function Services() {
  return (
    <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
          >
            Our Services
          </div>
          <h2 className="heading_text mb-0">
            How We Can <mark>Help</mark> You
          </h2>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4" key={service.title}>
              <div className="service_block_2">
                <div className="service_icon">
                  <img alt="Amidsol - Service icon" src={service.icon} />
                </div>
                <h3 className="service_title">
                  <Link href="/service-details">{service.title}</Link>
                </h3>
                <ul className="icon_list unordered_list_block">
                  {service.items.map((item) => (
                    <li key={item}>
                      <span className="icon_list_icon">
                        <CircleDot size={14} />
                      </span>
                      <span className="icon_list_text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img alt="" src="/images/shape_line_5.svg" />
      </div>
      <div className="decoration_item shape_image_2">
        <img alt="" src="/images/shape_line_6.svg" />
      </div>
      <div className="decoration_item shape_image_3">
        <img alt="" src="/images/shape_space_1.svg" />
      </div>
      <div className="decoration_item shape_image_4">
        <img alt="" src="/images/shape_angle_1.webp" />
      </div>
      <div className="decoration_item shape_image_5">
        <img alt="" src="/images/shape_angle_2.webp" />
      </div>
    </section>
  );
}

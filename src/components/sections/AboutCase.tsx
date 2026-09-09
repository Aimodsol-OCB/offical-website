import Link from "next/link";
import Btn from "@/components/ui/Btn";
import Counter from "@/components/ui/Counter";
import { caseStudies } from "@/data/caseStudies";

/**
 * Literal port of `<section class="about_and_case_section section_space
 * section_decoration bg-dark">`.
 */
export default function AboutCase() {
  return (
    <section
      className="about_and_case_section section_space section_decoration bg-dark"
      style={{ backgroundImage: "url(/images/bg_image_2.webp)" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className="heading_focus_text has_underline d-inline-flex"
                  style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
                >
                  About Us
                </div>
                <h2 className="heading_text">
                  Amidsol <mark>Mission &amp; Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  At Amidsol, our mission is to empower businesses through
                  innovative software solutions that streamline operations,
                  foster growth, and drive success. With a commitment to
                  excellence and customer satisfaction we strive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about_image_2">
              <div className="image_wrap">
                <img alt="Amidsol - About" src="/images/about_image_6.webp" />
              </div>
              <div
                className="about_funfact_info"
                style={{ backgroundImage: "url(/images/shape_bg_1.webp)" }}
              >
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li><img alt="Customer" src="/images/avatar_1.webp" /></li>
                    <li><img alt="Customer" src="/images/avatar_2.webp" /></li>
                    <li><img alt="Customer" src="/images/avatar_3.webp" /></li>
                    <li><span>6k+</span></li>
                  </ul>
                  <p className="mb-0">Happy Customer</p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <Counter to={6} />
                      <span>K+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <Counter to={100} />
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <Btn href="/about" label="Learn More" variant="btn-primary" />
                <div className="icon_globe">
                  <img alt="" src="/images/icon_global.svg" />
                </div>
              </div>
              <div className="space_line">
                <img alt="" src="/images/shape_line.webp" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
            >
              Case Studies
            </div>
            <h2 className="heading_text mb-0">
              Our latest <mark>Case</mark> Studies
            </h2>
          </div>

          <div className="case_studies_wrapper">
            {caseStudies.map((study) => (
              <div className="case_study_block" key={study.title}>
                <div className="case_study_image">
                  <img alt="Amidsol - Case" src={study.image} />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    <li><Link href="/portfolio">{study.category}</Link></li>
                  </ul>
                  <h3 className="case_title">
                    <Link href="/portfolio-details">{study.title}</Link>
                  </h3>
                  <p>{study.description}</p>
                  <ul className="icon_list unordered_list">
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Industry:</strong> {study.industry}
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Country:</strong> {study.country}
                      </span>
                    </li>
                  </ul>
                  <ul className="case_technologies unordered_list" data-text="Core Technologies:">
                    {study.technologies.map((tech) => (
                      <li key={tech}>
                        <img alt="" src={tech} />
                      </li>
                    ))}
                  </ul>
                  <Btn href="/portfolio-details" label="Read Case" variant="btn-primary" />
                </div>
              </div>
            ))}
          </div>

          <div className="btns_group pb-0">
            <Btn href="/portfolio" label="View More Cases Study" variant="btn-primary" />
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img alt="" src="/images/shape_space_2.svg" />
      </div>
    </section>
  );
}
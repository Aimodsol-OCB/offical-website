import Btn from "@/components/ui/Btn";

/**
 * Literal port of the Service page's `<section class="about_section
 * section_space bg-light">` — a cartoon illustration + "Tailored IT
 * Solutions" pitch with a CTA button.
 */
export default function AboutIntro() {
  return (
    <section className="about_section section_space bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-5 order-lg-last">
            <div className="team_cartoon_image">
              <img alt="Amidsol - About" src="/images/service_image_8.webp" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block">
                <div className="heading_focus_text">
                  We Are <span className="badge bg-success text-white">IT Guidance</span>
                </div>
                <h2 className="heading_text">Tailored IT Solutions for Your Success</h2>
                <p className="heading_description mb-0">
                  We understand that every business is unique, with its own set of challenges,
                  goals, and aspirations. That&apos;s why we offer tailored IT solutions designed
                  around what actually moves your business forward.
                </p>
              </div>
              <Btn href="/contact" label="Talk to an Expert" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

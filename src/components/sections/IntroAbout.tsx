import { Play } from "lucide-react";

/**
 * Literal port of `<section class="intro_about_section section_space
 * bg-light">` — two hero images (one with a video-play button overlay)
 * plus a description row underneath.
 */
export default function IntroAbout() {
  return (
    <section className="intro_about_section section_space bg-light">
      <div className="intro_about_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="image_wrap">
                <img alt="Amidsol - About" src="/images/about_image_3.webp" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="image_wrap position-relative">
                <img alt="Amidsol - About" src="/images/about_image_4.webp" />
                <a
                  className="video_btn ripple_effect"
                  href="https://www.youtube.com/watch?v=7e90gBu4pas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="btn_icon">
                    <Play size={16} fill="currentColor" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heading_block mb-0">
          <div className="row justify-content-lg-between">
            <div className="col-lg-4">
              <div className="heading_focus_text">
                About <span className="badge bg-success text-white">Amidsol</span>
              </div>
              <h2 className="heading_text mb-0">We Provide You Flexible Services</h2>
            </div>
            <div className="col-lg-6">
              <p className="heading_description mb-0">
                At Amidsol, we pride ourselves on offering dynamic IT services tailored to suit
                your specific requirements. Our flexible approach means we can adjust our
                offerings to accommodate your evolving needs, whether you require comprehensive
                IT infrastructure support, strategic consultancy, or software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

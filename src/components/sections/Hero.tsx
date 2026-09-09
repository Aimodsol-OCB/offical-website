import { Phone } from "lucide-react";
import Btn from "@/components/ui/Btn";

/**
 * Literal port of `<section class="software_company_hero_section xb-hidden">`.
 * The engine graphic's rotation is the theme's own animation: `style.css`
 * has `.image_wrap_2 img { animation: spin 40s infinite linear }` and
 * `.image_wrap_3 img { animation: spinReverse 40s infinite linear }` — since
 * these classes are used unchanged below, the spin is automatically the
 * exact original animation, no reimplementation needed.
 */
export default function Hero() {
  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div
                className="heading_focus_text has_underline text-white d-inline-flex"
                style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
              >
                Perfect Company Solution
              </div>
              <h1 className="text-white">
                We Help Companies in <mark>Digitizing</mark> Their Businesses.
              </h1>
              <p>
                In today&apos;s rapidly evolving digital landscape, staying ahead
                of the curve is essential for businesses aiming to thrive and
                succeed.
              </p>
              <ul className="step_list text-white unordered_list_block">
                <li>Focus on quality first</li>
                <li>Get to the market on time</li>
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                <li>
                  <Btn href="/contact" label="Contact Us Today!" />
                </li>
                <li>
                  <a className="hotline_block" href="tel:+923164638200">
                    <span className="hotline_icon">
                      <Phone size={20} />
                    </span>
                    <span className="hotline_content">
                      <small>CONTACT US DAILY</small>
                      <strong className="text-white">(+923) 164 638 200</strong>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <img alt="Engine" src="/images/circle_engine_1.webp" />
              </div>
              <div className="image_wrap_2">
                <img alt="Engine" src="/images/circle_engine_2.webp" />
              </div>
              <div className="image_wrap_3">
                <img alt="Engine" src="/images/circle_engine_3.webp" />
              </div>
              <div className="image_wrap_4">
                <img alt="Engine" src="/images/circle_engine_4.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape_image_1">
        <img alt="" src="/images/shape_image_1.webp" />
      </div>
      <div className="shape_image_2">
        <img alt="" src="/images/shape_image_2.webp" />
      </div>
      <div className="shape_image_3">
        <img alt="" src="/images/shape_image_3.webp" />
      </div>
      <div className="shape_image_4">
        <img alt="" src="/images/shape_image_4.webp" />
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Counter from "@/components/ui/Counter";
import { funfacts } from "@/data/aboutPage";

const uniqueLogos = Array.from({ length: 7 }, (_, i) => `/images/client_logo_${i + 1}.webp`);
// Same fix as FeaturePartners: Swiper's loop mode needs enough slides to
// fill more than one screen width or autoplay silently stalls.
const logos = [...uniqueLogos, ...uniqueLogos, ...uniqueLogos, ...uniqueLogos];

/**
 * Literal port of `<section class="client_logo_section section_space">`
 * — a client-logo marquee (same real-Swiper approach as the homepage's
 * FeaturePartners), 4 odometer-style funfact counters, and an employees
 * highlight box.
 */
export default function ClientLogosFunfacts() {
  return (
    <section className="client_logo_section section_space">
      <div className="container">
        <div className="section_space pt-0">
          <div className="heading_block text-center">
            <div className="heading_focus_text mb-0">
              <span className="badge bg-success text-white">Brand We</span> Work With
            </div>
          </div>
          <Swiper
            className="client_logo_carousel swiper"
            modules={[Autoplay, FreeMode]}
            loop
            speed={2000}
            freeMode
            centeredSlides
            allowTouchMove
            autoplay={{ delay: 1, disableOnInteraction: true }}
            breakpoints={{
              376: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1025: { slidesPerView: 7 },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={`${logo}-${i}`}>
                <div className="client_logo_item">
                  <img alt="Amidsol - Client Logo" src={logo} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="row funfact_wrapper">
          <div className="col-lg-8">
            <div className="row">
              {funfacts.map((fact) => (
                <div className="col-md-6" key={fact.title}>
                  <div className="funfact_block">
                    <div className="funfact_icon">
                      <img alt={fact.title} src={fact.icon} />
                    </div>
                    <div className="funfact_content">
                      <div className="counter_value">
                        <Counter to={parseFloat(fact.count)} />
                        <span>{fact.suffix}</span>
                      </div>
                      <h3 className="funfact_title mb-0">{fact.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="our_world_employees">
              <div className="image_wrap">
                <img alt="Amidsol - Team" src="/images/about_image_1.webp" />
              </div>
              <div className="content_wrap">
                <h3 className="title_text mb-0">
                  <b className="d-block">15+</b> team members across Pakistan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

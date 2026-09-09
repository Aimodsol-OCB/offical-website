"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const uniqueLogos = Array.from({ length: 7 }, (_, i) => `/images/client_logo_${i + 1}.webp`);
// Swiper's loop mode needs enough slides to fill more than one screen at the
// widest breakpoint (slidesPerView: 7) or it silently disables looping —
// that's why the carousel looked frozen. The original theme sidesteps this
// by repeating its 7 logos 4× (28 slides total); doing the same here.
const logos = [...uniqueLogos, ...uniqueLogos, ...uniqueLogos, ...uniqueLogos];

/**
 * Literal port of `<div class="feature_partners_section">`, using the real
 * `swiper` npm package configured to match the original `main.js` call to
 * `new Swiper(".client_logo_carousel", { loop, speed: 2000, freeMode,
 * centeredSlides, autoplay: { delay: 1 }, breakpoints })` — same continuous
 * auto-scroll animation, no jQuery involved (Swiper itself is a standalone
 * library, same as the source theme used).
 */
export default function FeaturePartners() {
  return (
    <div className="feature_partners_section">
      <div className="container position-relative">
        <div className="title_text text-white">Our Featured Partner&apos;s</div>
        <Swiper
          className="client_logo_carousel"
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
    </div>
  );
}

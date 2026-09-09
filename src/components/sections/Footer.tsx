"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Check, Mail, Circle } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { footerColumns, servicePills } from "@/data/footer";
import "swiper/css";
import "swiper/css/free-mode";

const pillsTrack = [...servicePills, ...servicePills];


/**
 * Literal port of `<footer class="site_footer footer_layout_2
 * section_decoration">`. The service-pill strip uses the real `swiper`
 * package, same as `FeaturePartners`.
 */
export default function Footer() {
  return (
    <footer
      className="site_footer footer_layout_2 section_decoration"
      style={{ backgroundImage: "url(/images/bg_pattern_3.svg)" }}
    >
      <div className="decoration_item shape_image_1">
        <img alt="" src="/images/shape_space_2.svg" />
      </div>
      <div className="container">
        <Swiper
          className="service_pill_carousel swiper"
          modules={[Autoplay, FreeMode]}
          loop
          speed={4000}
          freeMode
          slidesPerView="auto"
          spaceBetween={16}
          allowTouchMove
          autoplay={{ delay: 1, disableOnInteraction: true }}
        >
          {pillsTrack.map((pill, i) => (
            <SwiperSlide key={`${pill}-${i}`} style={{ width: "auto" }}>
              <Link className="service_pill_block" href="/service-details">
                <Check size={14} />
                <span>{pill}</span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            {footerColumns.map((col) => (
              <div className="col-lg-2 col-md-6" key={col.title}>
                <div className="footer_widget">
                  <h3 className="footer_info_title">{col.title}</h3>
                  <ul className="icon_list unordered_list_block">
                    {col.links.map((link) => (
                      <li key={link}>
                        <Link href="#!">
                          <span className="icon_list_text">{link}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Newsletter</h2>
                <p>Sign up to Amidsol&apos;s weekly newsletter to get the latest updates.</p>
                <form
                  className="footer_newslatter_2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="footer_mail_input">
                    <Mail size={16} />
                  </label>
                  <input
                    id="footer_mail_input"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button type="submit">Send</button>
                </form>
                <ul className="social_icons_block unordered_list">
                  <li><a href="#!"><FacebookIcon /></a></li>
                  <li><a href="#!"><TwitterIcon /></a></li>
                  <li><a href="#!"><LinkedinIcon /></a></li>
                  <li><a href="#!"><YoutubeIcon /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer_bottom"
        style={{ backgroundImage: "url(/images/shape_space_6.svg)" }}
      >
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © {new Date().getFullYear()} Amidsol, All rights reserved.
          </p>
          <ul className="icon_list unordered_list">
            <li>
              <Link href="/terms">
                <span className="icon_list_icon">
                  <Circle size={8} fill="currentColor" />
                </span>
                <span className="icon_list_text">Terms of Use</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span className="icon_list_icon">
                  <Circle size={8} fill="currentColor" />
                </span>
                <span className="icon_list_text">Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

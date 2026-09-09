"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import "swiper/css";
import "swiper/css/pagination";
import { teamMembers } from "@/data/team";

/**
 * Literal port of `<section class="team_section section_space xb-hidden">`
 * — a real-Swiper team carousel (matching `main.js`'s `swiperTeam` config:
 * loop, speed 800, centeredSlides, pagination, breakpoints 576→2, 1025→3),
 * team members repeated so loop mode has enough slides.
 */
export default function TeamSection() {
  const slides = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section className="team_section section_space xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text">
            <span className="badge bg-success text-white">Our Expert</span> Team Members
          </div>
          <h2 className="heading_text mb-0">Top Skilled Experts</h2>
        </div>
        <Swiper
          className="team_carousel"
          modules={[Autoplay, Pagination]}
          loop
          speed={800}
          spaceBetween={30}
          allowTouchMove
          centeredSlides
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          pagination={{ el: ".team-swiper-pagination", clickable: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
        >
          {slides.map((member, i) => (
            <SwiperSlide key={`${member.name}-${i}`}>
              <div className="team_block">
                <div className="team_member_image">
                  <Link aria-label="Team Details" className="image_wrap" href="/about">
                    <img alt={member.name} src={member.image} />
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="team_member_info">
                  <h3 className="team_member_name">
                    <Link href="/about">{member.name}</Link>
                  </h3>
                  <h4 className="team_member_designation">{member.designation}</h4>
                  <ul className="social_icons_block unordered_list justify-content-center">
                    <li><a href="#!"><FacebookIcon /></a></li>
                    <li><a href="#!"><TwitterIcon /></a></li>
                    <li><a href="#!"><LinkedinIcon /></a></li>
                    <li><a href="#!"><InstagramIcon /></a></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="team-swiper-pagination swiper-pagination" />
      </div>
    </section>
  );
}

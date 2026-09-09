"use client";

import { useState } from "react";
import Link from "next/link";
import { Tags, Building2 } from "lucide-react";
import { portfolioItems, portfolioFilters } from "@/data/portfolioItems";

/**
 * Literal port of `<section class="portfolio_section section_space
 * bg-light">`. The original filters cards with a plain jQuery
 * show/hide (`main.js` lines ~69-78: `.not(filterValue).hide()` /
 * `.filter(filterValue).show()`) — reimplemented here with `useState`
 * and a simple array filter, same visual result, no jQuery.
 */
export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio_section section_space bg-light">
      <div className="container">
        <div className="filter_elements_nav">
          <ul className="unordered_list justify-content-center">
            {portfolioFilters.map((filter) => (
              <li
                key={filter.value}
                className={activeFilter === filter.value ? "active" : ""}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter_elements_wrapper row">
          {visibleItems.map((item) => (
            <div className={`col-lg-6 ${item.category}`} key={item.title}>
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link className="portfolio_image_wrap bg-light" href="/portfolio">
                    <img alt={item.title} src={item.image} />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link href="/portfolio">{item.title}</Link>
                  </h3>
                  <ul className="category_list unordered_list">
                    <li>
                      <Link href="/portfolio">
                        <Tags size={14} /> {item.tag}
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <Building2 size={14} /> {item.industry}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Tags, Building2, CircleCheck } from "lucide-react";
import { portfolioDetail } from "@/data/portfolioDetail";
import { portfolioItems } from "@/data/portfolioItems";

/**
 * Literal port of `<section class="portfolio_details_section
 * section_space bg-light">`. "Similar Projects" reuses the last two
 * entries from the shared `portfolioItems` data (same items the source
 * template hardcoded here) instead of duplicating them.
 */
export default function PortfolioDetailContent() {
  const similar = portfolioItems.slice(-2);

  return (
    <section className="portfolio_details_section section_space bg-light">
      <div className="container">
        <div className="details_item_image">
          <img alt={portfolioDetail.title} src={portfolioDetail.image} />
        </div>
        <h2 className="details_item_title">{portfolioDetail.title}</h2>
        {portfolioDetail.paragraphs.map((p, i) => (
          <p className={i === portfolioDetail.paragraphs.length - 1 ? "mb-0" : ""} key={i}>
            {p}
          </p>
        ))}
        <hr />
        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
          {portfolioDetail.info.map((item) => (
            <li key={item.label}>
              <span className="icon_list_text">
                <strong className="text-dark text-uppercase">{item.label}:</strong> {item.value}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="details_item_info_title pt-4">Project Requirement</h3>
        <p>{portfolioDetail.requirement.intro}</p>
        <div className="row mb-4">
          <div className="col-lg-5">
            <ul className="icon_list unordered_list_block">
              {portfolioDetail.requirement.columnA.map((item) => (
                <li key={item}>
                  <span className="icon_list_icon">
                    <CircleCheck size={16} />
                  </span>
                  <span className="icon_list_text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-5">
            <ul className="icon_list unordered_list_block">
              {portfolioDetail.requirement.columnB.map((item) => (
                <li key={item}>
                  <span className="icon_list_icon">
                    <CircleCheck size={16} />
                  </span>
                  <span className="icon_list_text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="details_item_info_title pt-4">Solution &amp; Result</h3>
        {portfolioDetail.result.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h3 className="details_item_info_title pt-5 mb-4">Our Similar Projects</h3>
        <div className="row">
          {similar.map((item) => (
            <div className="col-lg-6" key={item.title}>
              <div className="portfolio_block portfolio_layout_2">
                <div className="portfolio_image">
                  <Link className="portfolio_image_wrap bg-light" href="/portfolio-details">
                    <img alt={item.title} src={item.image} />
                  </Link>
                </div>
                <div className="portfolio_content">
                  <h3 className="portfolio_title">
                    <Link href="/portfolio-details">{item.title}</Link>
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

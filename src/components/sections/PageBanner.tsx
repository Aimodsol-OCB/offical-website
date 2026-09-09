type PageBannerProps = {
  prefix?: string;
  badge: string;
  suffix?: string;
  title: string;
  bgImage?: string;
};

/**
 * Literal port of the inner pages' `<section class="page_banner_section
 * text-center">` eyebrow pattern (`.heading_focus_text:has(.badge)` in
 * style.css — a badge pill inline with plain text). Word order differs by
 * page in the source: Contact is "badge → suffix" ("Contact" badge, then
 * "Us"), while Service/Portfolio/About are "prefix → badge" ("Our Main"
 * then "Services" badge) — both are supported via the optional props.
 */
export default function PageBanner({ prefix, badge, suffix, title, bgImage }: PageBannerProps) {
  return (
    <section
      className="page_banner_section text-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className="container">
        <div className="heading_focus_text text-white">
          {prefix ? `${prefix} ` : ""}
          <span className="badge bg-success">{badge}</span>
          {suffix ? ` ${suffix}` : ""}
        </div>
        <h1 className="page_title mb-0 text-white">{title}</h1>
      </div>
    </section>
  );
}

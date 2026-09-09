import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type BtnProps = {
  href: string;
  label: string;
  variant?: "btn-primary" | "btn-dark" | "";
  className?: string;
};

/**
 * Exact port of the theme's `.btn` markup (see style.css `.btn`,
 * `.btn .btn_label`, `.btn .btn_label:before`). The sliding-text hover
 * animation is not reimplemented here — it IS the original CSS rule
 * (`.btn:hover .btn_label { transform: translateY(-81%) }` reading the
 * duplicate text from `data-text` via `content: attr(data-text)`), so it
 * works automatically as long as this markup shape is preserved exactly.
 * Font Awesome's icon font wasn't present in the scrape, so the
 * `<i class="fa-solid fa-arrow-up-right">` glyph is swapped for the
 * equivalent lucide-react icon inside the same `.btn_icon` wrapper.
 */
export default function Btn({ href, label, variant = "", className = "" }: BtnProps) {
  return (
    <Link href={href} className={`btn ${variant} ${className}`.trim()}>
      <span className="btn_label" data-text={label}>
        {label}
      </span>
      <span className="btn_icon">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

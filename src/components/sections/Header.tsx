"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Btn from "@/components/ui/Btn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Literal port of the theme's `<header class="site_header site_header_2">`,
 * trimmed to a plain 5-link nav matching only the pages this site actually
 * has (Home, Services, Portfolio, About, Contact) — the original template's
 * dropdown/mega-menu items (Company, Pages, extra Home/Portfolio variants)
 * pointed at pages that were never built, so they're dropped rather than
 * left as dead links.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site_header site_header_2">
      <div className="header_bottom stricky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link className="site_link" href="/">
                  <img alt="Amidsol logo" src="/images/site_logo_2.svg" />
                  <img alt="Amidsol logo" src="/images/site_logo_3.svg" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className={`main_menu_inner collapse navbar-collapse justify-content-lg-center ${
                    mobileOpen ? "show" : ""
                  }`}
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link className="nav-link" href={link.href} onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>

            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    aria-expanded={mobileOpen}
                    aria-label="Toggle navigation"
                    className="mobile_menu_btn"
                    onClick={() => setMobileOpen((v) => !v)}
                    type="button"
                  >
                    <Menu size={20} />
                  </button>
                </li>
                <li>
                  <Btn href="/contact" label="Get Started" variant="btn-primary" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
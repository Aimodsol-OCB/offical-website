# Amidsol — Next.js + TypeScript + Tailwind Conversion

Converted from the scraped Bootstrap/jQuery HTML template into a component-based
Next.js (App Router) site. **Scope of this pass:** Header (with mega menus),
Hero, Feature Partners, Services, and About & Case Studies sections. The
remaining sections (Process/Tech tabs, FAQ, Blog, Contact, Footer) were not
converted yet — say the word and I'll do those next in the same pattern.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css` mirror the
  original `--bs-primary`, `--bs-secondary`, `--bs-dark`, `--bs-light` etc.)
- `lucide-react` for icons (replaces Font Awesome)
- No jQuery / Bootstrap JS — all interactivity (mobile menu, dropdowns,
  the odometer counters, the partner-logo marquee) is native React
  state + CSS, no external runtime library.

## Structure
```
src/
  app/
    layout.tsx        Root layout, metadata, font stack
    page.tsx           Assembles the sections
    globals.css         Tailwind theme tokens + marquee keyframes
  components/
    ui/                 Button, SectionHeading, Counter (odometer replacement)
    sections/           Header, Hero, FeaturePartners, Services, AboutCase
  data/                  nav.ts, services.ts, caseStudies.ts — content as data
public/
  images/                All original image assets (as-is)
```

## Notes / decisions
- **Font:** the original template uses a licensed font ("Axiforma") whose
  files weren't in the scraped export. The theme currently falls back to a
  Plus-Jakarta-Sans-style system stack. Once you have real font files (or
  network access for Google Fonts), swap `--font-sans` in `globals.css`
  or wire up `next/font/google` / `next/font/local` in `layout.tsx`.
- **Marquee / counters / accordions:** rebuilt natively (CSS `@keyframes`
  marquee, `IntersectionObserver` count-up, React `useState` dropdowns) per
  your choice — no Swiper/WOW/Odometer/jQuery dependency.
- **Mega menus:** desktop uses hover + click-toggle dropdowns; mobile has an
  accordion-style drawer. Both pull from the same `src/data/nav.ts` so
  content stays in one place.
- Internal links point to route stubs (`/about`, `/portfolio`, etc.) that
  don't exist yet — add those pages as you build out the rest of the site.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified passing)
```

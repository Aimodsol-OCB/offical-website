import Btn from "@/components/ui/Btn";

type CallToActionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  bgImage: string;
};

/**
 * Literal port of `<section class="calltoaction_section parallaxie">`.
 * The original drives the background parallax with the `parallaxie.js`
 * jQuery plugin; skipped per the no-jQuery decision — the background
 * still renders (via `background-attachment` from `.parallaxie` in
 * style.css), just without the JS-driven scroll offset.
 */
export default function CallToAction({
  title,
  description,
  buttonLabel,
  buttonHref,
  bgImage,
}: CallToActionProps) {
  return (
    <section
      className="calltoaction_section parallaxie"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">{title}</h2>
          <p className="heading_description mb-0">{description}</p>
        </div>
        <Btn href={buttonHref} label={buttonLabel} variant="btn-primary" />
      </div>
    </section>
  );
}

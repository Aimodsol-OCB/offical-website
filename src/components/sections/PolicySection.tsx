import { policyBoxes } from "@/data/aboutPage";

/**
 * Literal port of `<section class="policy_section bg-light">` — 3
 * History/Mission/Vision info boxes.
 */
export default function PolicySection() {
  return (
    <section className="policy_section bg-light">
      <div className="container">
        <div className="row">
          {policyBoxes.map((box) => (
            <div className="col-lg-4" key={box.title}>
              <div className="iconbox_block">
                <div className={`iconbox_icon ${box.iconBg}`}>
                  <img alt={box.title} src={box.icon} />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{box.title}</h3>
                  <p className="mb-0">{box.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

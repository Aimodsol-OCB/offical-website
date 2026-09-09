"use client";

import { useState } from "react";
import { processSteps, processBody, techTabs } from "@/data/technologies";

/**
 * Literal port of `<section class="process_technology_review_section
 * bg-light section_decoration">`. The original drives the accordion and
 * tabs with Bootstrap's JS (`data-bs-toggle="collapse"` / `"tab"`); here
 * that's hand-rolled with `useState`, toggling the exact same `.show` /
 * `.active` classes `style.css` already styles.
 */
export default function ProcessTech() {
  const [openStep, setOpenStep] = useState("collapse_one");
  const [activeTab, setActiveTab] = useState(techTabs[0].id);

  return (
    <section className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className="heading_focus_text has_underline d-inline-flex"
                style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
              >
                Working Process
              </div>
              <h2 className="heading_text mb-0">
                Our <mark>Approach</mark>
              </h2>
            </div>
            <div className="accordion" id="service_process_faq">
              {processSteps.map((step) => {
                const isOpen = openStep === step.id;
                return (
                  <div className="accordion-item" key={step.id}>
                    <div
                      aria-controls={step.id}
                      aria-expanded={isOpen}
                      className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                      role="button"
                      onClick={() => setOpenStep(isOpen ? "" : step.id)}
                    >
                      {step.title}
                    </div>
                    <div
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                      id={step.id}
                    >
                      <div className="accordion-body">
                        <p className="m-0">{processBody}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="content_layer_group unordered_list_block text-center">
              {processSteps.map((step) => (
                <li
                  key={step.id}
                  aria-controls={step.id}
                  aria-expanded={openStep === step.id}
                  role="button"
                  onClick={() => setOpenStep(step.id)}
                >
                  <span>{step.short}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section_space">
          <div className="heading_block text-center">
            <div
              className="heading_focus_text has_underline d-inline-flex"
              style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
            >
              Our Technologies
            </div>
            <h2 className="heading_text mb-0">
              We Use <mark>Technologies</mark>
            </h2>
          </div>
          <div className="tab_block_wrapper">
            <ul className="nav justify-content-center" role="tablist">
              {techTabs.map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    aria-selected={activeTab === tab.id}
                    className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                    role="tab"
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content">
              {techTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""}`}
                  role="tabpanel"
                >
                  <div className="web_development_technologies row justify-content-center">
                    {tab.items.map((item) => (
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={item.name}>
                        <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                          <div className="iconbox_icon">
                            <img alt={item.name} src={item.icon} />
                          </div>
                          <div className="iconbox_content">
                            <h3 className="iconbox_title mb-0">{item.name}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

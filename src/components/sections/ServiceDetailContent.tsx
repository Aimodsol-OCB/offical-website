"use client";

import { useState } from "react";
import { Play, CircleCheck } from "lucide-react";
import { serviceDetail } from "@/data/serviceDetail";

/**
 * Literal port of `<section class="service_details_section section_space
 * bg-light">`. The "Service Process" accordion + synced side-list uses
 * the same pattern as the homepage's `ProcessTech` (hand-rolled `useState`
 * toggling `.show`/`.collapsed`, no Bootstrap JS).
 */
export default function ServiceDetailContent() {
  const [openStep, setOpenStep] = useState(serviceDetail.process[0].id);

  return (
    <section className="service_details_section section_space bg-light">
      <div className="container">
        <div className="details_item_image position-relative">
          <img alt={serviceDetail.title} src={serviceDetail.image} />
          <a
            className="video_btn ripple_effect"
            href={serviceDetail.videoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="btn_icon">
              <Play size={16} fill="currentColor" />
            </span>
          </a>
        </div>
        <h2 className="details_item_title">{serviceDetail.title}</h2>
        {serviceDetail.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h3 className="details_item_info_title">Service Process</h3>
        <div className="row mb-5 align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="accordion" id="service_process_faq">
              {serviceDetail.process.map((step) => {
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
                    <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} id={step.id}>
                      <div className="accordion-body">
                        <p className="m-0">{serviceDetail.processBody}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="content_layer_group unordered_list_block text-center">
              {serviceDetail.process.map((step) => (
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

        <h3 className="details_item_info_title">Services Outcome</h3>
        <p className="mb-4">{serviceDetail.outcomeIntro}</p>
        <div className="row mb-4">
          <div className="col-lg-6">
            <ul className="icon_list unordered_list_block">
              {serviceDetail.outcomeColumnA.map((item) => (
                <li key={item}>
                  <span className="icon_list_icon">
                    <CircleCheck size={16} />
                  </span>
                  <span className="icon_list_text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="icon_list unordered_list_block">
              {serviceDetail.outcomeColumnB.map((item) => (
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

        <div className="row">
          {serviceDetail.gallery.map((img) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={img}>
              <div className="details_item_image m-0">
                <img alt={serviceDetail.title} src={img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

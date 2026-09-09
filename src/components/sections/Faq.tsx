"use client";

import { useState } from "react";
import { Circle } from "lucide-react";
import { faqItems, faqAnswerIntro, faqAnswerListA, faqAnswerListB } from "@/data/faq";

/**
 * Literal port of `<section class="faq_section section_decoration">`.
 */
export default function Faq() {
  const [openId, setOpenId] = useState(faqItems[0].id);

  return (
    <section className="faq_section section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{ backgroundImage: "url(/images/shape_title_under_line.svg)" }}
          >
            F.A.Q.
          </div>
          <h2 className="heading_text mb-0">
            Need a <mark>Support?</mark>
          </h2>
        </div>
        <div className="faq_accordion accordion" id="faq_accordion">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div className="accordion-item" key={item.id}>
                <div
                  aria-controls={item.id}
                  aria-expanded={isOpen}
                  className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                  role="button"
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                >
                  {item.question}
                </div>
                <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} id={item.id}>
                  <div className="accordion-body">
                    {/* <div className="text_a">A.</div> */}
                    <p>{faqAnswerIntro}</p>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="icon_list unordered_list_block">
                          {faqAnswerListA.map((text) => (
                            <li key={text}>
                              <span className="icon_list_icon">
                                <Circle size={10} fill="currentColor" />
                              </span>
                              <span className="icon_list_text">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="icon_list unordered_list_block">
                          {faqAnswerListB.map((text) => (
                            <li key={text}>
                              <span className="icon_list_icon">
                                <Circle size={10} fill="currentColor" />
                              </span>
                              <span className="icon_list_text">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

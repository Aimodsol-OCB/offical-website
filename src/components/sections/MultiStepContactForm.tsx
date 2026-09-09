"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Globe,
  MessageCircle,
  MailOpen,
  CircleCheck,
} from "lucide-react";

const serviceOptions = ["Web App", "Mobile App", "Design / Branding", "Automation / AI"];

const BUDGET_MIN = 20;
const BUDGET_MAX = 10000;

/**
 * 3-step version of the homepage's contact form:
 *   1. Which service/tech stack the lead wants
 *   2. A budget slider ($20–$10,000)
 *   3. The original name/email/phone/company/message fields
 * No original theme markup to port here — this flow doesn't exist in the
 * source template, so it's built fresh, styled to match via the theme's
 * own CSS custom properties (see globals.css). Submission is still
 * presentational (no backend wired up) — it just moves to a thank-you
 * state with all the collected data logged to the console for now.
 */
export default function MultiStepContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState(2000);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const updateField = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — logging the combined payload so it's easy to wire
    // up an API route or email service later.
    console.log("Contact form submission:", { service, budget, ...fields });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="instant_contact_form">
        <div className="form_success_state">
          <CircleCheck size={48} color="var(--bs-primary)" />
          <h3>Thanks, {fields.name.split(" ")[0] || "there"}!</h3>
          <p className="mb-0">
            We&apos;ve got your request and will get back to you shortly to discuss your project.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="instant_contact_form">
      <div className="small_title">
        <MailOpen size={16} /> Let&apos;s Connect!
      </div>
      <h3 className="form_title">
        Send us a message, and we&apos;ll promptly discuss your project with you.
      </h3>

      <div className="step_progress">
        {[1, 2, 3].map((n) => (
          <span key={n} className={step === n ? "is_active" : step > n ? "is_complete" : ""} />
        ))}
      </div>

      {step === 1 && (
        <div>
          <p className="step_heading">What are you looking to build?</p>
          <div className="option_cards_grid">
            {serviceOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`option_card ${service === option ? "is_selected" : ""}`}
                onClick={() => setService(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="step_actions">
            <span />
            <button
              className="btn btn-primary"
              type="button"
              disabled={!service}
              onClick={() => setStep(2)}
            >
              <span className="btn_label" data-text="Continue">
                Continue
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="step_heading">What&apos;s your estimated budget?</p>
          <div className="budget_slider_block">
            <div className="budget_slider_value">${budget.toLocaleString()}</div>
            <input
              type="range"
              min={BUDGET_MIN}
              max={BUDGET_MAX}
              step={20}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="budget_slider_labels">
              <span>${BUDGET_MIN.toLocaleString()}</span>
              <span>${BUDGET_MAX.toLocaleString()}</span>
            </div>
          </div>
          <div className="step_actions">
            <button className="step_back_btn" type="button" onClick={() => setStep(1)}>
              &larr; Back
            </button>
            <button className="btn btn-primary" type="button" onClick={() => setStep(3)}>
              <span className="btn_label" data-text="Continue">
                Continue
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_name">
                <User size={16} />
              </label>
              <input
                className="form-control"
                id="input_name"
                name="name"
                placeholder="Your Name"
                required
                type="text"
                value={fields.name}
                onChange={updateField("name")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                <Mail size={16} />
              </label>
              <input
                className="form-control"
                id="input_email"
                name="email"
                placeholder="Your Email"
                required
                type="email"
                value={fields.email}
                onChange={updateField("email")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                <Phone size={16} />
              </label>
              <input
                className="form-control"
                id="input_phone"
                name="phone"
                placeholder="Your Phone No."
                type="tel"
                value={fields.phone}
                onChange={updateField("phone")}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">
                <Globe size={16} />
              </label>
              <input
                className="form-control"
                id="input_company"
                name="companyname"
                placeholder="Your Company Name"
                type="text"
                value={fields.company}
                onChange={updateField("company")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                <MessageCircle size={16} />
              </label>
              <textarea
                className="form-control"
                id="input_textarea"
                name="message"
                placeholder="How can we help you?"
                value={fields.message}
                onChange={updateField("message")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="step_actions">
              <button className="step_back_btn" type="button" onClick={() => setStep(2)}>
                &larr; Back
              </button>
              <button className="btn btn-primary" type="submit">
                <span className="btn_label" data-text="Send Request">
                  Send Request
                </span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
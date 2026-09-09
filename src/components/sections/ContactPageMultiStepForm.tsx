"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

const serviceOptions = ["Web App", "Mobile App", "Design / Branding", "Automation / AI"];

const BUDGET_MIN = 20;
const BUDGET_MAX = 10000;

/**
 * 3-step version of the /contact page's form (service type → budget
 * slider → the original Full Name/Email/Phone/Message fields), same
 * pattern as the homepage's `MultiStepContactForm` but matching this
 * page's own markup (`.contact_form`, plain text labels, no company
 * field, "Send Message" button copy) instead of duplicating that
 * component wholesale. Submission is still presentational — no backend
 * wired up, just logs the combined payload and shows a thank-you state.
 */
export default function ContactPageMultiStepForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState(2000);
  const [fields, setFields] = useState({ name: "", email: "", phone: "", message: "" });

  const updateField =
    (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact page form submission:", { service, budget, ...fields });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact_form mb-0">
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
    <div className="contact_form mb-0">
      <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
      <p className="mb-4">Give us a chance to serve and bring magic to your brand.</p>

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
                Full Name
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
                Your Email
              </label>
              <input
                className="form-control"
                id="input_email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
                value={fields.email}
                onChange={updateField("email")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                Your Phone
              </label>
              <input
                className="form-control"
                id="input_phone"
                name="phone"
                placeholder="+92 300 1234567"
                type="tel"
                value={fields.phone}
                onChange={updateField("phone")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                Message
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
            <div className="step_actions">
              <button className="step_back_btn" type="button" onClick={() => setStep(2)}>
                &larr; Back
              </button>
              <button className="btn btn-primary" type="submit">
                <span className="btn_label" data-text="Send Message">
                  Send Message
                </span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
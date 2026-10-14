"use client";

import { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "corporate",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "corporate",
      message: "",
      consent: false,
    });
  };

  if (submitted) {
    return (
      <div className="p-8 bg-white border border-[#e2e2e2] text-center animate-fade-in-up">
        <div className="w-12 h-12 bg-[#001128] text-[#c5a059] flex items-center justify-center font-display-md text-2xl mx-auto mb-4 border border-[#c5a059]">
          ✓
        </div>
        <h3 className="font-headline-lg text-2xl text-[#001128] mb-2">
          Demo Enquiry Received
        </h3>
        <p className="font-body-md text-sm text-[#44474d] mb-4 leading-relaxed">
          Thank you, <span className="font-bold text-[#001128]">{formData.name}</span>. This demo enquiry has been logged locally (Ref: <code className="font-mono text-xs bg-[#f3f3f4] px-1 py-0.5">ENQ-LON-9031</code>).
        </p>
        <p className="text-xs text-[#75777e] mb-6">
          This is a frontend demonstration. In an active production environment, your enquiry would be securely routed to the senior partner in charge of {formData.category}.
        </p>
        <Button onClick={handleReset} variant="outline" size="sm">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white border border-[#e2e2e2] space-y-4 shadow-sm animate-fade-in">
      <div className="mb-4">
        <h3 className="font-headline-lg text-xl text-[#001128] mb-1">
          Initiate Direct Chambers Enquiry
        </h3>
        <p className="text-xs text-[#75777e]">
          Please complete the fields below. Demo submissions are processed locally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="Lord / Lady / Mr / Ms..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
            Corporate Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="counsel@enterprise.co.uk"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
            Telephone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+44 (0)20 ..."
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
          />
        </div>
        <div>
          <label htmlFor="contact-category" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
            Enquiry Category *
          </label>
          <select
            id="contact-category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
          >
            <option value="corporate">Corporate &amp; Commercial</option>
            <option value="dispute">Dispute Resolution</option>
            <option value="wealth">Private Wealth &amp; Trust</option>
            <option value="realestate">Real Estate &amp; Heritage</option>
            <option value="regulatory">Regulatory Compliance</option>
            <option value="employment">Executive Employment</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
          Matter Overview &amp; Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          placeholder="Summary of statutory, transactional, or dispute requirements..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="contact-consent"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 accent-[#001128]"
          required
        />
        <label htmlFor="contact-consent" className="text-[11px] text-[#44474d] leading-snug cursor-pointer">
          I acknowledge that this is a <strong>frontend demo application</strong> and that no confidential solicitor-client retainer is formed by submitting this message.
        </label>
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full">
        Submit Direct Enquiry
      </Button>
    </form>
  );
}

"use client";

import { useState } from "react";
import Button from "../ui/Button";

const PRACTICE_AREAS = [
  { id: "corporate", label: "Corporate & Commercial", desc: "M&A, cross-border restructuring, equity" },
  { id: "dispute", label: "Dispute Resolution", desc: "Arbitration, High Court litigation, civil fraud" },
  { id: "wealth", label: "Private Wealth & Trust", desc: "Family office, succession, dynastic tax advisory" },
  { id: "realestate", label: "Real Estate Law", desc: "Commercial acquisitions, planning, landed estates" },
  { id: "regulatory", label: "Regulatory Compliance", desc: "FCA inquiries, sanctions, financial crime" },
  { id: "employment", label: "Executive Advocacy", desc: "C-suite departures, restrictive covenants, LTIPs" },
];

const FORMATS = [
  { id: "chambers", label: "London Chambers (Inner Temple)", desc: "Confidential in-person session in private consultation rooms" },
  { id: "video", label: "Secure Video Conference", desc: "End-to-end encrypted briefing via dedicated legal portal" },
  { id: "geneva", label: "Geneva Desk Consultation", desc: "Private wealth advisory at Rue du Rhône chambers" },
  { id: "phone", label: "Confidential Telephone Call", desc: "Direct dialogue with senior partner or appointed King's Counsel" },
];

const URGENCIES = [
  { id: "immediate", label: "Immediate (Within 24–48 Hours)", desc: "Injunction threats, critical deadlines, imminent regulatory actions" },
  { id: "week", label: "Within 7 Days", desc: "Ongoing transactions, impending contract execution, dispute review" },
  { id: "flexible", label: "Flexible / Strategic Review", desc: "General governance restructuring, dynastic wealth succession planning" },
];

export default function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    practiceArea: "corporate",
    format: "chambers",
    urgency: "week",
    fullName: "",
    title: "",
    organization: "",
    email: "",
    phone: "",
    notes: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg("");
  };

  const handleNext = () => {
    if (currentStep === 4) {
      if (!formData.fullName.trim()) {
        setErrorMsg("Please provide your full name.");
        return;
      }
      if (!formData.email.trim() || !formData.email.includes("@")) {
        setErrorMsg("Please provide a valid corporate email address.");
        return;
      }
      if (!formData.consent) {
        setErrorMsg("Please confirm your acknowledgment of the demo notice.");
        return;
      }
      setSubmitted(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setErrorMsg("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      practiceArea: "corporate",
      format: "chambers",
      urgency: "week",
      fullName: "",
      title: "",
      organization: "",
      email: "",
      phone: "",
      notes: "",
      consent: false,
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Demo Notice Banner */}
      <div className="mb-8 p-4 bg-[#14263f] text-[#c5d4ea] border border-[#c5a059]/40 text-xs leading-relaxed">
        <p className="font-semibold text-[#e8c178] uppercase tracking-wider mb-1 flex items-center gap-2">
          <span>ℹ️</span> Frontend Demo Notice
        </p>
        <p>
          This consultation intake form is an interactive, non-functional frontend demonstration. Submissions are processed locally in your browser for demonstration purposes and no actual solicitor-client relationship is created.
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="grid grid-cols-4 gap-2 mb-8" aria-label="Form Progress">
        {[
          { num: 1, title: "01. Matter" },
          { num: 2, title: "02. Format" },
          { num: 3, title: "03. Timing" },
          { num: 4, title: "04. Identity" },
        ].map((step) => {
          const isCurrent = currentStep === step.num;
          const isDone = currentStep > step.num;
          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setCurrentStep(step.num)}
              className="flex flex-col items-center cursor-pointer text-left focus:outline-none"
            >
              <div
                className={`w-full h-1.5 transition-colors duration-200 mb-2 ${
                  isCurrent
                    ? "bg-[#c5a059]"
                    : isDone
                    ? "bg-[#001128]"
                    : "bg-[#e2e2e2]"
                }`}
              />
              <span
                className={`text-[10px] font-label-sm uppercase tracking-wider ${
                  isCurrent
                    ? "text-[#001128] font-bold"
                    : isDone
                    ? "text-[#775a1b]"
                    : "text-[#75777e]"
                }`}
              >
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Form Card Container */}
      <div className="bg-white border border-[#e2e2e2] p-8 md:p-12 shadow-sm relative">
        {submitted ? (
          /* Confirmation State */
          <div className="text-center py-6 animate-fade-in-up">
            <div className="w-16 h-16 bg-[#001128] text-[#c5a059] flex items-center justify-center font-display-md text-3xl mx-auto mb-6 border border-[#c5a059]">
              ✓
            </div>
            <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-2">
              Confidential Intake Received
            </div>
            <h3 className="font-display-md text-3xl text-[#001128] mb-4">
              Demo Request Logged
            </h3>
            <p className="font-body-md text-sm text-[#44474d] max-w-lg mx-auto mb-6 leading-relaxed">
              In a production system, an encrypted allocation brief would now be transmitted to the managing partner of the selected division. Below is a summary of your simulated submission:
            </p>

            <div className="bg-[#f7f5f0] border border-[#e2e2e2] p-6 text-left max-w-lg mx-auto mb-8 space-y-3 text-xs">
              <div className="flex justify-between border-b border-[#001128]/10 pb-2">
                <span className="text-[#75777e] uppercase font-label-sm">Reference Code:</span>
                <span className="font-mono font-bold text-[#001128]">DEMO-STR-8492</span>
              </div>
              <div className="flex justify-between border-b border-[#001128]/10 pb-2">
                <span className="text-[#75777e] uppercase font-label-sm">Primary Discipline:</span>
                <span className="font-semibold text-[#001128]">
                  {PRACTICE_AREAS.find((p) => p.id === formData.practiceArea)?.label}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#001128]/10 pb-2">
                <span className="text-[#75777e] uppercase font-label-sm">Requested Format:</span>
                <span className="font-semibold text-[#001128]">
                  {FORMATS.find((f) => f.id === formData.format)?.label}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#001128]/10 pb-2">
                <span className="text-[#75777e] uppercase font-label-sm">Client Name:</span>
                <span className="font-semibold text-[#001128]">{formData.fullName || "Lord / Ms / Counsel"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#75777e] uppercase font-label-sm">Corporate Contact:</span>
                <span className="font-semibold text-[#001128]">{formData.email}</span>
              </div>
            </div>

            <Button onClick={handleReset} variant="primary" size="md">
              Submit Another Demo Request
            </Button>
          </div>
        ) : (
          <form
            key={currentStep}
            className="animate-fade-in"
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            {/* Step 1: Practice Area */}
            {currentStep === 1 && (
              <div>
                <div className="mb-6">
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-1">
                    Step 01
                  </div>
                  <h3 className="font-display-md text-2xl text-[#001128] mb-2">
                    Select Practice Discipline &amp; Nature of Matter
                  </h3>
                  <p className="font-body-md text-xs text-[#75777e]">
                    Directing your inquiry to the appropriate King&apos;s Counsel or senior practice partner.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {PRACTICE_AREAS.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start p-4 border transition-colors cursor-pointer select-none ${
                        formData.practiceArea === item.id
                          ? "bg-[#001128] text-white border-[#001128]"
                          : "bg-white text-[#1a1c1c] border-[#e2e2e2] hover:bg-[#f3f3f4]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="practiceArea"
                        value={item.id}
                        checked={formData.practiceArea === item.id}
                        onChange={(e) => handleChange("practiceArea", e.target.value)}
                        className="mt-1 mr-3 accent-[#c5a059]"
                      />
                      <div>
                        <div className="font-headline-sm text-sm font-semibold mb-1">
                          {item.label}
                        </div>
                        <div
                          className={`text-xs ${
                            formData.practiceArea === item.id
                              ? "text-[#c5d4ea]"
                              : "text-[#75777e]"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Consultation Format */}
            {currentStep === 2 && (
              <div>
                <div className="mb-6">
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-1">
                    Step 02
                  </div>
                  <h3 className="font-display-md text-2xl text-[#001128] mb-2">
                    Preferred Consultation Setting
                  </h3>
                  <p className="font-body-md text-xs text-[#75777e]">
                    Select whether you require in-person attendance at our Inner Temple chambers or secure encrypted remote dialogue.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {FORMATS.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start p-4 border transition-colors cursor-pointer select-none ${
                        formData.format === item.id
                          ? "bg-[#001128] text-white border-[#001128]"
                          : "bg-white text-[#1a1c1c] border-[#e2e2e2] hover:bg-[#f3f3f4]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        value={item.id}
                        checked={formData.format === item.id}
                        onChange={(e) => handleChange("format", e.target.value)}
                        className="mt-1 mr-3 accent-[#c5a059]"
                      />
                      <div>
                        <div className="font-headline-sm text-sm font-semibold mb-1">
                          {item.label}
                        </div>
                        <div
                          className={`text-xs ${
                            formData.format === item.id
                              ? "text-[#c5d4ea]"
                              : "text-[#75777e]"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Timing & Urgency */}
            {currentStep === 3 && (
              <div>
                <div className="mb-6">
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-1">
                    Step 03
                  </div>
                  <h3 className="font-display-md text-2xl text-[#001128] mb-2">
                    Matter Urgency &amp; Timeline
                  </h3>
                  <p className="font-body-md text-xs text-[#75777e]">
                    Indicate if this mandate involves urgent judicial injunctions or statutory deadlines.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {URGENCIES.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-start p-4 border transition-colors cursor-pointer select-none ${
                        formData.urgency === item.id
                          ? "bg-[#001128] text-white border-[#001128]"
                          : "bg-white text-[#1a1c1c] border-[#e2e2e2] hover:bg-[#f3f3f4]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={item.id}
                        checked={formData.urgency === item.id}
                        onChange={(e) => handleChange("urgency", e.target.value)}
                        className="mt-1 mr-3 accent-[#c5a059]"
                      />
                      <div>
                        <div className="font-headline-sm text-sm font-semibold mb-1">
                          {item.label}
                        </div>
                        <div
                          className={`text-xs ${
                            formData.urgency === item.id
                              ? "text-[#c5d4ea]"
                              : "text-[#75777e]"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact & Identity */}
            {currentStep === 4 && (
              <div>
                <div className="mb-6">
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-1">
                    Step 04
                  </div>
                  <h3 className="font-display-md text-2xl text-[#001128] mb-2">
                    Client &amp; Corporate Identity
                  </h3>
                  <p className="font-body-md text-xs text-[#75777e]">
                    All submissions are processed under strict client confidentiality protocols.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="consultation-name" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
                        Full Name &amp; Title *
                      </label>
                      <input
                        id="consultation-name"
                        type="text"
                        placeholder="e.g. Lord Sterling / Dr. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="consultation-org" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
                        Corporate Organization
                      </label>
                      <input
                        id="consultation-org"
                        type="text"
                        placeholder="Enterprise / Holding Co."
                        value={formData.organization}
                        onChange={(e) => handleChange("organization", e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="consultation-email" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        id="consultation-email"
                        type="email"
                        placeholder="counsel@enterprise.co.uk"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="consultation-phone" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
                        Direct Telephone
                      </label>
                      <input
                        id="consultation-phone"
                        type="tel"
                        placeholder="+44 (0)20 ..."
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consultation-notes" className="block text-[11px] font-label-md uppercase tracking-wider text-[#44474d] mb-1">
                      Brief Matter Overview (Optional)
                    </label>
                    <textarea
                      id="consultation-notes"
                      rows={3}
                      placeholder="High-level nature of commercial mandate or jurisdiction..."
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#f9f9f9] border border-[#e2e2e2] focus:outline-none focus:border-[#001128]"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => handleChange("consent", e.target.checked)}
                      className="mt-1 accent-[#001128]"
                      required
                    />
                    <label htmlFor="consent" className="text-[11px] text-[#44474d] leading-snug cursor-pointer">
                      I understand that this is a <strong>frontend portfolio demonstration</strong> and that no legal privilege or solicitor-client retainer is created by submitting this form.
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs mb-6">
                {errorMsg}
              </div>
            )}

            {/* Step Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-[#001128]/10">
              {currentStep > 1 ? (
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  size="md"
                >
                  &larr; Previous Step
                </Button>
              ) : (
                <div />
              )}

              <Button
                type="submit"
                variant={currentStep === 4 ? "gold" : "primary"}
                size="md"
              >
                {currentStep === 4 ? "Submit Demo Intake" : "Continue to Next Step &rarr;"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

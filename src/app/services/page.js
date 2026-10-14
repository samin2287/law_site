import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Legal Services & Practice Disciplines",
  description:
    "Comprehensive legal expertise across Corporate & Commercial Law, Dispute Resolution, Private Wealth, Real Estate, Regulatory Compliance, and Executive Employment.",
};

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Editorial Hero */}
      <section className="py-20 lg:py-24 bg-[#001128] text-white overflow-hidden">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6 animate-fade-in-up animation-delay-100">
              <span className="w-1.5 h-1.5 bg-[#c5a059]" />
              Sterling Practice Disciplines
            </div>

            <h1 className="font-display-lg text-white mb-6 animate-fade-in-up animation-delay-200">
              Comprehensive Legal Expertise for Complex Enterprise &amp; Private Wealth
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
              Combining uncompromising intellectual rigor with bespoke strategic counsel. We guide multinational corporations, financial institutions, and distinguished private clients through their most demanding legal challenges.
            </p>

            {/* Quick jump anchor tags */}
            <div className="flex flex-wrap gap-2 pt-2 animate-fade-in-up animation-delay-400">
              {servicesData.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="px-3 py-1.5 bg-[#14263f] text-[#c5d4ea] hover:bg-[#c5a059] hover:text-[#001128] text-[11px] font-label-md uppercase tracking-wider transition-all duration-200 hover:-translate-y-[1px] border border-white/10"
                >
                  {service.title.split("&")[0]}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Practice Disciplines Deep Dive */}
      <section className="py-20 lg:py-24 bg-[#f7f5f0] overflow-hidden">
        <Container>
          <div className="space-y-16">
            {servicesData.map((service) => (
              <ScrollReveal key={service.slug}>
                <div
                  id={service.slug}
                  className="scroll-mt-28 bg-white border border-[#e2e2e2] p-8 lg:p-12 shadow-sm hover:border-[#c5a059]/60 hover:shadow-md transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Title & Metrics */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2 text-[#775a1b] mb-2">
                          <span className="font-label-md uppercase tracking-widest text-xs font-bold">
                            Division {service.number}
                          </span>
                        </div>

                        <h2 className="font-display-md text-2xl lg:text-3xl text-[#001128] mb-4">
                          {service.title}
                        </h2>

                        <p className="font-body-md text-sm text-[#44474d] leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Metrics Box */}
                      <div className="p-5 bg-[#f3f3f4] border-l-2 border-[#775a1b] mb-6">
                        <div className="text-[10px] font-label-sm uppercase tracking-wider text-[#75777e] mb-2 font-bold">
                          Representative Metrics
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {service.metrics.slice(0, 2).map((m, idx) => (
                            <div key={idx}>
                              <div className="font-display-md text-2xl text-[#775a1b]">
                                {m.value}
                              </div>
                              <div className="text-[10px] font-label-sm uppercase tracking-wider text-[#44474d]">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Button href={`/services/${service.slug}`} variant="primary" size="md">
                          View Practice Detail &rarr;
                        </Button>
                        <Button href="/consultation" variant="outline" size="md">
                          Inquire
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Typical Matters & Core Pillars */}
                    <div className="lg:col-span-7 bg-[#f9f9f9] p-6 lg:p-8 border border-[#e2e2e2]">
                      <h3 className="font-headline-sm text-base text-[#001128] mb-4 uppercase tracking-wider font-bold">
                        Typical Mandates &amp; Matters Handled
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {service.typicalMatters.map((matter, idx) => (
                          <li key={idx} className="flex items-start gap-3 font-body-md text-xs sm:text-sm text-[#44474d]">
                            <span className="text-[#775a1b] font-bold mt-0.5">•</span>
                            <span>{matter}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-headline-sm text-sm text-[#001128] mb-3 uppercase tracking-wider font-bold">
                        Core Sub-Disciplines
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.pillars.map((pillar, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-white border border-[#e2e2e2] hover:border-[#c5a059] transition-colors duration-200"
                          >
                            <h5 className="font-headline-sm text-xs font-bold text-[#001128] mb-1">
                              {pillar.title}
                            </h5>
                            <p className="font-body-md text-[11px] text-[#75777e] leading-snug">
                              {pillar.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-[#001128] text-white text-center">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display-md text-3xl text-white mb-4">
              Custom Advisory Tailored to Your Matter
            </h2>
            <p className="font-body-lg text-sm text-[#c5d4ea] mb-8">
              Consult directly with our specialist division leaders to assess statutory positioning and tactical roadmaps.
            </p>
            <Button href="/consultation" variant="gold" size="lg">
              Schedule a Confidential Consultation
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}

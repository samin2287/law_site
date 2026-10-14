import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { firmData } from "@/data/firmData";

export const metadata = {
  title: "Our Firm • Independent Legal Counsel",
  description:
    "Established in 1894, Sterling & Associates provides partner-led advocacy, uncompromising intellectual rigor, and absolute discretion in London and worldwide.",
};

export default function OurFirmPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Editorial Hero */}
      <section className="relative w-full py-20 lg:py-28 bg-[#001128] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6 animate-fade-in-up animation-delay-100">
              <span className="w-1.5 h-1.5 bg-[#c5a059]" />
              Established 1894 • London
            </div>

            <h1 className="font-display-lg text-white mb-6 animate-fade-in-up animation-delay-200">
              A Legacy of Rigorous Counsel &amp; Distinguished Representation
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
              For over a century, Sterling &amp; Associates has stood as a bulwark of legal excellence, protecting the interests of sovereigns, multinational corporations, and private families across global jurisdictions.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Button href="/consultation" variant="gold" size="md">
                Request Private Consultation
              </Button>
              <Button href="/our-people" variant="outline-light" size="md">
                Meet Our Partners
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Tenets */}
      <section className="py-20 lg:py-24 bg-[#f7f5f0] overflow-hidden">
        <Container>
          <ScrollReveal>
            <SectionHeader
              kicker="Our Core Tenets"
              title="The Pillars of Our Practice"
              subtitle="The foundational principles governing every brief, inquiry, and courtroom appearance undertaken by our chambers."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmData.tenets.map((tenet, idx) => (
              <ScrollReveal key={tenet.number} delay={idx * 100}>
                <Card
                  variant="white"
                  className="h-full flex flex-col justify-between border-t-2 border-t-[#775a1b]"
                >
                  <div>
                    <span className="text-[12px] font-label-md font-bold text-[#775a1b] mb-4 block">
                      {tenet.number}
                    </span>
                    <h3 className="font-headline-lg text-2xl text-[#001128] mb-3">
                      {tenet.title}
                    </h3>
                    <p className="font-body-md text-sm text-[#44474d] leading-relaxed">
                      {tenet.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#001128]/10 text-[10px] font-label-sm uppercase tracking-wider text-[#75777e]">
                    {tenet.tag}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Model */}
      <section className="py-20 lg:py-24 bg-[#f3f3f4] border-y border-[#001128]/5 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-6">
              <SectionHeader
                kicker="Partnership Model"
                title="Direct Partner Access, Zero Delegation"
                subtitle="We firmly reject the leverage model of modern mega-firms where clients pay senior partner rates only to have their matters delegated down to junior trainees."
                className="mb-6"
              />
              <p className="font-body-md text-sm text-[#44474d] leading-relaxed mb-6">
                At Sterling &amp; Associates, senior counsel actively crafts every brief, conducts every high-value negotiation, and leads trial advocacy. Clients maintain direct telephone and encrypted communications access with their assigned partner at all times.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#001128]/10">
                <div>
                  <div className="font-display-md text-3xl text-[#775a1b]">100%</div>
                  <div className="text-xs font-label-sm uppercase tracking-wider text-[#75777e]">
                    Partner-Led Mandates
                  </div>
                </div>
                <div>
                  <div className="font-display-md text-3xl text-[#775a1b]">35+</div>
                  <div className="text-xs font-label-sm uppercase tracking-wider text-[#75777e]">
                    Years Avg. Partner Experience
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-6">
              <div
                className="w-full h-96 bg-cover bg-center shadow-md border border-[#001128]/10 relative group overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUbNGWZnYCl_x6ve1iX4TqL43-4ajNyaA9bPLbgvyEBW4JvlKR1IOdgGnyAHFHjVlRYU8xH-VOPq6iolZKV_Kf9cxT1elpLpILTZta2ZoNRqXlLbpC9PkJ_M1s0zJWh5JcAszzIg6ssEJKdJ_0_f5JQGinwrJPaxfutXyos1mczAY_gxt23zlZzAkrsGb__Bz9TzYjdFDpcx04qQmbJzNxBiHsWwgH_B3LMnuCX_pxs_YRpaH5ZUmA')"
                }}
              />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Historical Timeline */}
      <section className="py-20 lg:py-24 bg-[#f7f5f0] overflow-hidden">
        <Container>
          <ScrollReveal>
            <SectionHeader
              kicker="Heritage & Milestones"
              title="Over 130 Years of Legal Stewardship"
              subtitle="From Victorian Fleet Street to modern appellate advocacy across the globe."
              align="center"
            />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {firmData.timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 80}>
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-[#e2e2e2] hover:border-[#c5a059] transition-all duration-300 hover:shadow-sm">
                  <div className="md:w-32 shrink-0">
                    <span className="font-display-md text-3xl text-[#775a1b]">
                      {item.year}
                    </span>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-[#001128]/10 pt-4 md:pt-0 md:pl-6 flex-1">
                    <h4 className="font-headline-md text-lg text-[#001128] mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body-md text-sm text-[#44474d] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation Bottom CTA */}
      <section className="py-16 bg-[#001128] text-white text-center">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display-md text-3xl text-white mb-4">
              Discuss Your Legal Requirements
            </h2>
            <p className="font-body-lg text-sm text-[#c5d4ea] mb-8">
              Our London chambers and international desks are available for discreet, confidential consultation.
            </p>
            <Button href="/consultation" variant="gold" size="lg">
              Arrange a Confidential Consultation
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}

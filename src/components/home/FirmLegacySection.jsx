import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import { firmData } from "@/data/firmData";

export default function FirmLegacySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0] overflow-hidden">
      <Container>
        {/* Top Split: Philosophy & Partner-Led Access */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <ScrollReveal className="lg:col-span-6">
            <SectionHeader
              kicker="Partnership Model"
              title="Partner-Led Engagement, Zero Delegation of Oversight"
              subtitle="Unlike institutional conglomerates that delegate critical matters to junior associates, Sterling & Associates operates on a direct-access partnership model. Every client enjoys immediate, unmediated access to senior counsel."
              className="mb-6"
            />
            <ul className="space-y-4 font-body-md text-sm text-[#1a1c1c] mb-8">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#775a1b]/10 text-[#775a1b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Dedicated Senior Counsel:</strong> A named partner is assigned as the sole point of strategy and strategic accountability.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#775a1b]/10 text-[#775a1b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Transparent Commercial Terms:</strong> Predictable, value-aligned fee structures free of hidden disbursement markups.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#775a1b]/10 text-[#775a1b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Confidentiality Architecture:</strong> Strict protocols protecting sensitive commercial, diplomatic, and private matters.
                </span>
              </li>
            </ul>
            <Button href="/our-firm" variant="primary" size="md">
              Learn About Our Firm &rarr;
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={150} className="lg:col-span-6 relative">
            <div className="w-full h-[400px] lg:h-[480px] shadow-lg relative border border-[#001128]/10 group overflow-hidden bg-[#001128]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUbNGWZnYCl_x6ve1iX4TqL43-4ajNyaA9bPLbgvyEBW4JvlKR1IOdgGnyAHFHjVlRYU8xH-VOPq6iolZKV_Kf9cxT1elpLpILTZta2ZoNRqXlLbpC9PkJ_M1s0zJWh5JcAszzIg6ssEJKdJ_0_f5JQGinwrJPaxfutXyos1mczAY_gxt23zlZzAkrsGb__Bz9TzYjdFDpcx04qQmbJzNxBiHsWwgH_B3LMnuCX_pxs_YRpaH5ZUmA"
                alt="Historic Inner Temple Chambers Established 1894"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001128]/85 via-[#001128]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#001128]/95 border border-[#c5a059]/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-2px] z-10">
                <div className="font-display-md text-2xl text-[#e8c178] mb-1">
                  Established 1894
                </div>
                <p className="font-body-md text-xs text-[#c5d4ea]">
                  Over a century of steadfast legal representation in London&apos;s historic legal quarters.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* The 3-Stage Process: Understand, Advise, Act */}
        <div className="border-t border-[#001128]/10 pt-16">
          <ScrollReveal>
            <SectionHeader
              kicker="Methodology"
              title="The Sterling Counsel Process"
              subtitle="A disciplined three-stage framework designed to convert complex legal ambiguity into decisive strategic advantage."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {firmData.processStages.map((stage, idx) => (
              <ScrollReveal key={stage.numeral} delay={idx * 120}>
                <Card
                  variant="white"
                  className="h-full flex flex-col justify-between border-t-2 border-t-[#775a1b]"
                >
                  <div>
                    <div className="font-display-md text-3xl text-[#775a1b] mb-4">
                      {stage.numeral}
                    </div>
                    <h3 className="font-headline-md text-xl text-[#001128] mb-3">
                      {stage.name}
                    </h3>
                    <p className="font-body-md text-sm text-[#44474d] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#001128]/10 text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold">
                    {stage.stage}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

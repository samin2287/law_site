import Link from "next/link";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import { servicesData } from "@/data/servicesData";

export default function PracticePillarsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f3f3f4] border-b border-[#001128]/5 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="Practice Disciplines"
              title="Comprehensive Legal Acumen for Complex Mandates"
              subtitle="Combining uncompromising intellectual rigor with bespoke strategic counsel across enterprise, litigation, and private wealth."
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Button href="/services" variant="outline" size="md">
                View All Practice Areas &rarr;
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Practice Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.slice(0, 6).map((service, idx) => (
            <ScrollReveal key={service.slug} delay={idx * 80}>
              <Card
                variant="white"
                className="h-full flex flex-col justify-between group relative"
              >
                {/* Top Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#c5a059] transition-all duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-label-md font-bold text-[#775a1b]">
                      Division {service.number}
                    </span>
                    <span className="text-[10px] font-label-sm uppercase tracking-wider text-[#75777e] bg-[#f3f3f4] px-2 py-0.5">
                      {service.metrics[0].value}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl text-[#001128] mb-3 group-hover:text-[#775a1b] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body-md text-sm text-[#44474d] mb-6 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#001128]/10 flex items-center justify-between">
                  <span className="text-[11px] font-label-sm uppercase tracking-wider text-[#75777e]">
                    {service.pillars.length} Core Disciplines
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[11px] font-label-md uppercase tracking-wider text-[#001128] group-hover:text-[#775a1b] font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    Explore Area &rarr;
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

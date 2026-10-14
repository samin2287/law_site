import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import ScrollReveal from "../ui/ScrollReveal";
import { teamData } from "@/data/teamData";

export default function FeaturedLawyersSection() {
  const featuredTeam = teamData.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#001128] text-white overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="Distinguished Counsel"
              title="Senior Partners & Leading Advocates"
              subtitle="Advocacy honed through decades of high-stakes litigation, corporate structuring, and appellate proceedings."
              dark
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Button href="/our-people" variant="outline-gold" size="md">
                View All Practitioners &rarr;
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTeam.map((lawyer, idx) => (
            <ScrollReveal key={lawyer.slug} delay={idx * 100}>
              <Card
                variant="navyContainer"
                className="h-full p-0 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059]"
              >
                <div>
                  {/* Lawyer Portrait with smooth zoom */}
                  <div className="w-full h-80 overflow-hidden relative bg-[#001128]">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <Badge variant="navy" className="bg-[#001128]/90 text-[#e8c178] border-[#c5a059]/40">
                        {lawyer.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#e8c178] mb-1">
                      {lawyer.division}
                    </div>
                    <h3 className="font-headline-md text-xl text-white mb-2 group-hover:text-[#e8c178] transition-colors">
                      {lawyer.name}
                    </h3>
                    <p className="font-body-md text-xs text-[#c5d4ea] leading-relaxed line-clamp-3 mb-4">
                      {lawyer.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {lawyer.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-label-sm uppercase tracking-wider px-2 py-0.5 bg-[#001128] text-[#c5d4ea] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-body-sm text-[#c5d4ea]/70">
                    {lawyer.phone}
                  </span>
                  <Link
                    href={`/our-people/${lawyer.slug}`}
                    className="text-[11px] font-label-md uppercase tracking-wider text-[#e8c178] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    View Profile &rarr;
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

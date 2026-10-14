import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { servicesData } from "@/data/servicesData";
import { teamData } from "@/data/teamData";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const leadCounsel = teamData.find((t) => t.slug === service.leadCounselSlug);

  return (
    <div className="w-full flex flex-col">
      {/* Editorial Header */}
      <section className="py-20 lg:py-24 bg-[#001128] text-white overflow-hidden">
        <Container>
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-label-sm uppercase tracking-wider text-[#c5d4ea] mb-8 animate-fade-in">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#e8c178]">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6 animate-fade-in-up animation-delay-100">
              <span className="w-1.5 h-1.5 bg-[#c5a059]" />
              Practice Discipline {service.number}
            </div>

            <h1 className="font-display-lg text-white mb-6 animate-fade-in-up animation-delay-200">
              {service.title}
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
              {service.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Button href="/consultation" variant="gold" size="md">
                Retain Practice Counsel
              </Button>
              <Button href="/contact" variant="outline-light" size="md">
                Direct Chambers Inquiry
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Split */}
      <section className="py-20 lg:py-24 bg-[#f7f5f0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left 8 Cols: Overview, Pillars & Typical Matters */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionHeader
                  kicker="Strategic Advisory"
                  title="Practice Overview & Scope"
                  className="mb-6"
                />
                <p className="font-body-lg text-base text-[#44474d] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Pillars Grid */}
              <div>
                <h3 className="font-headline-lg text-xl text-[#001128] mb-6 border-b border-[#001128]/10 pb-3">
                  Core Sub-Disciplines &amp; Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.pillars.map((pillar, idx) => (
                    <Card key={idx} variant="white">
                      <div className="text-xs font-label-md uppercase tracking-wider text-[#775a1b] mb-2 font-bold">
                        Capability 0{idx + 1}
                      </div>
                      <h4 className="font-headline-sm text-base text-[#001128] mb-2 font-semibold">
                        {pillar.title}
                      </h4>
                      <p className="font-body-md text-xs text-[#44474d] leading-relaxed">
                        {pillar.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Typical Matters */}
              <div>
                <h3 className="font-headline-lg text-xl text-[#001128] mb-6 border-b border-[#001128]/10 pb-3">
                  Representative Mandates
                </h3>
                <div className="bg-white border border-[#e2e2e2] p-6 lg:p-8 space-y-4">
                  {service.typicalMatters.map((matter, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-[#001128]/5 last:border-0 last:pb-0">
                      <span className="w-6 h-6 bg-[#775a1b]/10 text-[#775a1b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="font-body-md text-sm text-[#44474d] leading-relaxed">
                        {matter}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Metrics & Lead Counsel Card */}
            <div className="lg:col-span-4 space-y-8">
              {/* Representative Metrics Card */}
              <div className="bg-[#001128] text-white p-6 border border-[#14263f]">
                <h4 className="text-xs font-label-sm uppercase tracking-widest text-[#e8c178] mb-4">
                  Practice Division Metrics
                </h4>
                <div className="space-y-6">
                  {service.metrics.map((m, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="font-display-md text-3xl text-[#e8c178]">
                        {m.value}
                      </div>
                      <div className="text-xs font-label-sm uppercase tracking-wider text-[#c5d4ea]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Counsel Profile Card */}
              {leadCounsel && (
                <div className="bg-white border border-[#e2e2e2] p-6 shadow-sm">
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] mb-3 font-bold">
                    Division Practice Leader
                  </div>
                  <div className="w-full h-48 overflow-hidden bg-[#001128] mb-4 relative">
                    <Image
                      src={leadCounsel.image}
                      alt={leadCounsel.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover grayscale contrast-125"
                    />
                  </div>
                  <h4 className="font-headline-md text-lg text-[#001128] mb-1">
                    {leadCounsel.name}
                  </h4>
                  <p className="text-xs text-[#75777e] mb-4">
                    {leadCounsel.role}
                  </p>
                  <p className="font-body-md text-xs text-[#44474d] leading-relaxed mb-4 line-clamp-3">
                    {leadCounsel.bio}
                  </p>
                  <Button
                    href={`/our-people/${leadCounsel.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    View Full Profile &rarr;
                  </Button>
                </div>
              )}

              {/* Quick Consultation Trigger */}
              <div className="bg-[#f3f3f4] border border-[#e2e2e2] p-6 text-center">
                <h4 className="font-headline-sm text-base text-[#001128] mb-2 font-bold">
                  Inquire Regarding This Practice
                </h4>
                <p className="font-body-md text-xs text-[#44474d] mb-4">
                  Arrange a confidential intake meeting with our division partners.
                </p>
                <Button href="/consultation" variant="primary" size="md" className="w-full">
                  Request Intake
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

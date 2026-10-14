import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { teamData } from "@/data/teamData";

export async function generateStaticParams() {
  return teamData.map((lawyer) => ({
    slug: lawyer.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lawyer = teamData.find((t) => t.slug === slug);
  if (!lawyer) return { title: "Practitioner Not Found" };

  return {
    title: lawyer.name,
    description: lawyer.bio,
  };
}

export default async function LawyerDetailPage({ params }) {
  const { slug } = await params;
  const lawyer = teamData.find((t) => t.slug === slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#f3f3f4] border-b border-[#001128]/10 py-4">
        <Container>
          <nav className="flex items-center gap-2 text-xs font-label-sm uppercase tracking-wider text-[#75777e] animate-fade-in">
            <Link href="/" className="hover:text-[#001128] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/our-people" className="hover:text-[#001128] transition-colors">
              Our People
            </Link>
            <span>/</span>
            <span className="text-[#001128] font-bold">{lawyer.name}</span>
          </nav>
        </Container>
      </div>

      {/* Practitioner Hero Header */}
      <section className="py-16 lg:py-20 bg-[#f7f5f0] border-b border-[#001128]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-[#e2e2e2] p-8 lg:p-12 shadow-sm animate-fade-in">
            {/* Portrait */}
            <div className="lg:col-span-4">
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#001128] relative shadow-md group">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#001128]/95 p-3 text-white border border-[#c5a059]/40 z-10">
                  <div className="text-[10px] font-label-sm uppercase tracking-wider text-[#e8c178]">
                    {lawyer.badge}
                  </div>
                  <div className="font-headline-sm text-sm text-white">
                    Called to Bar: {lawyer.calledToBar}
                  </div>
                </div>
              </div>
            </div>

            {/* Practitioner Header Info */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-[#14263f] text-[#c5d4ea] text-[10px] font-label-sm uppercase tracking-widest mb-4 w-max">
                {lawyer.role}
              </div>

              <h1 className="font-display-lg text-3xl lg:text-5xl text-[#001128] mb-3">
                {lawyer.name}
              </h1>

              <p className="font-headline-md text-lg text-[#775a1b] italic mb-6">
                &ldquo;{lawyer.quote}&rdquo;
              </p>

              <p className="font-body-lg text-base text-[#44474d] leading-relaxed mb-6">
                {lawyer.bio}
              </p>

              {/* Practice Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {lawyer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#f3f3f4] text-[#001128] text-xs font-label-sm uppercase tracking-wider border border-[#e2e2e2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#001128]/10">
                <Button href="/consultation" variant="primary" size="md">
                  Schedule Consultation
                </Button>
                <a
                  href={`mailto:${lawyer.email}`}
                  className="px-5 py-2.5 text-[12px] font-label-md uppercase tracking-wider text-[#001128] border border-[#001128] hover:bg-[#001128] hover:text-white transition-colors"
                >
                  Direct Secure Email
                </a>
                <span className="text-xs text-[#75777e] pl-2">
                  Tel: <strong className="text-[#001128]">{lawyer.phone}</strong>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Biography, Matters & Qualifications */}
      <section className="py-20 bg-[#f7f5f0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols: Narrative & Notable Matters */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white border border-[#e2e2e2] p-8 lg:p-10 shadow-sm">
                <h2 className="font-headline-lg text-2xl text-[#001128] mb-4 border-b border-[#001128]/10 pb-3">
                  Professional Profile &amp; Practice Overview
                </h2>
                <div className="font-body-lg text-base text-[#44474d] leading-relaxed space-y-4">
                  <p>{lawyer.detailedBio}</p>
                  <p>
                    Known for an unyielding commitment to client sovereignty and discreet crisis management, {lawyer.name} regularly coordinates multi-jurisdictional defense teams and serves as strategic advisor to corporate boards and family office principals.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#e2e2e2] p-8 lg:p-10 shadow-sm">
                <h3 className="font-headline-lg text-2xl text-[#001128] mb-6 border-b border-[#001128]/10 pb-3">
                  Selected Notable Matters
                </h3>
                <div className="space-y-4">
                  {lawyer.notableMatters.map((matter, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-[#001128]/5 last:border-0 last:pb-0">
                      <span className="w-6 h-6 bg-[#775a1b]/10 text-[#775a1b] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="font-body-md text-sm text-[#44474d] leading-relaxed">
                        {matter}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Education & Admissions */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-[#e2e2e2] p-6 shadow-sm">
                <h3 className="font-headline-sm text-base text-[#001128] mb-4 pb-2 border-b border-[#001128]/10 font-bold uppercase tracking-wider">
                  Education &amp; Qualifications
                </h3>
                <ul className="space-y-3 font-body-md text-xs text-[#44474d]">
                  {lawyer.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#775a1b] font-bold">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#e2e2e2] p-6 shadow-sm">
                <h3 className="font-headline-sm text-base text-[#001128] mb-4 pb-2 border-b border-[#001128]/10 font-bold uppercase tracking-wider">
                  Bar Admissions &amp; Fellowships
                </h3>
                <ul className="space-y-3 font-body-md text-xs text-[#44474d]">
                  {lawyer.admissions.map((adm, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#775a1b] font-bold">•</span>
                      <span>{adm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Card */}
              <div className="bg-[#001128] text-white p-6 border border-[#14263f]">
                <h4 className="font-headline-sm text-lg text-[#e8c178] mb-2">
                  Retain Counsel
                </h4>
                <p className="font-body-md text-xs text-[#c5d4ea] mb-6 leading-relaxed">
                  To discuss representation or appointment to an international arbitral tribunal, please request a confidential consultation.
                </p>
                <Button href="/consultation" variant="gold" size="md" className="w-full">
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

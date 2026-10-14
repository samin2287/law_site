import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { insightsData } from "@/data/insightsData";

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return { title: "Publication Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightsData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Header */}
      <div className="bg-[#f3f3f4] border-b border-[#001128]/10 py-4 animate-fade-in">
        <Container>
          <nav className="flex items-center gap-2 text-xs font-label-sm uppercase tracking-wider text-[#75777e]">
            <Link href="/" className="hover:text-[#001128] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-[#001128] transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span className="text-[#001128] font-bold line-clamp-1">
              {article.title}
            </span>
          </nav>
        </Container>
      </div>

      {/* Article Hero */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#001128]/10">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs mb-6 animate-fade-in-up">
            <Badge variant="gold">{article.category}</Badge>
            <span className="text-[#75777e]">•</span>
            <span className="text-[#75777e]">{article.readTime}</span>
            <span className="text-[#75777e]">•</span>
            <span className="text-[#75777e]">{article.date}</span>
          </div>

          <h1 className="font-display-lg text-3xl md:text-5xl text-[#001128] mb-8 leading-tight tracking-tight animate-fade-in-up animation-delay-100">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 py-4 border-y border-[#001128]/10 animate-fade-in-up animation-delay-200">
            <div className="w-10 h-10 bg-[#001128] text-white flex items-center justify-center font-display-md text-sm">
              {article.authorInitials}
            </div>
            <div>
              <p className="font-headline-sm text-sm font-bold text-[#001128]">
                {article.authorName}
              </p>
              <p className="text-xs text-[#75777e]">{article.authorRole}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Editorial Body Content */}
      <section className="py-16 lg:py-20 bg-[#f7f5f0]">
        <Container className="max-w-4xl">
          {/* Cover Imagery */}
          <ScrollReveal>
            <div className="w-full h-80 md:h-[420px] bg-[#001128] mb-12 shadow-sm overflow-hidden group relative">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          {/* Pull Quote Callout */}
          {article.pullQuote && (
            <ScrollReveal delay={50}>
              <div className="my-10 p-6 md:p-8 bg-white border-l-4 border-[#c5a059] shadow-sm">
                <p className="font-display-md text-xl md:text-2xl text-[#001128] italic leading-snug">
                  &ldquo;{article.pullQuote}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* Executive Summary */}
          <ScrollReveal delay={80}>
            <div className="p-6 bg-white border border-[#e2e2e2] mb-10">
              <h3 className="font-label-md text-xs uppercase tracking-widest text-[#775a1b] mb-2 font-bold">
                Executive Briefing Summary
              </h3>
              <p className="font-body-lg text-base text-[#1a1c1c] leading-relaxed">
                {article.summary}
              </p>
            </div>
          </ScrollReveal>

          {/* Detailed Editorial Sections */}
          <ScrollReveal delay={100}>
            <div className="bg-white border border-[#e2e2e2] p-8 md:p-12 shadow-sm space-y-10">
              {article.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="font-headline-lg text-2xl text-[#001128] pb-2 border-b border-[#001128]/10">
                    {section.heading}
                  </h2>
                  <div className="font-body-lg text-base text-[#44474d] leading-relaxed whitespace-pre-line space-y-4">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Author Callout Card */}
          <ScrollReveal delay={120}>
            <div className="mt-12 p-8 bg-[#001128] text-white flex flex-col sm:flex-row items-center gap-6 shadow-md">
              <div className="w-16 h-16 bg-white/10 text-[#c5a059] flex items-center justify-center font-display-md text-2xl shrink-0 border border-[#c5a059]/40">
                {article.authorInitials}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#e8c178] mb-1">
                  Author &amp; Senior Counsel
                </div>
                <h3 className="font-headline-md text-lg text-white mb-1">
                  {article.authorName}
                </h3>
                <p className="font-body-md text-xs text-[#c5d4ea] mb-3">
                  {article.authorRole}
                </p>
                <Link
                  href="/consultation"
                  className="text-xs font-label-md uppercase tracking-wider text-[#e8c178] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
                >
                  Schedule Discussion with Author &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Related Articles */}
          <ScrollReveal delay={150}>
            <div className="mt-16 pt-12 border-t border-[#001128]/10">
              <h3 className="font-display-md text-2xl text-[#001128] mb-6">
                Related Legal Publications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel, relIdx) => (
                  <div
                    key={rel.slug}
                    className="bg-white border border-[#e2e2e2] p-6 hover:border-[#c5a059] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,17,40,0.06)]"
                  >
                    <span className="text-[10px] font-label-sm uppercase tracking-wider text-[#775a1b] font-bold block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-headline-md text-base text-[#001128] mb-2 line-clamp-2">
                      <Link href={`/insights/${rel.slug}`} className="hover:text-[#775a1b] transition-colors">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="font-body-md text-xs text-[#44474d] line-clamp-2 mb-4">
                      {rel.excerpt}
                    </p>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="text-xs font-label-md uppercase tracking-wider text-[#001128] hover:text-[#775a1b] font-bold transition-colors inline-flex items-center gap-1"
                    >
                      Read Briefing &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}

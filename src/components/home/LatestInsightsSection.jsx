import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import ScrollReveal from "../ui/ScrollReveal";
import { insightsData } from "@/data/insightsData";

export default function LatestInsightsSection() {
  const featuredArticle = insightsData[0];
  const recentArticles = insightsData.slice(1, 4);

  return (
    <section className="py-20 lg:py-28 bg-[#f3f3f4] border-b border-[#001128]/5 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeader
              kicker="Perspectives & Publications"
              title="Legal Insights & Editorial Analysis"
              subtitle="Authoritative commentary on regulatory transformations, cross-border transactional risk, and appellate jurisprudence."
              className="mb-0"
            />
            <div className="mt-6 md:mt-0">
              <Button href="/insights" variant="outline" size="md">
                All Briefings &rarr;
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Big Article Card with Reveal */}
        {featuredArticle && (
          <ScrollReveal delay={100}>
            <div className="mb-12 bg-white border border-[#e2e2e2] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 group hover:border-[#c5a059] transition-all duration-300">
              <div className="lg:col-span-6 h-64 lg:h-auto overflow-hidden bg-[#001128] relative min-h-[260px]">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="gold" className="bg-[#001128]/90 text-[#e8c178] border-[#c5a059]">
                    Featured Editorial
                  </Badge>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs text-[#75777e]">
                    <span className="font-label-sm uppercase tracking-wider text-[#775a1b] font-bold">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h3 className="font-display-md text-2xl lg:text-3xl text-[#001128] mb-4 leading-tight group-hover:text-[#775a1b] transition-colors">
                    <Link href={`/insights/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p className="font-body-md text-sm text-[#44474d] leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#001128]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-none bg-[#001128] text-white flex items-center justify-center font-display-md text-xs">
                      {featuredArticle.authorInitials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#001128]">
                        {featuredArticle.authorName}
                      </p>
                      <p className="text-[10px] text-[#75777e]">
                        {featuredArticle.authorRole}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="text-xs font-label-md uppercase tracking-wider text-[#775a1b] font-bold hover:text-[#001128] transition-colors inline-flex items-center gap-1"
                  >
                    Read Briefing &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 3 Secondary Articles Grid with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recentArticles.map((article, idx) => (
            <ScrollReveal key={article.slug} delay={idx * 100}>
              <Card
                variant="white"
                className="h-full flex flex-col justify-between group hover:border-[#c5a059]"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3 text-xs text-[#75777e]">
                    <span className="font-label-sm uppercase tracking-wider text-[#775a1b] font-bold">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h4 className="font-headline-md text-lg text-[#001128] mb-3 group-hover:text-[#775a1b] transition-colors line-clamp-2">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>

                  <p className="font-body-md text-xs text-[#44474d] leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#001128]/10 flex items-center justify-between text-xs">
                  <span className="text-[#75777e]">{article.date}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="font-label-sm uppercase tracking-wider text-[#001128] group-hover:text-[#775a1b] font-bold inline-flex items-center gap-1"
                  >
                    Read &rarr;
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

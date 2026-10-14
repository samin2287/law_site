import Container from "@/components/ui/Container";
import InsightsDirectory from "@/components/insights/InsightsDirectory";
import { insightsData } from "@/data/insightsData";

export const metadata = {
  title: "Legal Insights & Publications",
  description:
    "Authoritative analysis on evolving statutory frameworks, cross-border transactional risks, and appellate litigation from our partners and senior practitioners.",
};

export default function InsightsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* Editorial Hero */}
      <section className="py-20 lg:py-24 bg-[#001128] text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-[#c5a059]" />
              Thought Leadership &amp; Publications
            </div>

            <h1 className="font-display-lg text-white mb-6">
              Legal Insights &amp; Perspectives
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] leading-relaxed">
              Authoritative commentary and rigorous analysis on complex regulatory shifts, cross-border transactional frameworks, and corporate governance matters from our partners and senior practitioners.
            </p>
          </div>
        </Container>
      </section>

      {/* Publications Directory with Live Filter & Search */}
      <section className="py-16 lg:py-20 bg-[#f7f5f0]">
        <Container>
          <InsightsDirectory articles={insightsData} />
        </Container>
      </section>
    </div>
  );
}

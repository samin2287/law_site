import Container from "@/components/ui/Container";
import TeamDirectory from "@/components/team/TeamDirectory";
import { teamData } from "@/data/teamData";

export const metadata = {
  title: "Distinguished Practitioners & Partners",
  description:
    "Meet our senior partners, King's Counsel, and specialist advocates with decades of high-stakes corporate, arbitration, and private wealth experience.",
};

export default function OurPeoplePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Editorial Hero */}
      <section className="py-20 lg:py-24 bg-[#001128] text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-[#c5a059]" />
              Sterling &amp; Associates Partnership
            </div>

            <h1 className="font-display-lg text-white mb-6">
              Distinguished Practitioners
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] leading-relaxed mb-4">
              Our collaborative partnership model ensures unmediated access to senior counsel, uniting deep analytical rigor with decades of high-stakes advocacy across international jurisdictions.
            </p>
          </div>
        </Container>
      </section>

      {/* Practitioner Directory */}
      <section className="py-16 lg:py-20 bg-[#f7f5f0]">
        <Container>
          <TeamDirectory team={teamData} />
        </Container>
      </section>
    </div>
  );
}

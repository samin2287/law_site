import Container from "../ui/Container";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

export default function ConsultationCtaSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#001128] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-[#c5a059]" />
            Confidential Dialogue
          </div>

          <h2 className="font-display-lg text-3xl md:text-5xl text-white mb-6">
            Begin a Confidential Consultation
          </h2>

          <p className="font-body-lg text-base md:text-lg text-[#c5d4ea] max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether facing imminent dispute proceedings, multi-jurisdictional regulatory scrutiny, or structuring a landmark transaction, our senior partners are prepared to review your mandate with absolute discretion.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/consultation" variant="gold" size="lg">
              Request Confidential Intake
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact London Chambers
            </Button>
          </div>

          <div className="mt-8 text-xs text-[#c5d4ea]/60 font-body-sm">
            All preliminary communications are handled under strict confidentiality protocols.
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

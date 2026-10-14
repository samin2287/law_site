import Container from "@/components/ui/Container";
import ConsultationForm from "@/components/contact/ConsultationForm";

export const metadata = {
  title: "Arrange a Confidential Consultation",
  description:
    "Confidential advisory intake with our senior partners and King's Counsel. Multi-step intake for high-stakes corporate, arbitration, and private wealth matters.",
};

export default function ConsultationPage() {
  return (
    <div className="w-full flex flex-col py-16 lg:py-24 bg-[#f7f5f0]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#775a1b] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-[#775a1b]" />
            Confidential Advisory Intake
          </div>
          <h1 className="font-display-lg text-3xl md:text-5xl text-[#001128] mb-4 animate-fade-in-up animation-delay-100">
            Arrange a Confidential Consultation
          </h1>
          <p className="font-body-lg text-base text-[#44474d] leading-relaxed animate-fade-in-up animation-delay-200">
            Secure preliminary intake with our senior partners and King&apos;s Counsel. Please specify your practice requirements to facilitate proper counsel allocation.
          </p>
        </div>

        <ConsultationForm />
      </Container>
    </div>
  );
}

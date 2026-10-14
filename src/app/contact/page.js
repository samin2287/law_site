import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { firmData } from "@/data/firmData";

export const metadata = {
  title: "London Chambers & Global Desks",
  description:
    "Contact Sterling & Associates at our historic Inner Temple chambers in London or via our international desks in Geneva and New York.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col py-16 lg:py-24 bg-[#f7f5f0]">
      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#775a1b] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-4 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-[#775a1b]" />
            Chambers &amp; Global Desks
          </div>
          <h1 className="font-display-lg text-3xl md:text-5xl text-[#001128] mb-4 animate-fade-in-up animation-delay-100">
            Direct Enquiry &amp; Office Locations
          </h1>
          <p className="font-body-lg text-base text-[#44474d] leading-relaxed animate-fade-in-up animation-delay-200">
            We invite discerning private clients, enterprise counsel, and institutional investors to initiate confidential discussions with our senior partners.
          </p>
        </div>

        {/* Main Grid: Form on Left, Offices on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 7 Cols: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right 5 Cols: Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-headline-lg text-xl text-[#001128] pb-2 border-b border-[#001128]/10">
              Our Locations
            </h2>

            {firmData.offices.map((office, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <Card
                  variant={idx === 0 ? "white" : "ivory"}
                  className="relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,17,40,0.06)]"
                >
                  {idx === 0 && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-[#c5a059]" />
                  )}
                  <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] font-bold mb-1">
                    {office.badge}
                  </div>
                  <h3 className="font-headline-md text-lg text-[#001128] mb-2 font-bold">
                    {office.city}
                  </h3>
                  <p className="font-body-md text-xs text-[#44474d] mb-1">
                    {office.address}
                  </p>
                  <p className="font-body-md text-xs text-[#44474d] mb-3">
                    {office.postcode}, {office.country}
                  </p>

                  <div className="pt-3 border-t border-[#001128]/10 space-y-1 text-xs text-[#75777e]">
                    <p>
                      <span className="font-semibold text-[#001128]">Tel:</span>{" "}
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="text-[#001128] hover:text-[#775a1b] hover:underline transition-colors"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-[#001128]">Email:</span>{" "}
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#001128] hover:text-[#775a1b] hover:underline transition-colors"
                      >
                        {office.email}
                      </a>
                    </p>
                    <p className="text-[11px] text-[#75777e] pt-1">
                      {office.hours}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}

            {/* Security Callout */}
            <ScrollReveal delay={250}>
              <div className="p-4 bg-[#001128] text-white border border-[#14263f] text-xs leading-relaxed shadow-sm">
                <span className="font-semibold text-[#e8c178] block mb-1">
                  Encrypted Communications
                </span>
                <p className="text-[#c5d4ea] text-[11px]">
                  Direct PGP encryption keys and secure file transmission links are provided following preliminary conflict checks.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </div>
  );
}

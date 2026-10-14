import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[820px] flex items-center bg-[#001128] text-white overflow-hidden py-20 lg:py-28">
      {/* Background Architectural Texture with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrDBOwBXozUF3j1iT0aB7lGcarRRxbp3anHz1k-f1s0x0BY8VRS72QUVJHcSrij1SXzu1TuARbYFZ8xO9UdA0kv20mt_DF7JRLMvJIpggk3zVxwn0clTupnOuIbZCmbOsRVEp3OO3JcG5dTndquUvD4-Plj3H9MOHs7pNxJydpOuipSmpv-m_e1rmIYj4oUfst2F0-DDfMoWDERcW1_vWO8_TEFZrw6L3gMmemyomhwPgPCexJ0MDX"
          alt="Inner Temple London Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover mix-blend-luminosity animate-hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001128] via-[#001128]/90 to-[#001128]/60" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c5a059]/15 text-[#e8c178] border border-[#c5a059]/30 text-[11px] font-label-sm uppercase tracking-widest mb-6 animate-fade-in-up animation-delay-100">
              <span className="w-2 h-2 bg-[#c5a059]" />
              Independent Legal Counsel • London
            </div>

            <h1 className="font-display-lg text-white mb-6 tracking-tight animate-fade-in-up animation-delay-200">
              Clear Advice.
              <br />
              <span className="text-[#e8c178] italic font-normal">Stronger Outcomes.</span>
            </h1>

            <p className="font-body-lg text-lg text-[#c5d4ea] max-w-xl mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
              An elite British law firm providing uncompromising counsel, intellectual rigor, and distinguished representation for global enterprises, institutions, and private clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
              <Button href="/consultation" variant="gold" size="lg">
                Arrange a Consultation
              </Button>
              <Button href="/services" variant="outline-light" size="lg">
                Explore Our Expertise
              </Button>
            </div>
          </div>

          {/* Right Hero Accents & Representative Stats Card */}
          <div className="lg:col-span-5 flex flex-col justify-end animate-fade-in-up animation-delay-500">
            <div className="p-8 bg-[#14263f]/90 backdrop-blur-md border border-[#c5a059]/30 relative shadow-2xl">
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#c5a059]" />
              <span className="text-[10px] font-label-sm uppercase tracking-widest text-[#e8c178] block mb-2">
                Inner Temple Chambers
              </span>
              <p className="font-headline-sm text-white mb-6 italic leading-relaxed">
                &ldquo;Excellence is never an accident; it is the result of high intention, sincere effort, and intelligent execution.&rdquo;
              </p>
              <div className="text-[11px] font-label-sm uppercase tracking-wider text-[#c5d4ea] border-t border-white/10 pt-4 mb-6">
                &mdash; Lord Sterling, Senior Partner (1912)
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div>
                  <div className="font-display-md text-2xl lg:text-3xl text-[#e8c178]">
                    £4.2B+
                  </div>
                  <div className="text-[10px] font-label-sm uppercase tracking-wider text-[#c5d4ea]">
                    Transactions Advised
                  </div>
                </div>
                <div>
                  <div className="font-display-md text-2xl lg:text-3xl text-[#e8c178]">
                    98.4%
                  </div>
                  <div className="text-[10px] font-label-sm uppercase tracking-wider text-[#c5d4ea]">
                    Client Retention Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

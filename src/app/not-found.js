import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "404 - Page Not Found",
  description: "The requested legal brief, counsel profile, or chambers page could not be located.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 bg-[#f7f5f0]">
      <Container className="max-w-2xl text-center">
        {/* Emblem Crest */}
        <div className="w-16 h-16 rounded-full bg-[#001128] text-[#c5a059] flex items-center justify-center font-display-md text-2xl mx-auto mb-6 border border-[#c5a059]/50 shadow-md">
          §
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#775a1b] border border-[#c5a059]/30 text-[10px] font-label-sm uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 bg-[#775a1b]" />
          Chambers Notice • 404
        </div>

        <h1 className="font-display-lg text-3xl md:text-5xl text-[#001128] mb-4">
          Mandate Record Not Located
        </h1>

        <p className="font-body-lg text-base text-[#44474d] leading-relaxed mb-8 max-w-lg mx-auto">
          The requested brief, practice area, or practitioner record cannot be found. The document may have been relocated or archived under chambers protocols.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline" size="md">
            Explore Practice Disciplines
          </Button>
          <Button href="/contact" variant="ghost" size="md">
            Contact Chambers
          </Button>
        </div>
      </Container>
    </div>
  );
}

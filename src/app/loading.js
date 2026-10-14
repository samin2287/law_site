import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#f7f5f0] px-4">
      <Container className="max-w-md text-center flex flex-col items-center">
        {/* Crest Emblem with pulse */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full bg-[#001128] text-[#c5a059] flex items-center justify-center border border-[#c5a059]/50 shadow-md">
            <svg
              className="w-8 h-8 text-[#c5a059] animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
              <path d="M7 21h10" />
              <path d="M12 3v18" />
              <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
          </div>
          {/* Subtle concentric ripple */}
          <div className="absolute inset-0 rounded-full border border-[#c5a059]/30 animate-ping pointer-events-none opacity-40" />
        </div>

        {/* Firm Title */}
        <h2 className="text-xl font-bold tracking-wider uppercase text-[#001128] mb-1">
          Sterling &amp; Associates
        </h2>
        <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#775a1b] font-medium mb-6">
          Independent Legal Counsel • London
        </p>

        {/* Gold Shimmering Progress Bar */}
        <div className="w-48 h-1 bg-[#001128]/10 rounded-full overflow-hidden relative mb-4">
          <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#775a1b] via-[#c5a059] to-[#fdd589] rounded-full animate-[progressPulse_1.4s_ease-in-out_infinite]" />
        </div>

        <p className="text-xs text-[#75777e] tracking-wide animate-pulse">
          Loading legal briefing&hellip;
        </p>
      </Container>
    </div>
  );
}

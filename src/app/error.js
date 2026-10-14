"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log exception to console in client
    console.error("Chambers Application Error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 bg-[#f7f5f0]">
      <Container className="max-w-xl text-center">
        <div className="w-16 h-16 rounded-full bg-[#001128] text-[#c5a059] flex items-center justify-center font-display-md text-2xl mx-auto mb-6 border border-[#c5a059]/50 shadow-md">
          !
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-900 border border-red-200 text-[10px] font-label-sm uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 bg-red-800" />
          Chambers Technical Exception
        </div>

        <h1 className="font-display-lg text-2xl md:text-4xl text-[#001128] mb-4">
          An Unexpected Error Occurred
        </h1>

        <p className="font-body-md text-sm text-[#44474d] leading-relaxed mb-8 max-w-md mx-auto">
          The application encountered an unexpected condition while preparing this legal view. You may safely retry the operation or return to the main chambers index.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="primary" size="md">
            Retry Operation
          </Button>
          <Button href="/" variant="outline" size="md">
            Chambers Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}

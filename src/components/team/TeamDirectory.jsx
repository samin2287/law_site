"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const CATEGORIES = [
  { label: "All Counsel", value: "all" },
  { label: "Corporate & Commercial", value: "corporate" },
  { label: "Dispute Resolution", value: "dispute" },
  { label: "Private Wealth", value: "wealth" },
  { label: "Real Estate Law", value: "realestate" },
];

export default function TeamDirectory({ team }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  useEffect(() => {
    if (!selectedLawyer) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedLawyer(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLawyer]);

  const filteredTeam =
    activeCategory === "all"
      ? team
      : team.filter((lawyer) => lawyer.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#001128]/10" role="group" aria-label="Filter counsel by division">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            aria-pressed={activeCategory === cat.value}
            className={`px-4 py-2 text-[11px] font-label-md uppercase tracking-wider transition-all duration-200 cursor-pointer select-none hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
              activeCategory === cat.value
                ? "bg-[#001128] text-white font-bold shadow-sm"
                : "bg-white text-[#44474d] hover:bg-[#e8e8e8] border border-[#e2e2e2]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Practitioner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeam.map((lawyer, idx) => (
          <Card
            key={lawyer.slug}
            variant="white"
            style={{ animationDelay: `${idx * 50}ms` }}
            className="p-0 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059] animate-fade-in"
          >
            <div>
              {/* Portrait */}
              <div className="w-full h-80 overflow-hidden relative bg-[#001128]">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 z-10">
                  <Badge variant="navy" className="bg-[#001128]/95 text-[#e8c178] border-[#c5a059]/40">
                    {lawyer.badge}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] mb-1 font-bold">
                  {lawyer.division}
                </div>
                <h3 className="font-headline-lg text-xl text-[#001128] mb-2 group-hover:text-[#775a1b] transition-colors">
                  {lawyer.name}
                </h3>
                <p className="font-body-md text-xs text-[#44474d] leading-relaxed mb-4 line-clamp-3">
                  {lawyer.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {lawyer.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-label-sm uppercase tracking-wider px-2 py-0.5 bg-[#f3f3f4] text-[#44474d] border border-[#e2e2e2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 pt-0 border-t border-[#001128]/10 mt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedLawyer(lawyer)}
                className="text-[11px] font-label-md uppercase tracking-wider text-[#75777e] hover:text-[#001128] font-bold cursor-pointer transition-colors"
              >
                Quick Preview
              </button>
              <Link
                href={`/our-people/${lawyer.slug}`}
                className="text-[11px] font-label-md uppercase tracking-wider text-[#001128] group-hover:text-[#775a1b] font-bold inline-flex items-center gap-1 transition-colors"
              >
                Full Profile &rarr;
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedLawyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedLawyer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-lawyer-name"
        >
          <div
            className="bg-white border border-[#001128]/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedLawyer(null)}
              className="absolute top-4 right-4 text-[#75777e] hover:text-[#001128] p-1 font-bold text-lg leading-none cursor-pointer transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <div className="w-28 h-36 bg-[#001128] shrink-0 overflow-hidden relative">
                <Image
                  src={selectedLawyer.image}
                  alt={selectedLawyer.name}
                  fill
                  sizes="112px"
                  className="object-cover grayscale contrast-125"
                />
              </div>
              <div>
                <div className="text-[10px] font-label-sm uppercase tracking-widest text-[#775a1b] mb-1 font-bold">
                  {selectedLawyer.division}
                </div>
                <h3 id="modal-lawyer-name" className="font-display-md text-2xl text-[#001128] mb-1">
                  {selectedLawyer.name}
                </h3>
                <p className="text-xs text-[#75777e] mb-3">
                  {selectedLawyer.role} • {selectedLawyer.calledToBar}
                </p>
                <div className="text-xs text-[#775a1b] italic font-serif">
                  &ldquo;{selectedLawyer.quote}&rdquo;
                </div>
              </div>
            </div>

            <p className="font-body-md text-sm text-[#44474d] leading-relaxed mb-6">
              {selectedLawyer.detailedBio}
            </p>

            <div className="border-t border-[#001128]/10 pt-4 mb-6">
              <h4 className="text-xs font-label-sm uppercase tracking-wider text-[#001128] font-bold mb-2">
                Notable Matters Handled
              </h4>
              <ul className="space-y-2 text-xs text-[#44474d]">
                {selectedLawyer.notableMatters.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#775a1b] font-bold">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#001128]/10">
              <div className="text-xs text-[#75777e]">
                Direct: <span className="text-[#001128] font-semibold">{selectedLawyer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  href={`/our-people/${selectedLawyer.slug}`}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedLawyer(null)}
                >
                  View Full Profile
                </Button>
                <Button
                  href="/consultation"
                  variant="primary"
                  size="sm"
                  onClick={() => setSelectedLawyer(null)}
                >
                  Arrange Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

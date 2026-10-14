"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const CATEGORIES = [
  { label: "All Insights", value: "all" },
  { label: "Corporate Governance", value: "corporate" },
  { label: "Dispute Resolution", value: "dispute" },
  { label: "Private Wealth", value: "wealth" },
  { label: "Real Estate Law", value: "property" },
  { label: "Employment Law", value: "employment" },
];

export default function InsightsDirectory({ articles }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.categorySlug === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.authorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search and Category Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#001128]/10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter insights by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              aria-pressed={activeCategory === cat.value}
              className={`px-3.5 py-1.5 text-[11px] font-label-md uppercase tracking-wider transition-all duration-200 cursor-pointer select-none hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] ${
                activeCategory === cat.value
                  ? "bg-[#001128] text-white font-bold shadow-sm"
                  : "bg-white text-[#44474d] hover:bg-[#e8e8e8] border border-[#e2e2e2]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            aria-label="Search legal briefings and authors"
            placeholder="Search briefings & authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 text-xs font-body-md bg-white border border-[#e2e2e2] text-[#1a1c1c] placeholder-[#75777e] focus:outline-none focus:border-[#001128] focus:ring-1 focus:ring-[#001128]/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-[#75777e] mb-6">
        Showing <span className="font-bold text-[#001128]">{filteredArticles.length}</span> publications
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="p-12 text-center bg-white border border-[#e2e2e2] animate-fade-in">
          <p className="font-headline-sm text-base text-[#001128] mb-2">No matching publications found.</p>
          <p className="text-xs text-[#75777e]">Try clearing your search query or choosing another category filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <Card
              key={article.slug}
              variant="white"
              style={{ animationDelay: `${idx * 40}ms` }}
              className="p-0 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059] animate-fade-in"
            >
              <div>
                {/* Article Cover Image */}
                <div className="w-full h-48 overflow-hidden bg-[#001128] relative">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="navy" className="bg-[#001128]/90 text-[#e8c178] border-[#c5a059]/40">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                {/* Article Text Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] text-[#75777e] mb-3">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-headline-md text-lg text-[#001128] mb-3 group-hover:text-[#775a1b] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="font-body-md text-xs text-[#44474d] leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Action Footer */}
              <div className="p-6 pt-0 border-t border-[#001128]/10 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#001128] text-white flex items-center justify-center font-display-md text-[10px]">
                    {article.authorInitials}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#001128]">
                      {article.authorName}
                    </p>
                    <p className="text-[9px] text-[#75777e]">
                      {article.authorRole}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="text-[11px] font-label-md uppercase tracking-wider text-[#775a1b] font-bold hover:text-[#001128] inline-flex items-center gap-1 transition-colors"
                >
                  Read &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

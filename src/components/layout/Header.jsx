"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import Button from "../ui/Button";

const NAV_LINKS = [
  { name: "Our Firm", href: "/our-firm" },
  { name: "Services", href: "/services" },
  { name: "Our People", href: "/our-people" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-[#f7f5f0]/98 shadow-[0_4px_24px_rgba(0,17,40,0.06)] border-b border-[#001128]/15 backdrop-blur-md"
          : "bg-[#f7f5f0]/90 shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-[#001128]/10 backdrop-blur-md"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-300 ease-out ${
            isScrolled ? "h-[70px]" : "h-20"
          }`}
        >
          {/* Firm Logo & Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Sterling & Associates Homepage"
          >
            {/* Logo Crest / Emblem */}
            <div className="flex items-center justify-center shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8fNgwUncOCVPSVnVC8Ox_rOR5YmMVeqMuJpKK4IeBQw1Y-_FAg97WO7LKbyClIHjiwQaU1U31tjPXCWUSKjWIpTMGjLIqJxaREzQXLauw2cev1rUlbuPBTcK-F75YYpcE5ag3krzU70_UbDhfx07zAPMeYEceEZk9ISghean5qSPRSiiBWiuUT04_zdxW_NhdNpM3_ByvBmrH3FJrJ-dNYgOrIFSyK3VYyWbKp3jD56rEI1taIVg"
                alt="Sterling & Associates Crest"
                width={40}
                height={40}
                priority
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden w-9 h-9 bg-[#001128] text-[#c5a059] items-center justify-center border border-[#c5a059]/50 shadow-sm">
                <svg
                  className="w-5 h-5 text-[#c5a059]"
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
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-[17px] sm:text-[20px] tracking-wide uppercase text-[#001128] leading-tight font-semibold group-hover:text-[#775a1b] transition-colors whitespace-nowrap">
                Sterling &amp; Associates
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-[#775a1b] font-medium leading-none mt-1">
                Independent Legal Counsel • London
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-3.5 py-2 text-[12px] font-label-md tracking-wider uppercase transition-colors duration-200 ${
                    active
                      ? "text-[#001128] font-bold"
                      : "text-[#44474d] hover:text-[#001128]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#c5a059] transition-all duration-300 ease-out origin-left ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button href="/consultation" variant="primary" size="sm">
              Arrange Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#001128] hover:text-[#775a1b] focus:outline-none transition-colors duration-150"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#001128]/10 bg-[#f7f5f0] py-4 px-2 space-y-1 animate-fade-in shadow-lg">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-[12px] font-label-md tracking-wider uppercase transition-all duration-150 ${
                    active
                      ? "bg-[#001128] text-white font-bold translate-x-1"
                      : "text-[#1a1c1c] hover:bg-[#e8e8e8] hover:translate-x-1"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 pb-1 px-4">
              <Button
                href="/consultation"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Arrange Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { servicesData } from "@/data/servicesData";
import { firmData } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-[#001128] text-white pt-16 pb-12 border-t border-[#14263f]">
      <Container>
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Heritage */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="flex items-center justify-center shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw8fNgwUncOCVPSVnVC8Ox_rOR5YmMVeqMuJpKK4IeBQw1Y-_FAg97WO7LKbyClIHjiwQaU1U31tjPXCWUSKjWIpTMGjLIqJxaREzQXLauw2cev1rUlbuPBTcK-F75YYpcE5ag3krzU70_UbDhfx07zAPMeYEceEZk9ISghean5qSPRSiiBWiuUT04_zdxW_NhdNpM3_ByvBmrH3FJrJ-dNYgOrIFSyK3VYyWbKp3jD56rEI1taIVg"
                  alt="Sterling & Associates Crest"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[18px] sm:text-[20px] tracking-wide uppercase text-white font-semibold leading-tight group-hover:text-[#e8c178] transition-colors">
                  Sterling &amp; Associates
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-[#e8c178] font-medium leading-none mt-1">
                  Established 1894 • London
                </span>
              </div>
            </Link>
            <p className="font-body-md text-sm text-[#c5d4ea] leading-relaxed mb-6 max-w-sm">
              An elite British legal practice providing uncompromising counsel, intellectual rigor, and distinguished representation for global enterprises, institutions, and private clients worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#e8c178] font-label-sm uppercase tracking-wider">
              <span className="inline-block w-2 h-2 bg-[#c5a059]" />
              <span>Chambers: 12 Temple Gardens, Inner Temple</span>
            </div>
          </div>

          {/* Column 2: Legal Services */}
          <div className="lg:col-span-3">
            <h3 className="font-label-md text-xs uppercase tracking-widest text-[#e8c178] mb-4">
              Practice Disciplines
            </h3>
            <ul className="space-y-2.5">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-label-sm text-xs text-[#c5a059] hover:underline uppercase tracking-wider inline-flex items-center gap-1 mt-1"
                >
                  All Practice Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Firm & Perspectives */}
          <div className="lg:col-span-2">
            <h3 className="font-label-md text-xs uppercase tracking-widest text-[#e8c178] mb-4">
              The Firm
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/our-firm"
                  className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                >
                  Heritage &amp; Tenets
                </Link>
              </li>
              <li>
                <Link
                  href="/our-people"
                  className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                >
                  Distinguished Counsel
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                >
                  Legal Briefings
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                >
                  Confidential Intake
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body-md text-sm text-[#c5d4ea] hover:text-white transition-colors"
                >
                  London Chambers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: International Desks */}
          <div className="lg:col-span-3">
            <h3 className="font-label-md text-xs uppercase tracking-widest text-[#e8c178] mb-4">
              Chambers &amp; Desks
            </h3>
            <div className="space-y-4 text-xs text-[#c5d4ea]">
              <div>
                <p className="font-semibold text-white">London Headquarters</p>
                <p>12 Temple Gardens, EC4Y 9BB</p>
                <p>
                  <a
                    href="tel:+442079460920"
                    className="text-[#e8c178] hover:underline transition-colors"
                  >
                    +44 (0)20 7946 0920
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Geneva Desk</p>
                <p>Rue du Rhône 42, 1204 Genève</p>
              </div>
              <div>
                <p className="font-semibold text-white">New York Liaison</p>
                <p>Rockefeller Plaza, NY 10111</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="my-8 p-4 bg-[#14263f]/60 border border-[#c5a059]/30 text-xs text-[#c5d4ea] leading-relaxed">
          <p className="font-semibold text-[#e8c178] uppercase tracking-wider mb-1">
            Demonstration Portfolio Project Notice
          </p>
          <p>
            {firmData.demoDisclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#c5d4ea]/70 gap-4">
          <p>
            &copy; 2026 Sterling &amp; Associates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/consultation" className="hover:text-white transition-colors">
              Client Privilege Intake
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Secure Communications
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

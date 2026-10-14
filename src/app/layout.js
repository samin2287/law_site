import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/layout/PageLoader";
import { Suspense } from "react";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Sterling & Associates | Independent Legal Counsel • London",
    template: "%s | Sterling & Associates",
  },
  description:
    "An elite British law firm providing uncompromising counsel, intellectual rigor, and distinguished representation for global enterprises, institutions, and private clients.",
  metadataBase: new URL("https://sterling-associates.demo"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Sterling & Associates | Independent Legal Counsel • London",
    description:
      "An elite British law firm providing uncompromising counsel, intellectual rigor, and distinguished representation for global enterprises, institutions, and private clients.",
    url: "https://sterling-associates.demo",
    siteName: "Sterling & Associates",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f5f0] text-[#1a1c1c] font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-2 focus:bg-[#001128] focus:text-[#e8c178] focus:border focus:border-[#c5a059] focus:outline-none focus:font-semibold text-xs tracking-wider uppercase shadow-lg"
        >
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <PageLoader />
        </Suspense>
        <Header />
        <main id="main-content" className="flex-1 pt-20" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

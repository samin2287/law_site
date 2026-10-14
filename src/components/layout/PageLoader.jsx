"use client";

import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

const subscribeReducedMotion = (callback) => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getServerReducedMotionSnapshot = () => false;

export default function PageLoader() {
  const pathname = usePathname();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const [initialLoading, setInitialLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const prevPathnameRef = useRef(pathname);

  // Initial Page Load Animation
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Progress animation from 0% to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const increment = prev < 60 ? 15 : prev < 90 ? 10 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // Fade out after completion
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setInitialLoading(false);
        if (typeof document !== "undefined") {
          document.body.style.overflow = "";
        }
        setTimeout(() => setIsVisible(false), 600); // Remove from DOM after fade-out
      }, 350);
    }, 850);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [prefersReducedMotion]);

  // Page Navigation Transition
  useEffect(() => {
    // When pathname changes, finish navigation loader
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      if (isNavigating) {
        const timer = setTimeout(() => {
          setIsNavigating(false);
        }, 350);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, isNavigating]);

  // Intercept internal link clicks to trigger page transition loading
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        href !== pathname &&
        target.target !== "_blank"
      ) {
        setIsNavigating(true);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [pathname]);

  if (prefersReducedMotion) {
    return isNavigating ? (
      <div className="fixed top-0 left-0 right-0 z-[99998] pointer-events-none h-[3px] bg-white/10">
        <div className="h-full bg-gradient-to-r from-[#775a1b] via-[#c5a059] to-[#fdd589] shadow-[0_0_12px_rgba(197,160,89,0.9)]" />
      </div>
    ) : null;
  }

  return (
    <>
      {/* 1. Initial Page Load Splash Screen */}
      {isVisible && (
        <div
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#001128] text-white transition-opacity duration-600 ease-in-out ${
            initialLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Subtle Ambient Background Texture */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm">
            {/* Crest Emblem with Golden Glow */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-full bg-[#14263f] text-[#c5a059] flex items-center justify-center border-2 border-[#c5a059]/60 shadow-[0_0_30px_rgba(197,160,89,0.3)] animate-pulse">
                <svg
                  className="w-10 h-10 text-[#c5a059]"
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
              <div className="absolute inset-0 rounded-full border border-[#c5a059]/40 animate-ping opacity-30" />
            </div>

            {/* Firm Identity */}
            <h1 className="text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-white mb-1.5 font-sans">
              Sterling &amp; Associates
            </h1>
            <p className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#e8c178] mb-8 font-medium">
              Independent Legal Counsel • London
            </p>

            {/* Animated Gold Progress Bar */}
            <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden relative mb-3 border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#775a1b] via-[#c5a059] to-[#fdd589] shadow-[0_0_12px_rgba(253,213,137,0.8)] transition-all duration-150 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Loading Status & Percentage */}
            <div className="flex items-center justify-between w-56 text-[10px] text-[#c5d4ea]/80 font-sans tracking-wider">
              <span>INITIALIZING CHAMBERS...</span>
              <span className="font-semibold text-[#e8c178]">{progress}%</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Page Navigation Transition Bar (During Route Changes) */}
      {isNavigating && (
        <div className="fixed top-0 left-0 right-0 z-[99998] pointer-events-none h-[3px] bg-white/10">
          <div className="h-full bg-gradient-to-r from-[#775a1b] via-[#c5a059] to-[#fdd589] shadow-[0_0_12px_rgba(197,160,89,0.9)] animate-[progressPulse_1s_ease-in-out_infinite]" />
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

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

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  as: Component = "div",
  style = {},
  ...props
}) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before the element fully arrives
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.disconnect();
    };
  }, [threshold, prefersReducedMotion]);

  const shouldBeVisible = prefersReducedMotion || isVisible;

  return (
    <Component
      ref={elementRef}
      style={{
        transitionDelay:
          shouldBeVisible && !prefersReducedMotion && delay > 0
            ? `${delay}ms`
            : "0ms",
        ...style,
      }}
      className={`reveal-init ${shouldBeVisible ? "reveal-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

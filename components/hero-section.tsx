"use client";

import React from "react"

import { useEffect, useState } from "react";

function FloatingIcon({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute pointer-events-none opacity-30 ${className}`}
      style={{
        animation: `float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Floating SVG icons */}
      <FloatingIcon className="top-[15%] left-[10%]" delay={0}>
        <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 5 5 5 9c0 3 2 5 3 7h8c1-2 3-4 3-7 0-4-3-7-7-7z" />
          <rect x="9" y="18" width="6" height="3" rx="1" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="top-[20%] right-[12%]" delay={1.5}>
        <svg className="h-12 w-12 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="bottom-[25%] left-[8%]" delay={2.5}>
        <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="8" cy="10" r="1" fill="currentColor" />
          <circle cx="16" cy="10" r="1" fill="currentColor" />
          <path d="M8 15c2 2 6 2 8 0" strokeLinecap="round" />
        </svg>
      </FloatingIcon>
      <FloatingIcon className="bottom-[30%] right-[15%]" delay={3}>
        <svg className="h-9 w-9 text-accent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </FloatingIcon>

      {/* Main hero content */}
      <div
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-secondary-foreground tracking-wide uppercase">
            Microbiome Science
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-balance text-emerald-900">
          The Future of{" "}
          <span className="text-emerald-800">Oral Care</span>{" "}
          Is Alive
        </h1>

        <p className="mt-6 text-lg md:text-xl text-red-700 max-w-2xl mx-auto leading-relaxed text-pretty">
          Harness the power of beneficial bacteria. Our microbiome toothpaste
          works with your body&apos;s natural ecosystem to deliver lasting
          freshness, protection, and a healthier smile.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-lg hover:scale-105 transition-transform"
          >
            Experience the Future
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#problem"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium text-lg hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}

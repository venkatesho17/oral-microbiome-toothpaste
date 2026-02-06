"use client";

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CtaSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="cta" className="relative py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative overflow-hidden rounded-3xl p-10 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background:
              "linear-gradient(135deg, hsl(168 72% 40%) 0%, hsl(190 70% 45%) 50%, hsl(168 72% 35%) 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight text-balance">
              Experience the Future of Oral Care
            </h2>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
              Join thousands who have already transformed their oral health with
              microbiome science. Your mouth deserves better than chemicals.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary-foreground text-foreground font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
                style={{
                  boxShadow: "0 0 40px rgba(255,255,255,0.3)",
                }}
              >
                <span>Get BioSmile Now</span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="text-primary-foreground/60 text-sm">
                Free shipping on your first order
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" strokeLinecap="round" />
                </svg>
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
                </svg>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>Ships Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

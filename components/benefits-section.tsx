"use client";

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    title: "100% Chemical-Free",
    description:
      "No SLS, no parabens, no artificial preservatives. Only ingredients your body recognizes and trusts.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Swallow-Safe",
    description:
      "Formulated to be completely safe if accidentally ingested. Perfect for children and the whole family.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="18" cy="8" r="2" />
        <path d="M20 14a2 2 0 012 2v4" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly",
    description:
      "Biodegradable formula in recyclable packaging. Good for your mouth, good for the planet.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 22c1.25-1.25 2.5-2 4.38-2 2.5 0 3.75 2 6.25 2s3.75-2 6.25-2c1.88 0 3.13.75 4.38 2" />
        <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" />
      </svg>
    ),
  },
  {
    title: "Anti-Inflammatory",
    description:
      "Probiotics actively reduce gum inflammation, supporting healthier gums and preventing periodontal issues.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Gut-Oral Connection",
    description:
      "Protects both your oral and gut microbiome, supporting full-body wellness through the oral gateway.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12s1.5 2 4 2 4-2 4-2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Long-Lasting Freshness",
    description:
      "Natural peppermint oil provides hours of fresh breath without the burning sensation of chemical alternatives.",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v6M12 18v4" />
        <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24" />
        <path d="M2 12h6M16 12h6" />
        <path d="M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
      </svg>
    ),
  },
];

function BenefitCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative p-6 md:p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="benefits" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            Why BioSmile
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Benefits That Go{" "}
            <span className="text-primary">Beyond Brushing</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Every ingredient in BioSmile is chosen for a purpose. Together, they
            create a comprehensive oral care experience that nurtures rather
            than destroys.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

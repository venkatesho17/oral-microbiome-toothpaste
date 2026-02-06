"use client";

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const stats = [
  {
    value: "3.5B",
    label: "People Affected",
    description: "Global oral diseases impact nearly half of humanity",
  },
  {
    value: "2B",
    label: "Living with Caries",
    description: "Untreated dental caries remains the most common condition",
  },
  {
    value: "514M",
    label: "Children at Risk",
    description: "Primary teeth caries affecting the youngest generation",
  },
];

function StatCard({
  value,
  label,
  description,
  delay,
}: {
  value: string;
  label: string;
  description: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <p className="font-display text-5xl md:text-6xl font-bold text-primary">
          {value}
        </p>
        <p className="mt-3 text-lg font-semibold text-foreground">{label}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="problem" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-semibold tracking-wide uppercase mb-4">
            The Global Crisis
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Oral Health Is in a{" "}
            <span className="text-destructive">State of Emergency</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            According to the World Health Organization, oral diseases affect
            billions worldwide. Traditional toothpaste fails to address the root
            cause: a disrupted oral microbiome.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.value} {...stat} delay={i * 150} />
          ))}
        </div>

        <div
          className={`mt-16 p-8 md:p-12 rounded-3xl bg-foreground/[0.03] backdrop-blur-sm border border-border text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Most conventional toothpastes use harsh chemicals that destroy both
            harmful <em>and</em> beneficial bacteria. This disrupts your
            mouth&apos;s natural defense system, creating a cycle of dependency
            on products that worsen the problem they claim to solve.
          </p>
        </div>
      </div>
    </section>
  );
}

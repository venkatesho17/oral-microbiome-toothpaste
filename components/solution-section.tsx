"use client";

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ingredients = [
  {
    name: "Lactobacillus",
    type: "Probiotic",
    description:
      "Beneficial bacteria that compete with harmful pathogens, supporting a balanced oral ecosystem.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="6" ry="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="10" r="2" fill="currentColor" />
        <circle cx="16" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Bifidobacterium",
    type: "Probiotic",
    description:
      "Promotes gut-oral axis health, reducing systemic inflammation and strengthening your natural defenses.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M8 16c0-4 4-8 8-8s8 4 8 8-4 8-8 8" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
        <circle cx="20" cy="18" r="2" fill="currentColor" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Papain Enzyme",
    type: "Natural",
    description:
      "Derived from papaya fruit, gently breaks down plaque proteins without harsh abrasives or chemicals.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 4c-2 4-6 8-6 14a6 6 0 0012 0c0-6-4-10-6-14z" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Peppermint Oil",
    type: "Botanical",
    description:
      "Pure essential oil that provides lasting freshness with natural antibacterial properties.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <path d="M16 28V14" stroke="currentColor" strokeWidth="2" />
        <path d="M16 14c-4-2-8-1-8 3s4 5 8 3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 14c4-2 8-1 8 3s-4 5-8 3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 8c-3-1.5-6-.5-6 2.5s3 4 6 2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 8c3-1.5 6-.5 6 2.5s-3 4-6 2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    name: "Cellulose Wax",
    type: "Eco-Friendly",
    description:
      "Plant-based texture agent that is biodegradable and safe for the environment.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="12" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12V8a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

function IngredientCard({
  name,
  type,
  description,
  icon,
  index,
}: {
  name: string;
  type: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-lg font-bold text-foreground">
              {name}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
              {type}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="solution" className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
            The Solution
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Science Meets{" "}
            <span className="text-primary">Nature</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Our microbiome toothpaste combines cutting-edge probiotic science
            with time-tested natural ingredients. Each component works
            synergistically to restore and protect your oral ecosystem.
          </p>
        </div>

        {/* Product showcase area */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Toothpaste visualization */}
          <div className="relative flex-shrink-0 w-full lg:w-1/3 flex items-center justify-center">
            <div className="relative w-48 h-72 md:w-56 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              {/* Tube shape */}
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="w-24 h-8 rounded-t-xl bg-primary" />
                <div className="w-8 h-4 bg-primary" />
                <div className="relative w-36 h-52 rounded-b-3xl overflow-hidden border-2 border-primary/30" style={{
                  background: "linear-gradient(180deg, hsl(168 72% 40%) 0%, hsl(168 72% 30%) 100%)"
                }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <div className="w-10 h-10 mb-2 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
                        <circle cx="9" cy="10" r="1.5" />
                        <circle cx="15" cy="10" r="1.5" />
                        <path d="M8 15c2 2 6 2 8 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                    <p className="text-primary-foreground font-display font-bold text-sm leading-tight">
                      BioSmile
                    </p>
                    <p className="text-primary-foreground/70 text-[10px] mt-1">
                      Microbiome Care
                    </p>
                  </div>
                  {/* Shine effect */}
                  <div className="absolute top-0 right-4 w-4 h-full bg-primary-foreground/10 skew-x-[-10deg]" />
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients grid */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {ingredients.map((ingredient, i) => (
              <IngredientCard key={ingredient.name} {...ingredient} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

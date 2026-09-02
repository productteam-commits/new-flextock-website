"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { arabicCopy, networkContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function NetworkSection() {
  const { locale } = useLocale();
  const content =
    locale === "ar"
      ? { ...networkContent, ...arabicCopy.network }
      : networkContent;
  const [activePoint, setActivePoint] = useState(0);

  return (
    <section className="border-t border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-7 text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {content.points.map((point, index) => (
            <button
              key={point.value}
              type="button"
              aria-pressed={activePoint === index}
              onClick={() => setActivePoint(index)}
              onMouseEnter={() => setActivePoint(index)}
              className={`border-t pt-5 text-start transition-colors ${
                activePoint === index
                  ? "border-flextock-neon"
                  : "border-flextock-line hover:border-flextock-foreground"
              }`}
            >
              <p
                className={`text-2xl font-medium tracking-[-0.03em] ${
                  activePoint === index
                    ? "text-flextock-foreground"
                    : "text-flextock-muted"
                }`}
              >
                {point.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-flextock-muted">
                {point.label}
              </p>
            </button>
          ))}
        </div>
        <div
          className="mt-10 flex items-center gap-2"
          aria-label={`${content.points[activePoint].value} selected`}
        >
          {content.points.map((point, index) => (
            <motion.span
              key={point.value}
              animate={{ opacity: index === activePoint ? 1 : 0.35 }}
              className={`h-1.5 flex-1 ${
                index === activePoint
                  ? "bg-flextock-neon"
                  : "bg-flextock-line"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

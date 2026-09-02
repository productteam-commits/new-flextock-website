"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import {
  arabicCopy,
  siteConfig,
  technologyContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function TechnologyPanel() {
  const { locale } = useLocale();
  const content =
    locale === "ar" ? arabicCopy.technology : technologyContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const reduceMotion = useReducedMotion();
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section
      id="technology"
      className="border-t border-flextock-line bg-flextock-navy px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
          <a
            href="#showcase"
            className="mt-9 inline-flex items-center gap-3 text-sm text-flextock-foreground transition-colors hover:text-flextock-neon"
          >
            {siteCopy.secondaryCta}
            <ArrowUpRight size={16} />
          </a>
        </div>
            <div>
              <div
                className="border-y border-flextock-line"
                role="tablist"
                aria-label={content.eyebrow}
              >
                {content.capabilities.map((capability, index) => (
                  <button
                    key={capability}
                    type="button"
                    role="tab"
                    aria-selected={activeCapability === index}
                    aria-controls="technology-capability-panel"
                    onClick={() => setActiveCapability(index)}
                    className={`grid w-full gap-4 border-b border-flextock-line py-5 text-start last:border-b-0 sm:grid-cols-[0.15fr_1fr] sm:items-center ${
                      activeCapability === index
                        ? "text-flextock-foreground"
                        : "text-flextock-muted hover:text-flextock-foreground"
                    }`}
                  >
                    <span className="font-mono text-xs text-flextock-neon">
                      0{index + 1}
                    </span>
                    <span className="text-2xl font-medium tracking-[-0.04em]">
                      {capability}
                    </span>
                  </button>
                ))}
              </div>
              <motion.div
                key={activeCapability}
                id="technology-capability-panel"
                role="tabpanel"
                aria-live="polite"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25 }}
                className="border-b border-flextock-line py-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-flextock-neon">
                  {content.capabilities[activeCapability]}
                </p>
                <p className="mt-3 max-w-lg text-base leading-7 text-flextock-muted">
                  {content.capabilityDetails[activeCapability]}
                </p>
                <div className="mt-6 flex h-10 items-end gap-1.5" aria-hidden="true">
                  {[36, 50, 43, 68, 58, 82, 74, 92].map((height, index) => (
                    <motion.span
                      key={index}
                      initial={reduceMotion ? false : { height: 0 }}
                      animate={{ height: `${height - activeCapability * 8}%` }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        delay: reduceMotion ? 0 : index * 0.02,
                      }}
                      className={`flex-1 ${
                        index === 7 ? "bg-flextock-neon" : "bg-flextock-line"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
              <div className="mt-12 border-b border-flextock-line pb-6">
                <p className="text-xs uppercase tracking-[0.18em] text-flextock-muted">
                  {content.integrationsLabel}
                </p>
                <div className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-3">
                  {content.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="border-b border-flextock-line pb-3 text-sm font-medium text-flextock-foreground"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-flextock-muted">
                  {content.integrationsNote}
                </p>
              </div>
        </div>
      </div>
    </section>
  );
}

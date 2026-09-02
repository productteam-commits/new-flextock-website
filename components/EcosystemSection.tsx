"use client";

import {
  ArrowUpRight,
  CircleDollarSign,
  Globe2,
  Route,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ecosystemContent, ecosystemLogos } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

const ecosystemIcons: LucideIcon[] = [
  CircleDollarSign,
  Route,
  Globe2,
  Store,
];

export function EcosystemSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content =
    locale === "ar" ? ecosystemContent.ar : ecosystemContent.en;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = content.cards[activeIndex];

  return (
    <section
      id="ecosystem"
      className="border-t border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-flextock-muted">
              {content.description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid border-y border-flextock-line sm:grid-cols-2 lg:grid-cols-4">
          {ecosystemLogos.map((logo) => (
            <Link
              key={logo.name}
              href={logo.href}
              className="flex h-24 items-center justify-center border-b border-flextock-line px-5 transition-colors hover:bg-flextock-navy last:border-b-0 sm:border-e sm:last:border-e-0 lg:border-b-0"
              aria-label={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={48}
                style={{ width: "auto" }}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid gap-3 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-y border-flextock-line bg-flextock-navy px-3">
              <p className="px-4 py-3 text-xs uppercase tracking-[0.18em] text-flextock-muted">
                {content.interactionHint}
              </p>
              <div
                className="border-t border-flextock-line"
                role="tablist"
                aria-label={content.interactionHint}
              >
                {content.cards.map((card, index) => {
                  const Icon = ecosystemIcons[index];
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={card.name}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="ecosystem-detail-panel"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`flex w-full items-center gap-4 border-b border-flextock-line px-4 py-5 text-start transition-colors last:border-b-0 ${
                        isActive
                          ? "bg-flextock-panel text-flextock-foreground"
                          : "text-flextock-muted hover:bg-flextock-panel/60 hover:text-flextock-foreground"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                          isActive
                            ? "text-flextock-neon"
                            : "text-flextock-muted"
                        }`}
                      >
                        <Icon size={17} strokeWidth={1.7} />
                      </span>
                      <span className="flex-1 text-sm font-medium">{card.name}</span>
                      <span className="font-mono text-[10px]">0{index + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id="ecosystem-detail-panel"
              role="tabpanel"
              aria-live="polite"
              className="grid min-h-80 gap-8 border-y border-flextock-line bg-flextock-navy p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div>
                <div
                  className="mb-10 flex items-center gap-2"
                  aria-hidden="true"
                >
                  {content.cards.map((card, index) => (
                    <div key={card.name} className="flex flex-1 items-center gap-2">
                      <motion.span
                        animate={{
                          backgroundColor:
                            index <= activeIndex
                              ? "var(--brand-mint)"
                              : "var(--brand-line)",
                        }}
                        transition={{ duration: reduceMotion ? 0 : 0.2 }}
                        className="h-2 w-2 shrink-0 rounded-full"
                      />
                      {index < content.cards.length - 1 ? (
                        <span className="h-px flex-1 bg-flextock-line" />
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="min-h-36">
                  <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.22 }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-flextock-neon">
                    {activeCard.label}
                  </p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
                    {activeCard.name}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-flextock-muted">
                    {activeCard.description}
                  </p>
                  <div className="mt-8 grid border-y border-flextock-line sm:grid-cols-3">
                    {activeCard.visualSteps.map((step, index) => (
                      <div
                        key={step}
                        className="border-b border-flextock-line py-4 last:border-b-0 sm:border-b-0 sm:border-s sm:first:border-s-0 sm:px-4 sm:first:ps-0"
                      >
                        <div className="flex items-center gap-2">
                          <motion.span
                            initial={reduceMotion ? false : { scale: 0.6, opacity: 0.4 }}
                            animate={
                              reduceMotion
                                ? { scale: 1, opacity: 1 }
                                : { scale: [0.8, 1.15, 0.8], opacity: [0.5, 1, 0.5] }
                            }
                            transition={
                              reduceMotion
                                ? { duration: 0.2 }
                                : {
                                    duration: 1.8,
                                    delay: index * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }
                            }
                            className="h-2 w-2 shrink-0 rounded-full bg-flextock-neon"
                          />
                          {index < activeCard.visualSteps.length - 1 ? (
                            <span className="h-px flex-1 bg-flextock-line" />
                          ) : null}
                        </div>
                        <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-flextock-foreground">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <Link
                href={activeCard.href}
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-flextock-foreground transition-colors hover:text-flextock-neon"
              >
                {content.linkLabel}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

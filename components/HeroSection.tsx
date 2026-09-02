"use client";

import { ArrowRight, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  arabicCopy,
  brandAssets,
  heroContent,
  heroSignals,
  siteConfig,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function HeroSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = locale === "ar" ? arabicCopy.hero : heroContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const signals = locale === "ar" ? arabicCopy.heroSignals : heroSignals;
  const [activeSignal, setActiveSignal] = useState(0);

  return (
    <section className="relative overflow-hidden border-b border-flextock-line">
      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            <span className="h-2 w-2 rounded-full bg-flextock-neon" />
            {content.eyebrow}
          </p>
          <h1 className="max-w-2xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-flextock-foreground sm:text-5xl lg:text-6xl">
              {content.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-flextock-muted">
              {content.description}
          </p>
          <p className="mt-4 text-sm font-medium text-flextock-foreground">
            {content.supportingText}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/quote"
                  className="group inline-flex items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
            >
              {siteCopy.primaryCta}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
              />
            </Link>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
            >
              <Play size={14} fill="currentColor" />
              {siteCopy.secondaryCta}
            </a>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={brandAssets.growth.src}
              alt={brandAssets.growth.alt}
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-contain"
            />
          </div>
          <div className="border-y border-flextock-line bg-flextock-panel">
            <div className="grid grid-cols-3">
              {signals.map((signal, index) => (
                <button
                  key={signal.label}
                  type="button"
                  aria-pressed={activeSignal === index}
                  onClick={() => setActiveSignal(index)}
                  className={`border-s border-flextock-line px-3 py-4 text-start transition-colors first:border-s-0 ${
                    activeSignal === index
                      ? "bg-flextock-panelStrong text-flextock-foreground"
                      : "text-flextock-muted hover:text-flextock-foreground"
                  }`}
                >
                  <span className="block font-mono text-[10px] text-flextock-neon">
                    0{index + 1}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.12em]">
                    {signal.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium">
                    {signal.value}
                  </span>
                </button>
              ))}
            </div>
            <div className="border-t border-flextock-line px-4 py-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={signals[activeSignal].detail}
                  initial={reduceMotion ? false : { opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                  className="text-xs leading-5 text-flextock-muted"
                  aria-live="polite"
                >
                  {signals[activeSignal].detail}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

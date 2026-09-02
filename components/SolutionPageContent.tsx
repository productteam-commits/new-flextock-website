"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  arabicCopy,
  localizedSolutionDetails,
  solutionCards,
  solutionDetails,
  solutionPageContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function SolutionPageContent({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const index = solutionCards.findIndex((solution) => solution.slug === slug);
  const solution = solutionCards[index];

  if (!solution) {
    return null;
  }

  const detail =
    locale === "ar"
      ? localizedSolutionDetails[solution.slug]
      : solutionDetails[solution.slug];
  const content =
    locale === "ar" ? arabicCopy.solutionPage : solutionPageContent;
  const sourceDetail = solutionDetails[solution.slug];
  const image = sourceDetail.image;

  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <section className="px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {solution.title} · {content.eyebrow}
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              {detail.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-flextock-muted">
              {detail.intro}
            </p>
            <Link
              href="/quote"
              className="mt-10 inline-flex items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
            >
              {content.cta}
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </motion.div>
          <div
            className={
              sourceDetail.secondaryImages?.length
                ? "grid gap-3 sm:grid-cols-2"
                : undefined
            }
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="relative aspect-[4/5]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain"
              />
            </motion.div>
            {sourceDetail.secondaryImages?.map((secondaryImage) => (
              <div
                key={secondaryImage.src}
                className="relative aspect-[4/5] bg-flextock-navy"
              >
                <Image
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  fill
                  sizes="(min-width: 640px) 20vw, 100vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {detail.problem.eyebrow}
            </p>
            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl">
              {detail.problem.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-flextock-muted">
              {detail.problem.description}
            </p>
          </div>
          <div className="grid gap-0 border-y border-flextock-line sm:grid-cols-3">
            {detail.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="border-b border-flextock-line py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0"
              >
                <p className="text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
                  {outcome.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-flextock-muted">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.howItWorks}
          </p>
          <div className="mt-12 border-y border-flextock-line">
            <div
              className="grid border-b border-flextock-line sm:grid-cols-2 lg:grid-cols-4"
              role="tablist"
              aria-label={content.howItWorks}
            >
              {detail.steps.map((step, stepIndex) => (
                <button
                  key={step.title}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === stepIndex}
                  aria-controls="solution-step-panel"
                  onClick={() => setActiveStep(stepIndex)}
                  className={`border-b border-flextock-line px-4 py-5 text-start transition-colors last:border-b-0 sm:border-l sm:first:border-l-0 lg:border-b-0 ${
                    activeStep === stepIndex
                      ? "bg-flextock-panelStrong text-flextock-foreground"
                      : "text-flextock-muted hover:text-flextock-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-flextock-neon">
                    0{stepIndex + 1}
                  </span>
                  <span className="mt-8 block text-sm font-medium leading-6">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
            <motion.div
              key={activeStep}
              id="solution-step-panel"
              role="tabpanel"
              aria-live="polite"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
              className="min-h-48 p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-flextock-neon">
                0{activeStep + 1}
              </span>
              <h3 className="mt-6 text-3xl font-medium tracking-[-0.05em]">
                {detail.steps[activeStep].title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-flextock-muted">
                {detail.steps[activeStep].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

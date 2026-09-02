"use client";

import {
  Activity,
  RefreshCcw,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

import {
  arabicCopy,
  journeySteps,
  showcaseContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  shield: ShieldAlert,
  refresh: RefreshCcw,
};

export function OperatingSystemShowcase() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const localizedSteps =
    locale === "ar"
      ? journeySteps.map((step, index) => ({
          ...step,
          ...arabicCopy.journeySteps[index],
        }))
      : journeySteps;
  const localizedContent =
    locale === "ar" ? arabicCopy.showcase : showcaseContent;
  const showcaseRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start 70%", "end 45%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStep(
      Math.min(
        localizedSteps.length - 1,
        Math.floor(latest * localizedSteps.length),
      ),
    );
  });

  const currentStep = localizedSteps[activeStep];
  const signalBars = currentStep.visualBars;

  function selectStep(index: number) {
    setActiveStep(index);
    stepRefs.current[index]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  }

  return (
    <section
      ref={showcaseRef}
      id="showcase"
      className="relative bg-flextock-navy"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
        <div className="relative lg:sticky lg:top-[4.5rem] lg:h-[calc(100vh-4.5rem)] lg:py-10">
          <div className="relative h-[28rem] overflow-hidden bg-flextock-panel lg:h-full">
            <div className="flex h-full flex-col justify-between p-6 md:p-10">
              <div className="flex items-center justify-between border-b border-flextock-line pb-5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-flextock-muted">
                  {localizedContent.systemLabel}
                </span>
                <span className="font-mono text-xs text-flextock-neon">
                  {currentStep.number}
                </span>
              </div>
              <div className="py-10">
                <motion.p
                  key={currentStep.visualValue}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-7xl font-medium tracking-[-0.07em] text-flextock-foreground md:text-8xl"
                >
                  {currentStep.visualValue}
                </motion.p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-flextock-muted">
                  {currentStep.visualUnit}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-flextock-neon">
                  {currentStep.visualLabel}
                </p>
                <div
                  className="mt-10 flex h-28 items-end gap-2 border-y border-flextock-line py-4"
                  aria-label={`${currentStep.visualLabel} signal`}
                >
                  {signalBars.map((height, index) => (
                    <motion.div
                      key={`${currentStep.number}-${index}`}
                      initial={reduceMotion ? false : { height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.35, delay: index * 0.025 }}
                      className={`flex-1 ${
                        index === signalBars.length - 1
                          ? "bg-flextock-neon"
                          : "bg-flextock-line"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-flextock-muted">
                  <span>{localizedContent.signalLabel}</span>
                  <span>
                    {currentStep.number} / {String(localizedSteps.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 h-px bg-flextock-line">
                  <motion.div
                    style={{
                      scaleX: progress,
                      transformOrigin: locale === "ar" ? "right" : "left",
                    }}
                    className="h-px bg-flextock-neon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 lg:px-0 lg:py-32">
          <div className="mb-24 max-w-2xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {localizedContent.eyebrow}
            </p>
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
              {localizedContent.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-flextock-muted">
              {localizedContent.description}
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 start-0 top-8 w-px bg-white/10" />
            <motion.div
              style={{ scaleY: progress }}
              className="absolute bottom-8 start-0 top-8 z-10 w-px origin-top bg-flextock-neon"
            />
            {localizedSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isActive = activeStep === index;

              return (
                <article
                  key={step.number}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  className={`relative min-h-[78vh] border-s ps-8 pt-2 transition-opacity md:ps-12 ${
                    isActive
                      ? "border-flextock-neon opacity-100"
                      : "border-flextock-line opacity-45"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => selectStep(index)}
                    aria-current={isActive ? "step" : undefined}
                    className="group mb-10 flex items-center gap-4 text-start"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center ${
                        isActive
                          ? "bg-flextock-neon text-flextock-navy"
                          : "bg-flextock-panelStrong text-flextock-muted"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <div
                      className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] ${
                        isActive
                          ? "text-flextock-foreground"
                          : "text-flextock-muted"
                      }`}
                    >
                      <span className="font-mono">{step.number}</span>
                      <span className="h-px w-8 bg-white/20" />
                      <span>{step.label}</span>
                    </div>
                    <span className="sr-only">View this operating signal</span>
                  </button>
                  <h3
                    className={`max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-5xl ${
                      isActive
                        ? "text-flextock-foreground"
                        : "text-flextock-muted"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-8 max-w-xl text-lg leading-8 ${
                      isActive
                        ? "text-flextock-foreground"
                        : "text-flextock-muted"
                    }`}
                  >
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Menu,
  Route,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import {
  footerContent,
  fulfillmentStages,
  journeySection,
  metrics,
  services,
  siteConfig,
  solutionsSection,
  type IconName,
} from "@/constants";

const iconMap: Record<IconName, LucideIcon> = {
  box: Box,
  route: Route,
  sparkles: Sparkles,
};

export function ScrollytellingLanding() {
  const journeyRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 75%", "end 50%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="overflow-hidden bg-flextock-dark text-white">
      <section className="relative min-h-screen bg-flextock-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(210,243,76,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(32,201,151,0.12),transparent_28%)]" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <a href="#" aria-label={siteConfig.brand}>
            <Image
              src="/logos/logo.png"
              alt={siteConfig.brand}
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </a>
          <div className="hidden items-center gap-9 text-sm text-white/60 md:flex">
            {siteConfig.navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-flextock-neon hover:text-flextock-neon md:flex"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            aria-label={siteConfig.menuLabel}
            className="rounded-full border border-white/20 p-2 md:hidden"
          >
            <Menu size={18} />
          </button>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col justify-between px-6 pb-10 pt-20 lg:px-10 lg:pb-12 lg:pt-28">
          <div className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-flextock-neon"
            >
              <span className="h-2 w-2 rounded-full bg-flextock-neon" />
              {siteConfig.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="max-w-4xl text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.89] tracking-[-0.085em]"
            >
              {siteConfig.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-10 max-w-md text-lg leading-7 text-white/55"
            >
              {siteConfig.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#journey"
                className="group flex items-center gap-3 rounded-full bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-dark transition-transform hover:scale-105"
              >
                {siteConfig.primaryCta}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#journey"
                className="flex items-center gap-2 px-3 py-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                {siteConfig.secondaryCta} <ArrowDown size={15} />
              </a>
            </motion.div>
          </div>

          <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.16em] text-white/40">
            <span>{journeySection.scrollLabel}</span>
            <span>{journeySection.stepCount}</span>
          </div>
        </div>
      </section>

      <section
        ref={journeyRef}
        id="journey"
        className="relative mx-auto max-w-7xl bg-flextock-dark px-6 py-28 text-white lg:px-10 lg:py-40"
      >
        <div className="mb-24 grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-flextock-muted">
            {journeySection.eyebrow}
          </p>
          <h2 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
            {journeySection.title}
            <br />
            <span className="text-flextock-muted/70">{journeySection.titleAccent}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/20 md:left-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-5 top-0 w-px origin-top bg-flextock-neon md:left-1/2"
          />
          <div className="space-y-24 md:space-y-40">
            {fulfillmentStages.map((stage, index) => {
              const Icon = iconMap[stage.icon];
              const isEven = index % 2 === 1;

              return (
                <motion.article
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid gap-8 pl-14 md:grid-cols-2 md:gap-20 md:pl-0 ${
                    isEven ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-flextock-dark md:left-1/2 md:-translate-x-1/2 ${
                      isEven ? "md:order-2" : ""
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-flextock-neon" />
                  </div>
                  <div className={isEven ? "md:order-2" : ""}>
                    <div
                      className={`mb-7 flex items-center gap-3 text-flextock-muted ${
                        isEven ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="font-mono text-xs">{stage.number}</span>
                      <span className="h-px w-8 bg-white/30" />
                      <span className="text-xs font-medium uppercase tracking-[0.2em]">
                        {stage.label}
                      </span>
                    </div>
                    <h3 className="text-4xl font-medium leading-none tracking-[-0.06em] md:text-6xl">
                      {stage.title}
                    </h3>
                  </div>
                  <div
                    className={`flex items-end ${
                      isEven ? "md:order-1 md:justify-end" : ""
                    }`}
                  >
                    <div
                      className={`relative flex min-h-64 w-full max-w-sm flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${stage.accent} from-white/10 to-transparent p-6 ${
                        isEven ? "md:text-left" : ""
                      }`}
                    >
                      <Icon size={30} strokeWidth={1.5} />
                      <p className="max-w-xs text-base leading-6 text-flextock-foreground/90">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="bg-flextock-dark px-6 py-28 text-white lg:px-10 lg:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-flextock-muted">
              {solutionsSection.eyebrow}
            </p>
            <div>
              <h2 className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
                {solutionsSection.title}
                <br />
                <span className="text-flextock-muted/70">
                  {solutionsSection.titleAccent}
                </span>
              </h2>
              <div className="mt-16 divide-y divide-white/15 border-y border-white/15">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-xs text-flextock-muted/70">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.03em]">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-flextock-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-28 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-5xl font-medium tracking-[-0.07em] md:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-flextock-muted/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-flextock-dark px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-20 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-6xl font-medium leading-[0.9] tracking-[-0.08em] md:text-8xl">
              {footerContent.title}
              <br />
              <span className="text-flextock-neon">{footerContent.titleAccent}</span>
            </h2>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group flex w-fit items-center gap-3 rounded-full bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-dark"
            >
              {footerContent.cta}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
          <div className="flex flex-col justify-between gap-5 pt-7 text-sm text-white/40 md:flex-row">
            <span>
              {siteConfig.brand} — {siteConfig.footerTagline}
            </span>
            <span>
              © {siteConfig.copyrightYear} {siteConfig.brand}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

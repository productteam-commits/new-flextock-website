"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  arabicCopy,
  navigation,
  solutionDetails,
  solutionsOverviewContent,
  solutionCards,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function SolutionsOverview() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content =
    locale === "ar"
      ? arabicCopy.solutionsOverview
      : solutionsOverviewContent;
  const solutions =
    locale === "ar" ? arabicCopy.navigation.solutions : navigation.solutions;

  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <section className="px-6 pb-20 pt-20 lg:px-10 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {content.eyebrow}
            </p>
            <h1 className="mt-7 text-5xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-flextock-muted">
              {content.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-flextock-line bg-flextock-panel px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-px border-y border-flextock-line bg-flextock-line md:grid-cols-2">
          {solutions.map((solution, index) => {
            const detail = solutionDetails[solution.slug];
            const card = solutionCards.find(
              (item) => item.slug === solution.slug,
            );

            if (!detail || !card) {
              return null;
            }

            return (
              <motion.article
                key={solution.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                className="group bg-flextock-panel p-5 sm:p-8"
              >
                <Link href={`/solutions/${solution.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-flextock-navy">
                    <Image
                      src={detail.image.src}
                      alt={detail.image.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-xs text-flextock-neon">
                        0{index + 1}
                      </p>
                      <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em]">
                        {solution.name}
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-6 text-flextock-muted">
                        {solution.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-flextock-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-flextock-neon"
                    />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-y border-flextock-line bg-flextock-panel p-8 sm:p-12 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            {content.ctaTitle}
          </h2>
          <Link
            href="/quote"
            className="inline-flex w-fit shrink-0 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {content.cta}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}

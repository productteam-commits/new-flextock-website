"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import {
  supportingVisualAssets,
  supportingVisualContent,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

type SupportingVisualKey = keyof typeof supportingVisualContent.en;

export function SupportingVisual({
  pageKey,
}: {
  pageKey: SupportingVisualKey;
}) {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const content = supportingVisualContent[locale][pageKey];
  const imageSource = supportingVisualAssets[pageKey];

  if (!imageSource) {
    return null;
  }

  return (
    <section className="border-y border-flextock-line bg-flextock-panel px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] bg-flextock-navy">
            <Image
              src={imageSource}
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="flex flex-wrap justify-between gap-3 border-b border-flextock-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-flextock-muted">
            <span>flextock / {pageKey}</span>
            <span>{content.note}</span>
          </figcaption>
        </motion.figure>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.kicker}
          </p>
          <h2 className="mt-6 max-w-lg text-3xl font-medium leading-tight tracking-[-0.05em] text-flextock-foreground sm:text-4xl">
            {content.title}
          </h2>
          <div className="mt-10 border-y border-flextock-line">
            {content.labels.map((label, index) => (
              <div
                key={label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-flextock-line py-4 last:border-b-0"
              >
                <span className="font-mono text-[10px] text-flextock-neon">
                  0{index + 1}
                </span>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-flextock-foreground">
                    {label}
                  </span>
                  <span className="text-end text-xs text-flextock-muted">
                    {content.statuses[index]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

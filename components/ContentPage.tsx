"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  arabicCopy,
  companyTimeline,
  integrationLogos,
  resourceEntries,
  siteConfig,
  supportingCtaContent,
  supportingPages,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { SupportingVisual } from "@/components/SupportingVisual";

type ContentPageKey = keyof typeof supportingPages;
type PageSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};
type PageImage = { src: string; alt: string };

export function ContentPage({ pageKey }: { pageKey: ContentPageKey }) {
  const { locale } = useLocale();
  const basePage = supportingPages[pageKey];
  const page =
    locale === "ar"
      ? arabicCopy.pages[pageKey]
      : basePage;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;
  const ctaContent = supportingCtaContent[locale];
  const reduceMotion = useReducedMotion();
  const image = (
    "image" in page && page.image
      ? page.image
      : "image" in basePage
        ? basePage.image
        : undefined
  ) as PageImage | undefined;
  const sections =
    "sections" in page
      ? (page.sections as PageSection[])
      : "sections" in basePage
        ? (basePage.sections as PageSection[])
        : [];
  const capabilities =
    "capabilities" in page && Array.isArray(page.capabilities)
      ? (page.capabilities as string[])
      : [];

  return (
    <main className="min-h-screen bg-flextock-navy text-flextock-foreground">
      <section className="px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {page.eyebrow}
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-flextock-muted">
              {page.description}
            </p>
          </motion.div>
          {image ? (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
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
          ) : null}
        </div>
      </section>

      <SupportingVisual pageKey={pageKey} />

      <section className="border-y border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="border-y border-flextock-line">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="grid gap-6 border-b border-flextock-line py-8 last:border-b-0 lg:grid-cols-[0.2fr_0.8fr] lg:gap-10 lg:py-10"
              >
                <span className="font-mono text-xs text-flextock-neon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-flextock-neon">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em]">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-flextock-muted">
                    {section.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-flextock-foreground"
                      >
                        <Check size={16} className="text-flextock-neon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
          {capabilities.length > 0 ? (
            <div className="mt-16 border-y border-flextock-line">
              <div className="grid sm:grid-cols-3">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 border-b border-flextock-line px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0"
                  >
                    <span className="font-mono text-[10px] text-flextock-neon">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-flextock-foreground">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {pageKey === "technology" ? (
            <div className="mt-16 border-y border-flextock-line py-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-flextock-muted">
                {locale === "ar"
                  ? "منصات التجارة المتصلة"
                  : "Connected commerce platforms"}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {integrationLogos.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex h-20 items-center justify-center border border-flextock-line bg-flextock-navy p-4"
                  >
                    <Image
                      src={integration.src}
                      alt={integration.name}
                      width={120}
                      height={44}
                      style={{ width: "auto" }}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {pageKey === "resources" ? (
            <div className="mt-16 border-y border-flextock-line">
              {resourceEntries[locale].map((entry, index) => (
                <motion.article
                  key={entry.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  className="grid gap-4 border-b border-flextock-line py-6 last:border-b-0 sm:grid-cols-[0.2fr_1fr_auto] sm:items-start sm:gap-8"
                >
                  <span className="font-mono text-xs text-flextock-neon">
                    {entry.type}
                  </span>
                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.04em]">
                      {entry.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-flextock-muted">
                      {entry.description}
                    </p>
                  </div>
                  <span className="text-xs text-flextock-muted sm:text-end">
                    {entry.meta}
                  </span>
                </motion.article>
              ))}
            </div>
          ) : null}
          {pageKey === "company" ? (
            <div className="mt-16 border-y border-flextock-line">
              {companyTimeline[locale].map((item) => (
                <article
                  key={item.year}
                  className="grid gap-4 border-b border-flextock-line py-6 last:border-b-0 sm:grid-cols-[0.2fr_0.8fr] sm:gap-8"
                >
                  <span className="font-mono text-xs text-flextock-neon">
                    {item.year}
                  </span>
                  <div>
                    <h2 className="text-2xl font-medium tracking-[-0.04em]">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-flextock-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-y border-flextock-line bg-flextock-panel p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-flextock-neon">
              {ctaContent.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              {ctaContent.title}
            </h2>
          </div>
          <Link
            href="/quote"
                className="inline-flex w-fit shrink-0 items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {siteCopy.primaryCta}
            <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { partnerLogos } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function PartnersSection() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="partners"
      className="border-t border-flextock-line bg-flextock-navy px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {locale === "ar" ? "شركاء النجاح" : "Trusted partners"}
          </p>
          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.05em] text-flextock-foreground sm:text-4xl">
            {locale === "ar"
              ? "علامات تجارية تنمو مع فلكستوك."
              : "Brands operating and growing with Flextock."}
          </h2>
        </div>

        <div className="mt-12">
          <div className="relative h-px bg-flextock-line" aria-hidden="true">
            <motion.span
              initial={reduceMotion ? false : { scaleX: 0.2 }}
              animate={
                reduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: [0.2, 1, 0.2] }
              }
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
              }
              style={{ transformOrigin: locale === "ar" ? "right" : "left" }}
              className="absolute inset-y-0 start-0 w-1/3 bg-flextock-neon"
            />
          </div>
          <div className="flex items-center justify-between py-3 text-[10px] uppercase tracking-[0.16em] text-flextock-muted">
            <span>
              {locale === "ar" ? "شركاء يعملون معنا" : "Operating with us"}
            </span>
            <span aria-hidden="true">●</span>
          </div>
        </div>

        <div className="overflow-hidden border-y border-flextock-line">
          <motion.div
            className="flex w-max items-center gap-10 py-8 sm:gap-20"
            animate={
              reduceMotion
                ? { x: 0 }
                : { x: ["0%", "-50%"] }
            }
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { duration: 18, repeat: Infinity, ease: "linear" }
            }
          >
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-24 min-w-52 items-center justify-center px-8"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={220}
                  height={90}
                  style={{ width: "auto" }}
                  className={`max-h-16 w-auto max-w-full object-contain ${
                    partner.name === "Cleo Laboratories"
                      ? "invert mix-blend-screen"
                      : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

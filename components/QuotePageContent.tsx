"use client";

import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

import { arabicCopy, quotePage } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";
import { QuoteForm } from "@/components/QuoteForm";

export function QuotePageContent() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.quote : quotePage;

  return (
    <main className="min-h-screen bg-flextock-navy px-6 py-20 text-flextock-foreground lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-flextock-muted transition-colors hover:text-flextock-neon"
          >
            <ArrowLeft size={15} className="rtl:rotate-180" />
            {content.backLabel}
          </Link>
          <p className="mt-24 text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h1 className="mt-7 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
          <ul className="mt-10 space-y-4">
            {content.proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm text-flextock-foreground"
              >
                <Check size={16} className="text-flextock-neon" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}

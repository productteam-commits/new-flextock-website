"use client";

import { ArrowUpRight } from "lucide-react";

import { reviewsContent } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function ReviewsSection() {
  const { locale } = useLocale();
  const content = locale === "ar" ? reviewsContent.ar : reviewsContent.en;

  return (
    <section
      id="reviews"
      className="border-t border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
            {content.eyebrow}
          </p>
          <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-flextock-muted">
            {content.description}
          </p>
          <a
            href={content.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-flextock-foreground transition-colors hover:text-flextock-neon"
          >
            {content.sourceCta}
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-flextock-muted">
            <span className="text-lg font-semibold normal-case text-[#4285f4]">G</span>
            <span>{content.sourceLabel}</span>
          </div>
          <div className="grid border-y border-flextock-line sm:grid-cols-3">
            {content.reviews.map((review) => (
              <article
                key={review.name}
                className="flex min-h-64 flex-col border-b border-flextock-line bg-flextock-navy p-6 last:border-b-0 sm:border-b-0 sm:border-s sm:first:border-s-0"
              >
                <span
                  className="text-5xl leading-none text-flextock-neon"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="mt-5 flex-1 text-lg leading-8 text-flextock-foreground">
                  {review.quote}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flextock-neon text-sm font-semibold text-flextock-navy">
                    {review.initial}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-flextock-foreground">
                      {review.name}
                    </p>
                    <p className="mt-1 text-xs text-flextock-muted">{review.meta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

import { arabicCopy, quotePage } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function QuoteForm() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.quote : quotePage;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 550);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[30rem] flex-col justify-center border-y border-flextock-line bg-flextock-panel p-8 sm:p-12"
      >
        <CheckCircle2 size={32} className="text-flextock-neon" />
        <h2 className="mt-8 text-3xl font-medium tracking-[-0.05em] text-flextock-foreground">
          {content.successTitle}
        </h2>
        <p className="mt-4 max-w-md leading-7 text-flextock-muted">
          {content.successDescription}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="border-y border-flextock-line bg-flextock-panel p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.name.label}</span>
          <input
            required
            name="name"
            placeholder={content.fields.name.placeholder}
            className="w-full rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none placeholder:text-flextock-muted/60 focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          />
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.email.label}</span>
          <input
            required
            type="email"
            name="email"
            placeholder={content.fields.email.placeholder}
            className="w-full rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none placeholder:text-flextock-muted/60 focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          />
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.brand.label}</span>
          <input
            required
            name="brand"
            placeholder={content.fields.brand.placeholder}
            className="w-full rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none placeholder:text-flextock-muted/60 focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          />
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.phone.label}</span>
          <input
            required
            type="tel"
            name="phone"
            placeholder={content.fields.phone.placeholder}
            className="w-full rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none placeholder:text-flextock-muted/60 focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          />
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.industry.label}</span>
          <select
            required
            name="industry"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.industry.placeholder}
            </option>
            {content.industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.volume.label}</span>
          <select
            required
            name="volume"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.volume.placeholder}
            </option>
            {content.volumes.map((volume) => (
              <option key={volume} value={volume}>
                {volume}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.interest.label}</span>
          <select
            required
            name="interest"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.interest.placeholder}
            </option>
            {content.interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.tax.label}</span>
          <select
            required
            name="tax"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.tax.placeholder}
            </option>
            {content.taxOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.businessType.label}</span>
          <select
            required
            name="businessType"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.businessType.placeholder}
            </option>
            {content.businessTypes.map((businessType) => (
              <option key={businessType} value={businessType}>
                {businessType}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.sellingMethod.label}</span>
          <select
            required
            name="sellingMethod"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.sellingMethod.placeholder}
            </option>
            {content.sellingMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2 text-sm text-flextock-muted">
          <span>{content.fields.referral.label}</span>
          <select
            required
            name="referral"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
          >
            <option value="" disabled>
              {content.fields.referral.placeholder}
            </option>
            {content.referralSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-6 block space-y-2 text-sm text-flextock-muted">
        <span>{content.businessNeedLabel}</span>
        <textarea
          name="businessNeed"
          rows={4}
          placeholder={content.businessNeedPlaceholder}
          className="w-full resize-y border border-flextock-line bg-flextock-navy px-4 py-3.5 text-flextock-foreground outline-none placeholder:text-flextock-muted/60 focus:border-flextock-neon focus:ring-1 focus:ring-flextock-neon"
        />
      </label>
      <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-flextock-muted">
        <input
          required
          type="checkbox"
          name="consent"
          className="mt-1 h-4 w-4 accent-flextock-neon"
        />
        <span>{content.privacyLabel}</span>
      </label>
      <p className="mt-4 text-xs text-flextock-muted">{content.responseNote}</p>
      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-8 flex items-center gap-3 bg-flextock-neon px-5 py-3 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? content.submittingLabel : content.submitLabel}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}

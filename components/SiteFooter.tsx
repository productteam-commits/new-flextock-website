"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  arabicCopy,
  ctaContent,
  footerContent,
  socialLinks,
  siteConfig,
} from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function SiteFooter() {
  const { locale } = useLocale();
  const content = locale === "ar" ? arabicCopy.cta : ctaContent;
  const footer = locale === "ar" ? arabicCopy.footer : footerContent;
  const siteCopy = locale === "ar" ? arabicCopy.site : siteConfig;

  return (
    <>
      <section
        id="contact"
        className="border-t border-flextock-line bg-flextock-panel px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-flextock-neon">
              {content.eyebrow}
            </p>
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.06em] text-flextock-foreground sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-flextock-muted">
              {content.description}
            </p>
          </div>
          <Link
            href="/quote"
                className="group flex w-fit items-center gap-3 bg-flextock-neon px-6 py-3.5 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {content.cta}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180"
            />
          </Link>
        </div>
      </section>

      <footer className="bg-flextock-navy px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-flextock-line pt-8 text-sm text-flextock-muted md:flex-row">
          <div>
            <Link href="/" aria-label={siteCopy.logoAlt}>
              <Image
                src="/logos/logo.png"
                alt={siteCopy.logoAlt}
                width={120}
                height={34}
                style={{ width: "auto" }}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 max-w-sm leading-6">{footer.description}</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block text-sm text-flextock-foreground transition-colors hover:text-flextock-neon"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center text-flextock-muted transition-opacity hover:opacity-75"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      style={{ width: "auto" }}
                      className="h-4 w-auto object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <p className="self-end">{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}

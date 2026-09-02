"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { arabicCopy, localeConfig, navigation, siteConfig } from "@/constants";
import { useLocale } from "@/components/LocaleProvider";

export function GlobalNavbar() {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const copy = locale === "ar" ? arabicCopy.site : siteConfig;
  const primaryNavigation =
    locale === "ar" ? arabicCopy.navigation.primary : navigation.primary;
  const solutions =
    locale === "ar" ? arabicCopy.navigation.solutions : navigation.solutions;
  const isSolutionsRoute = pathname.startsWith("/solutions");

  useEffect(() => {
    if (!isSolutionsOpen && !isMobileOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        isSolutionsOpen &&
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsSolutionsOpen(false);
        setIsMobileOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileOpen, isSolutionsOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-flextock-line bg-flextock-navy/95">
      <nav
        aria-label={copy.mainNavLabel}
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link href="/" aria-label={copy.logoAlt}>
          <Image
            src="/logos/logo.png"
            alt={copy.logoAlt}
            width={140}
            height={40}
            priority
            style={{ width: "auto" }}
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div ref={solutionsMenuRef} className="relative">
            <button
              type="button"
              aria-expanded={isSolutionsOpen}
              aria-haspopup="menu"
              aria-controls="solutions-menu"
              onClick={() => setIsSolutionsOpen((open) => !open)}
              className={`flex items-center gap-1.5 text-sm transition-colors hover:text-flextock-foreground ${
                isSolutionsRoute
                  ? "text-flextock-foreground"
                  : "text-flextock-muted"
              }`}
            >
              {copy.solutionsLabel}
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  isSolutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isSolutionsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  id="solutions-menu"
                  role="menu"
                  className="absolute left-1/2 top-12 w-[35rem] -translate-x-1/2 rounded-2xl border border-flextock-line bg-flextock-panel p-3 shadow-xl shadow-black/20"
                >
                  <Link
                    href="/solutions"
                    role="menuitem"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="mb-2 flex items-center justify-between border-b border-flextock-line px-4 py-3 text-sm font-medium text-flextock-neon"
                  >
                    {copy.solutionsOverviewLabel}
                    <ArrowUpRight size={15} />
                  </Link>
                  <div className="grid grid-cols-2 gap-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.slug}
                        href={`/solutions/${solution.slug}`}
                        role="menuitem"
                        onClick={() => setIsSolutionsOpen(false)}
                        className="group rounded-xl p-4 transition-colors hover:bg-white/5"
                      >
                        <span className="flex items-center justify-between text-sm font-medium text-flextock-foreground">
                          {solution.name}
                          <ArrowUpRight
                            size={15}
                            className="text-flextock-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                        <span className="mt-2 block text-xs leading-5 text-flextock-muted">
                          {solution.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {primaryNavigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              className={`text-sm transition-colors hover:text-flextock-foreground ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-flextock-foreground"
                  : "text-flextock-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="flex items-center gap-2 bg-flextock-neon px-5 py-2.5 text-sm font-medium text-flextock-navy transition-colors hover:bg-flextock-foreground"
          >
            {copy.primaryCta}
            <ArrowUpRight size={15} />
          </Link>
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
          >
            {localeConfig[locale].switchLabel}
          </button>
        </div>

        <button
          type="button"
          aria-label={
            isMobileOpen ? copy.closeMenuLabel : copy.menuLabel
          }
          aria-expanded={isMobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileOpen((open) => !open)}
          className="rounded-full border border-flextock-line p-2 text-flextock-foreground lg:hidden"
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-flextock-line px-6 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.18em] text-flextock-muted">
                {copy.solutionsLabel}
              </span>
              <Link
                href="/solutions"
                onClick={() => setIsMobileOpen(false)}
                className="text-sm font-medium text-flextock-neon"
              >
                {copy.solutionsOverviewLabel}
              </Link>
              {solutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="pl-3 text-sm text-flextock-foreground"
                >
                  {solution.name}
                </Link>
              ))}
              {primaryNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm text-flextock-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quote"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 flex w-fit items-center gap-2 bg-flextock-neon px-5 py-2.5 text-sm font-medium text-flextock-navy"
              >
                {copy.primaryCta}
                <ArrowUpRight size={15} />
              </Link>
              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="w-fit text-sm text-flextock-muted transition-colors hover:text-flextock-foreground"
              >
                {localeConfig[locale].switchLabel}
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { localeConfig, type Locale } from "@/constants";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const direction = localeConfig[locale].direction;

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("flextock-locale");

    if (storedLocale !== "en" && storedLocale !== "ar") {
      return;
    }

    const restoreLocale = window.setTimeout(() => {
      setLocale(storedLocale);
    }, 0);

    return () => window.clearTimeout(restoreLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
    window.localStorage.setItem("flextock-locale", locale);
  }, [direction, locale]);

  const value = useMemo(
    () => ({ locale, setLocale, direction }),
    [direction, locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}

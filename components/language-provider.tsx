"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SITE } from "@/lib/site";
import { translations, type Dict, type Lang } from "@/lib/translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Translation dictionary for the active language. */
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "mts-lang";

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start from "en" so the server-rendered HTML and the first client
  // render agree (no hydration mismatch). We refine it on mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) {
      setLangState(stored);
      return;
    }
    // Fall back to the browser's preferred language on first visit.
    if (navigator.language?.toLowerCase().startsWith("fr")) {
      setLangState("fr");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "en" ? "fr" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}

/** Sets a localized <title> on the client when the language changes. */
export function useLocalizedTitle(title: string) {
  useEffect(() => {
    if (title) {
      document.title = `${title} · ${SITE.name}`;
    }
  }, [title]);
}

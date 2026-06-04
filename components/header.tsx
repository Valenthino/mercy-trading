"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Close, Menu } from "@/components/icons";
import { useI18n } from "@/components/language-provider";
import { NAV } from "@/lib/site";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function Header() {
  const { t, lang, toggle } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change and lock body scroll while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const current = normalize(pathname || "/");
  const solid = scrolled || open;

  const togglePill = solid
    ? "border-ink/15 text-ink hover:border-ink/40"
    : "border-white/40 text-white hover:border-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/[0.07] bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-px flex h-[68px] items-center justify-between gap-4">
        <Logo className={solid ? "text-ink" : "text-white"} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(({ key, href }) => {
            const active = current === normalize(href);
            return (
              <Link
                key={key}
                href={href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? active
                      ? "text-brand-700"
                      : "text-ink/70 hover:text-ink"
                    : active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                }`}
              >
                {t.nav[key]}
                {active ? (
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${
                      solid ? "bg-brand-600" : "bg-gold-300"
                    }`}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch language to ${t.meta.langLabel}`}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${togglePill}`}
          >
            <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
            <span className={lang === "fr" ? "opacity-100" : "opacity-40"}>FR</span>
          </button>

          <Link
            href="/contact"
            className="hidden btn btn-gold !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            {t.nav.quote}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${togglePill}`}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-ink/[0.07] bg-cream lg:hidden">
          <nav className="container-px flex flex-col py-4">
            {NAV.map(({ key, href }) => {
              const active = current === normalize(href);
              return (
                <Link
                  key={key}
                  href={href}
                  className={`rounded-xl px-3 py-3 text-base font-medium ${
                    active ? "bg-brand-50 text-brand-700" : "text-ink/80 hover:bg-black/[0.03]"
                  }`}
                >
                  {t.nav[key]}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-gold mt-3 w-full">
              {t.nav.quote}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

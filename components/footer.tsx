"use client";

import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Mail, MapPin, Phone } from "@/components/icons";
import { useI18n } from "@/components/language-provider";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white/80">
      <div className="container-px grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 text-white">
            <LogoMark className="h-10 w-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold tracking-tight">
                Mercy Trading
              </span>
              <span className="mt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-gold-300">
                Solutions
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {t.footer.tagline}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
            <MapPin className="h-4 w-4 text-gold-300" />
            {t.footer.basedIn} 🇨🇮
          </p>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map(({ key, href }) => (
              <li key={key}>
                <Link href={href} className="text-white/70 transition-colors hover:text-gold-300">
                  {t.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-start gap-3 text-white/70 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <span className="break-all">{SITE.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phoneHref}`}
                className="group flex items-start gap-3 text-white/70 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                <span>{SITE.phone}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
              <span>{t.contact.info.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {SITE.name}. {t.footer.rights}
          </p>
          <p>{SITE.director}</p>
        </div>
      </div>
    </footer>
  );
}

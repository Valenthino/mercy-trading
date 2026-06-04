"use client";

import { ButtonLink, Container } from "@/components/ui";
import { Phone } from "@/components/icons";
import { useI18n } from "@/components/language-provider";
import { SITE } from "@/lib/site";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-brand-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
      />
      <Container>
        <div className="relative mx-auto max-w-2xl py-16 text-center sm:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.home.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{t.home.cta.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href="/contact" variant="gold">
              {t.home.cta.button}
            </ButtonLink>
            <a href={`tel:${SITE.phoneHref}`} className="btn btn-light">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

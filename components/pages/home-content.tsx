"use client";

import {
  ButtonLink,
  Container,
  Eyebrow,
  FeatureCard,
  Reveal,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { PageImage } from "@/components/page-image";
import {
  Exchange,
  Globe,
  Package,
  Search,
  ShieldCheck,
  Sparkle,
  Users,
  Warehouse,
} from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";

const serviceIcons = [Package, Exchange, Warehouse, Search];
const whyIcons = [Sparkle, Users, Globe, ShieldCheck];

export function HomeContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.home);
  const h = t.home;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] flex-col justify-center overflow-hidden bg-brand-950 pt-[88px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.warehouseExterior}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/92 via-brand-950/65 to-brand-950/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-950/80 to-transparent" />

        <Container className="flex flex-1 items-center">
          <div className="max-w-3xl py-16 [text-shadow:0_2px_16px_rgba(5,38,27,0.45)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/20 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              {h.hero.badge}
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">
              {h.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {h.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="gold">
                {h.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="/services" variant="light">
                {h.hero.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-brand-950/50 backdrop-blur-sm">
          <Container>
            <dl className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
              {h.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </dl>
          </Container>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 -z-10 hidden h-40 w-40 rounded-full bg-gold-200/50 blur-2xl sm:block"
              />
              <PageImage
                src={IMAGES.forkliftLoading}
                alt="Forklift moving jute sacks of raw cashew nuts in a warehouse"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              />
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-soft sm:block">
                <div className="font-display text-3xl font-extrabold">{h.stats[1].value}</div>
                <div className="text-xs font-medium text-white/80">{h.stats[1].label}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{h.intro.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {h.intro.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">{h.intro.body1}</p>
            <p className="mt-4 leading-relaxed text-ink/70">{h.intro.body2}</p>
            <ButtonLink href="/about" variant="outline" className="mt-8">
              {t.common.moreAboutUs}
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white">
        <SectionHeading
          center
          eyebrow={h.services.eyebrow}
          title={h.services.title}
          subtitle={h.services.subtitle}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.services.items.map((item, i) => {
            const Icon = serviceIcons[i] ?? Package;
            return (
              <Reveal key={item.title} delay={i * 80}>
                <FeatureCard
                  icon={<Icon className="h-6 w-6" />}
                  title={item.title}
                  desc={item.desc}
                />
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/services" variant="primary">
            {t.common.allServices}
          </ButtonLink>
        </div>
      </Section>

      {/* Why us */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <PageImage
              src={IMAGES.inspectorClipboard}
              alt="Mercy Trading inspector checking stacked sacks of cashew nuts"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={h.why.eyebrow} title={h.why.title} />
            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {h.why.items.map((item, i) => {
                const Icon = whyIcons[i] ?? Sparkle;
                return (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink/65">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Network teaser */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.network.hero.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t.network.hero.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">{t.network.hero.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {t.network.regions.map((r) => (
                <span
                  key={r.name}
                  className="rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-sm font-medium text-ink/75"
                >
                  {r.name}
                </span>
              ))}
            </div>
            <ButtonLink href="/network" variant="outline" className="mt-8">
              {t.common.learnMore}
            </ButtonLink>
          </Reveal>
          <Reveal delay={100}>
            <PageImage
              src={IMAGES.workersBagging}
              alt="Workers bagging raw cashew nuts into export bags"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

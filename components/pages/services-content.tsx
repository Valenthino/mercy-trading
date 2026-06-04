"use client";

import { Reveal, Section } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  Check,
  Exchange,
  Package,
  Search,
  Truck,
  Users,
  Warehouse,
} from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";

const icons = [Package, Exchange, Warehouse, Users, Search, Truck];

export function ServicesContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.services);
  const s = t.services;

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        subtitle={s.hero.subtitle}
        image={IMAGES.forkliftLoading}
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {s.items.map((item, i) => {
            const Icon = icons[i] ?? Package;
            return (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <article className="card flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-ink">{item.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 border-t border-ink/[0.06] pt-5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

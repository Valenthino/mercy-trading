"use client";

import { Eyebrow, Reveal, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PageImage } from "@/components/page-image";
import { ShieldCheck, Warehouse } from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";

export function ProductsContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.products);
  const p = t.products;

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
        image={IMAGES.workersBagging}
      />

      {/* Origin */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <PageImage
              src={IMAGES.forkliftLoading}
              alt="Stacked jute sacks of raw cashew nuts in a warehouse"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{p.hero.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {p.origin.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">{p.origin.body}</p>
          </Reveal>
        </div>
      </Section>

      {/* Specifications */}
      <Section className="bg-white">
        <SectionHeading center title={p.specs.title} subtitle={p.specs.subtitle} />
        <Reveal className="mx-auto mt-10 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-ink/[0.08] shadow-card">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-50">
                <tr>
                  <th className="px-6 py-4 font-display font-semibold text-ink">
                    {p.specs.headerParam}
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-ink">
                    {p.specs.headerValue}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/[0.06] bg-white">
                {p.specs.rows.map((row) => (
                  <tr key={row.param} className="transition-colors hover:bg-cream/60">
                    <td className="px-6 py-4 font-medium text-ink">{row.param}</td>
                    <td className="px-6 py-4 text-ink/70">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Season & Quality */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Warehouse className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.season.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{p.season.body}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{p.quality.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/70">{p.quality.body}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

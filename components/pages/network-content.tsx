"use client";

import { Reveal, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Building, Globe, MapPin, Users, Warehouse } from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";

const blockIcons = [Users, Building, Globe, Warehouse];

export function NetworkContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.network);
  const n = t.network;

  return (
    <>
      <PageHero
        eyebrow={n.hero.eyebrow}
        title={n.hero.title}
        subtitle={n.hero.subtitle}
        image={IMAGES.inspectorClipboard}
      />

      {/* Network blocks */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {n.blocks.map((block, i) => {
            const Icon = blockIcons[i] ?? Globe;
            return (
              <Reveal key={block.title} delay={(i % 2) * 80}>
                <div className="card h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold text-ink">{block.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink/65">{block.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Regions */}
      <Section className="bg-white">
        <SectionHeading center title={n.regionsTitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {n.regions.map((region, i) => (
            <Reveal key={region.name} delay={(i % 3) * 70}>
              <div className="flex items-start gap-4 rounded-2xl border border-ink/[0.06] bg-cream/50 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{region.name}</h3>
                  <p className="mt-1 text-sm text-ink/65">{region.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section>
        <SectionHeading center title={n.how.title} />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {n.how.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="relative">
                <span className="font-display text-5xl font-extrabold text-brand-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

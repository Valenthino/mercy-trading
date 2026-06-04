"use client";

import {
  Eyebrow,
  FeatureCard,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { CtaBand } from "@/components/cta-band";
import { DirectorAvatar } from "@/components/director-avatar";
import { PageHero } from "@/components/page-hero";
import { PageImage } from "@/components/page-image";
import {
  Building,
  Globe,
  ShieldCheck,
  Sparkle,
  Truck,
  Users,
} from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";

const valueIcons = [ShieldCheck, Sparkle, Users, Truck];

export function AboutContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.about);
  const a = t.about;

  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
        image={IMAGES.warehouseExterior}
      />

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{a.story.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {a.story.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">{a.story.body1}</p>
            <p className="mt-4 leading-relaxed text-ink/70">{a.story.body2}</p>
          </Reveal>
          <Reveal delay={100}>
            <PageImage
              src={IMAGES.workersBagging}
              alt="Workers bagging raw cashew nuts for export"
              className="aspect-[5/4] w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </Section>

      {/* Director */}
      <Section className="bg-white">
        <Reveal>
          <Eyebrow>{a.director.eyebrow}</Eyebrow>
          <div className="mt-6 grid gap-8 rounded-3xl bg-gradient-to-br from-brand-950 to-brand-800 p-8 text-white shadow-soft sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-3">
              <DirectorAvatar />
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-display text-2xl font-bold">{a.director.name}</h2>
              <p className="mt-1 font-medium text-gold-300">{a.director.role}</p>
              <p className="mt-5 leading-relaxed text-white/75">{a.director.bio1}</p>
              <p className="mt-4 leading-relaxed text-white/75">{a.director.bio2}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <Globe className="h-8 w-8 text-brand-600" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {a.mission.missionTitle}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{a.mission.missionBody}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full">
              <Sparkle className="h-8 w-8 text-gold-500" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink">
                {a.mission.visionTitle}
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">{a.mission.visionBody}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <SectionHeading center eyebrow={a.values.eyebrow} title={a.values.title} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.items.map((item, i) => {
            const Icon = valueIcons[i] ?? ShieldCheck;
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
      </Section>

      {/* CCA */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-200 bg-brand-50 p-8 text-center sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Building className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
              {a.cca.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">{a.cca.body}</p>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}

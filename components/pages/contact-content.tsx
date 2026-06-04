"use client";

import { Eyebrow, Reveal, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Mail, MapPin, Phone, Users } from "@/components/icons";
import { useI18n, useLocalizedTitle } from "@/components/language-provider";
import { IMAGES } from "@/lib/assets";
import { SITE } from "@/lib/site";

export function ContactContent() {
  const { t } = useI18n();
  useLocalizedTitle(t.nav.contact);
  const c = t.contact;

  const items = [
    { icon: Mail, label: c.info.emailLabel, value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: c.info.phoneLabel, value: SITE.phone, href: `tel:${SITE.phoneHref}` },
    { icon: Users, label: c.info.directorLabel, value: SITE.director, href: undefined },
    { icon: MapPin, label: c.info.locationLabel, value: c.info.location, href: undefined },
  ];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        image={IMAGES.warehouseExterior}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact details */}
          <Reveal>
            <Eyebrow>{t.common.getInTouch}</Eyebrow>
            <div className="mt-6 space-y-4">
              {items.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-wider text-ink/45">
                        {label}
                      </div>
                      <div className="mt-0.5 break-words font-medium text-ink">{value}</div>
                    </div>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-2xl border border-ink/[0.06] bg-white p-4 shadow-card transition-colors hover:border-brand-200"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-ink/[0.06] bg-white p-4 shadow-card"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100}>
            <div className="card sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ink">{c.form.title}</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

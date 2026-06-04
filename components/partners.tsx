"use client";

import { Reveal, Section, SectionHeading } from "@/components/ui";
import { Sparkle } from "@/components/icons";
import { useI18n } from "@/components/language-provider";

/**
 * "Trusted by" wall of partner / institutional logos rendered as styled name
 * cards (used where brand logo files aren't available).
 */
export function Partners({ background = "cream" }: { background?: "cream" | "white" }) {
  const { t } = useI18n();
  const p = t.partners;
  const onWhite = background === "white";

  return (
    <Section className={onWhite ? "bg-white" : ""}>
      <SectionHeading center eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {p.items.map((item, i) => (
          <Reveal key={item.name} delay={(i % 4) * 60} className="w-[calc(50%-0.5rem)] sm:w-52">
            <div
              className={`flex h-full flex-col items-center justify-center rounded-2xl border border-ink/[0.07] px-4 py-6 text-center transition-colors hover:border-brand-200 ${
                onWhite ? "bg-cream/60 hover:bg-cream" : "bg-white hover:bg-white"
              }`}
            >
              <span className="font-display text-base font-bold leading-tight tracking-tight text-ink">
                {item.name}
              </span>
              <span className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-ink/45">
                {item.role}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-9 flex items-center justify-center gap-2 text-center text-sm font-semibold text-brand-700">
        <Sparkle className="h-4 w-4 text-gold-500" />
        {p.conference}
      </p>
    </Section>
  );
}

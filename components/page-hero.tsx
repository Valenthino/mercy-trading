import { Container, Eyebrow } from "@/components/ui";

/** Compact hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 pt-[68px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-900/60" />
      <Container>
        <div className="max-w-3xl py-20 sm:py-28 [text-shadow:0_2px_16px_rgba(5,38,27,0.5)]">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}

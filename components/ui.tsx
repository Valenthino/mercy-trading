"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";

/* ----------------------------- layout helpers ---------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container-px ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* ------------------------------ scroll reveal ----------------------------- */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------- typography ------------------------------- */

export function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${
        light ? "text-gold-300" : "text-brand-600"
      } ${className}`}
    >
      <span
        className={`h-px w-6 ${light ? "bg-gold-300/60" : "bg-brand-500/50"}`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow ? (
        <Eyebrow light={light} className={center ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-ink/65"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/* --------------------------------- buttons -------------------------------- */

type Variant = "primary" | "gold" | "outline" | "light";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {showIcon ? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
    </>
  );
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={`group ${cls}`}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`group ${cls}`}>
      {inner}
    </Link>
  );
}

/* ---------------------------------- cards --------------------------------- */

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-4xl font-extrabold text-white sm:text-5xl">{value}</div>
      <div className="mt-1 text-sm font-medium text-white/70">{label}</div>
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  desc,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div className={`card group h-full ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{desc}</p>
    </div>
  );
}

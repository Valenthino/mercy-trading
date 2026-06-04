import Link from "next/link";

/**
 * Brand mark: a rounded badge with a cashew-kernel arc, paired with the
 * Mercy Trading Solutions wordmark. The wordmark uses `currentColor`, so it
 * adapts to dark or light backgrounds via the parent's text color.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Mercy Trading Solutions — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-extrabold tracking-tight">
          Mercy Trading
        </span>
        <span className="mt-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-gold-500">
          Solutions
        </span>
      </span>
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mts-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c9d64" />
          <stop offset="100%" stopColor="#0c4230" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#mts-badge)" />
      {/* Cashew-kernel arc */}
      <path
        d="M26 12.5a9 9 0 1 0 0 15"
        fill="none"
        stroke="#e1b85a"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle cx="27.5" cy="20" r="2.1" fill="#f4e9c8" />
    </svg>
  );
}

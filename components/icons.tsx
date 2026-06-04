// Lightweight inline SVG icons. They inherit color via `currentColor`
// and accept a className for sizing.

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function Leaf({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 4 13c0-6 5-9 16-9 0 11-3 16-9 16Z" />
      <path d="M4 20c2-5 5-8 9-10" />
    </svg>
  );
}

export function Globe({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </svg>
  );
}

export function Warehouse({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 21V8l9-4 9 4v13" />
      <path d="M7 21v-7h10v7M7 17h10" />
    </svg>
  );
}

export function ShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Truck({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function Exchange({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </svg>
  );
}

export function Search({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function Users({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.2 3.2 0 0 1 0 6.5M21 20c0-2.7-1.7-5-4-5.7" />
    </svg>
  );
}

export function Package({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}

export function Building({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 21V4h10v17M15 9h4v12M8 8h2M8 12h2M8 16h2" />
    </svg>
  );
}

export function Anchor({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13M5 13c0 4 3.5 7 7 7s7-3 7-7M4 13h3M17 13h3" />
    </svg>
  );
}

export function Sparkle({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3c.8 4.5 2.7 6.4 7 7-4.3.6-6.2 2.5-7 7-.8-4.5-2.7-6.4-7-7 4.3-.6 6.2-2.5 7-7Z" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Phone({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6.5 3.5 9 4l1 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1 .5 2.5a2 2 0 0 1-2 2.4A16 16 0 0 1 4.1 5.5a2 2 0 0 1 2.4-2Z" />
    </svg>
  );
}

export function MapPin({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21c5-5 7-8.5 7-12a7 7 0 1 0-14 0c0 3.5 2 7 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function Menu({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

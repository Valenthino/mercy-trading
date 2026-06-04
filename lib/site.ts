// Central place for non-translatable business facts and configuration.

export const SITE = {
  name: "Mercy Trading Solutions",
  shortName: "Mercy Trading",
  director: "Mohamed Lamine Diaby",
  email: "mohamed.diaby@mercytrading.com",
  // Display + tel: link variants of the phone number.
  phone: "+225 07 88 63 63 59",
  phoneHref: "+2250788636359",
  domain: "mercytrading.com",
  url: "https://www.mercytrading.com",
} as const;

export type NavKey =
  | "home"
  | "about"
  | "services"
  | "products"
  | "network"
  | "contact";

export const NAV: { key: NavKey; href: string }[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "products", href: "/products" },
  { key: "network", href: "/network" },
  { key: "contact", href: "/contact" },
];

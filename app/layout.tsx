import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mercy Trading Solutions — Raw Cashew Nut Trading & Export",
    template: "%s · Mercy Trading Solutions",
  },
  description:
    "Mercy Trading Solutions trades and exports premium raw cashew nuts from Côte d'Ivoire and Guinea. We help importers and exporters buy and sell RCN, with bonded warehouses in Vietnam and India.",
  keywords: [
    "raw cashew nuts",
    "RCN",
    "cashew export",
    "Côte d'Ivoire cashew",
    "Ivory Coast cashew exporter",
    "cashew trading",
    "bonded warehouse Vietnam India",
    "anacarde",
    "noix de cajou brutes",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    title: "Mercy Trading Solutions — Raw Cashew Nut Trading & Export",
    description:
      "Premium raw cashew nuts from Côte d'Ivoire and Guinea. Helping importers and exporters trade RCN worldwide.",
    siteName: SITE.name,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercy Trading Solutions — Raw Cashew Nut Trading & Export",
    description:
      "Premium raw cashew nuts from Côte d'Ivoire and Guinea. Helping importers and exporters trade RCN worldwide.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

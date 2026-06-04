import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mercy Trading Solutions is a West African physical commodities company specialised in raw cashew nuts, led by Director Mohamed Lamine Diaby and working directly with the CCA in Côte d'Ivoire.",
};

export default function Page() {
  return <AboutContent />;
}

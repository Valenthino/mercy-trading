import type { Metadata } from "next";
import { NetworkContent } from "@/components/pages/network-content";

export const metadata: Metadata = {
  title: "Network",
  description:
    "From 50+ cooperatives in Côte d'Ivoire and Guinea to bonded warehouses in Vietnam and India — Mercy Trading Solutions connects origin supply with global processors.",
};

export default function Page() {
  return <NetworkContent />;
}

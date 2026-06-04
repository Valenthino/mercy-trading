import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Raw cashew nut trading, export facilitation, bonded warehousing in Vietnam and India, sourcing, quality control and logistics — everything you need to buy or sell RCN.",
};

export default function Page() {
  return <ServicesContent />;
}

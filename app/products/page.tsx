import type { Metadata } from "next";
import { ProductsContent } from "@/components/pages/products-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Premium raw cashew nuts (RCN) from Côte d'Ivoire and Guinea — typical specifications, packaging, harvest seasonality and quality assurance.",
};

export default function Page() {
  return <ProductsContent />;
}

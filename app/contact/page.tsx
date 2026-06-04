import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mercy Trading Solutions to buy or sell raw cashew nuts. Email mohamed.diaby@mercytrading.com or call +225 07 88 63 63 59.",
};

export default function Page() {
  return <ContactContent />;
}

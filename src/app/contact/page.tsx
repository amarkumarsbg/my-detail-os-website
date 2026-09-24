import type { Metadata } from "next";
import { ContactSection } from "@/components/marketing/contact-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact MY DETAIL OS for product questions, free trial help, pricing guidance, or sales conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      <ContactSection />
    </div>
  );
}

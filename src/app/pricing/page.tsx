import type { Metadata } from "next";
import { PricingSection } from "@/components/marketing/pricing-section";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Compare Starter, Growth, Business, and Enterprise plans for MY DETAIL OS workshop management software.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PageShell
      title="Transparent plans for growing workshops"
      description="Choose a plan based on branches and users. Pricing below is mock/demo data centralized for easy backend replacement later."
      showCta={false}
    >
      <PricingSection compact />
    </PageShell>
  );
}

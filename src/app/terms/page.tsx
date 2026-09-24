import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: "Read the terms of service for using MY DETAIL OS public website and SaaS platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description="These terms govern access to MY DETAIL OS public website, signup flow, and linked application services."
    >
      <article className="prose prose-sm max-w-none rounded-xl border border-border bg-card p-5 text-muted-foreground">
        <p>Use of MY DETAIL OS requires accurate account information and compliance with applicable law.</p>
        <p>Subscription, pricing, billing, and entitlement behavior is controlled by backend platform rules and contracts.</p>
        <p>Operational features are provided through the Workshop App experience tied to your organization account.</p>
      </article>
    </PageShell>
  );
}

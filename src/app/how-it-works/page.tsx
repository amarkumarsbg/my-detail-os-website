import type { Metadata } from "next";
import { howItWorksSteps } from "@/data/features";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "Start a free trial, set up your workshop, add your team, and begin managing operations with MY DETAIL OS.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <PageShell
      title="A simple path from signup to daily operations"
      description="MY DETAIL OS is designed to get workshops live quickly without a complicated rollout."
    >
      <ol className="grid gap-4 md:grid-cols-2">
        {howItWorksSteps.map((step) => (
          <li key={step.step} className="rounded-2xl border border-border bg-white p-6">
            <p className="font-heading text-4xl font-semibold text-primary/25">{step.step}</p>
            <h2 className="mt-3 text-xl font-semibold">{step.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}

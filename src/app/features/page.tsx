import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { featureGroups } from "@/data/features";
import { PageShell } from "@/features/shared/page-shell";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore workshop management, customer portal, billing, inventory, staff, rewards, and reporting features in MY DETAIL OS.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <PageShell
      title="Everything your workshop needs to run with clarity"
      description="MY DETAIL OS connects the modules your team uses every day — from job cards and customers to billing, inventory, and the customer portal."
    >
      <StaggerContainer className="space-y-3" staggerChildren={0.08}>
        {featureGroups.map((group) => (
          <StaggerItem key={group.title}>
            <article className="grid gap-4 rounded-2xl border border-border bg-white p-5 md:grid-cols-[0.85fr_1.15fr] md:items-start sm:p-6">
              <div>
                <h2 className="text-2xl font-semibold">{group.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{group.description}</p>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border bg-slate-50/60 px-3 py-2 text-sm"
                  >
                    <CheckCircle2 className="size-4 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </PageShell>
  );
}

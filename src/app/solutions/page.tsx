import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { customerPortal, workshopPortal } from "@/data/features";
import { PageShell } from "@/features/shared/page-shell";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "See how MY DETAIL OS supports workshop owners, managers, staff, and customers across operations and self-service.",
  path: "/solutions",
});

const solutionBlocks = [
  {
    title: "For Workshop Owners",
    description:
      "Centralize operations, billing visibility, and multi-branch growth in one SaaS platform.",
    bullets: ["Operational clarity", "Plan-based branch growth", "Connected customer experience"],
  },
  {
    title: "For Managers & Staff",
    description:
      "Run job cards, customer updates, inventory checks, and daily workflows without tool-switching.",
    bullets: ["Job card workflows", "Role-based access", "Shared workshop data"],
  },
  {
    title: "For Inventory & Billing",
    description:
      "Keep parts, invoices, and payments connected to the jobs that generate them.",
    bullets: ["Stock awareness", "Invoice lifecycle", "Payment tracking"],
  },
  {
    title: "For Customers",
    description:
      "Offer a self-service portal for job tracking, invoices, history, and rewards where enabled.",
    bullets: ["Track job status", "View invoices", "Access service history"],
  },
];

export default function SolutionsPage() {
  return (
    <PageShell
      title="Solutions for workshops and the customers they serve"
      description="MY DETAIL OS is built for automotive service businesses — and the people who keep them running every day."
    >
      <StaggerContainer className="grid gap-3 md:grid-cols-2" staggerChildren={0.08}>
        {solutionBlocks.map((block) => (
          <StaggerItem key={block.title}>
            <article className="h-full rounded-2xl border border-border bg-white p-5">
              <h2 className="text-xl font-semibold">{block.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{block.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                {block.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="mt-5 grid gap-3 lg:grid-cols-2" staggerChildren={0.1} delayChildren={0.15}>
        <StaggerItem>
          <article className="h-full rounded-2xl border border-border bg-slate-950 p-5 text-white">
            <h2 className="text-xl font-semibold">{workshopPortal.title}</h2>
            <p className="mt-2 text-sm text-slate-300">
              For {workshopPortal.audience.join(", ")}
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {workshopPortal.features.map((item) => (
                <li key={item} className="text-sm text-slate-200">
                  • {item}
                </li>
              ))}
            </ul>
          </article>
        </StaggerItem>
        <StaggerItem>
          <article className="h-full rounded-2xl border border-border bg-white p-5">
            <h2 className="text-xl font-semibold">{customerPortal.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For {customerPortal.audience.join(", ")}
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {customerPortal.features.map((item) => (
                <li key={item} className="text-sm text-foreground">
                  • {item}
                </li>
              ))}
            </ul>
          </article>
        </StaggerItem>
      </StaggerContainer>
    </PageShell>
  );
}

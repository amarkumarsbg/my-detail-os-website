import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Book a Demo",
  description: "Talk to MY DETAIL OS about a workshop walkthrough, pricing, or multi-branch rollout.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <PageShell
      title="Talk to sales"
      description="Share your workshop needs and we will help you understand the right plan and rollout path."
      showCta={false}
    >
      <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
        <p className="text-sm text-muted-foreground">
          Demo booking is currently routed through the contact form while backend scheduling is prepared.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact">
            <Button className="btn-marketing">Talk to Sales</Button>
          </Link>
          <Link href="/signup" target="_blank" rel="noopener noreferrer">
            <Button className="trial-cta btn-marketing group bg-teal-600 text-white hover:bg-teal-500">
              <span className="inline-flex items-center gap-1.5">
                Start Free Trial
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

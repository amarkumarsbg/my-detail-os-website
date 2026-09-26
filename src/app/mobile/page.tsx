import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  ClipboardList,
  Bell,
  Wifi,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { MobileMockup } from "@/components/marketing/mobile-mockup";
import { CtaSection } from "@/components/marketing/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Mobile App",
  description:
    "Run MY DETAIL OS on phone or tablet — workshop job cards for your team and a customer portal that works on mobile.",
  path: "/mobile",
});

const highlights = [
  {
    icon: ClipboardList,
    title: "Workshop on the go",
    description:
      "Update job cards, check bay status, and manage day-to-day operations from your phone.",
  },
  {
    icon: Bell,
    title: "Customer portal on mobile",
    description:
      "Customers track job progress, invoices, and service history without calling the front desk.",
  },
  {
    icon: Wifi,
    title: "Same live data",
    description:
      "Desktop and mobile stay in sync — no separate offline tools or spreadsheet workarounds.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based access",
    description:
      "Owners, managers, and staff see only what they need, on whatever device they use.",
  },
];

export default function MobilePage() {
  return (
    <>
      <PageShell
        title="MY DETAIL OS works on mobile too"
        description="Workshop staff and customers can use the platform from a phone or tablet — the same clear workflows, sized for the floor and the driveway."
      >
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-500/20">
              <Smartphone className="size-3.5" aria-hidden />
              Mobile experience
            </div>

            <ul className="space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/signup" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full bg-teal-600 px-7 font-semibold hover:bg-teal-500">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/#mobile">
                <Button size="lg" variant="outline" className="rounded-full border-slate-200 px-7 font-semibold">
                  Back to overview
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-center sm:gap-6 lg:pt-4">
            <MobileMockup screen="workshop" showLabel />
            <MobileMockup screen="customer" showLabel className="sm:translate-y-4" />
          </div>
        </div>
      </PageShell>

      <CtaSection
        title="Try MY DETAIL OS on any device"
        description="Start a free trial and open the workshop app or customer portal from your phone."
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}

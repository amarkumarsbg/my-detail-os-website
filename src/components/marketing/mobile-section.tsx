import Link from "next/link";
import {
  Smartphone,
  Wifi,
  Bell,
  ClipboardList,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { MobileMockup } from "@/components/marketing/mobile-mockup";

const mobilePoints = [
  {
    icon: ClipboardList,
    title: "Run job cards from the floor",
    description: "Update status, assign work, and check vehicle details without going back to a desk.",
  },
  {
    icon: Bell,
    title: "Keep customers in the loop",
    description: "Customers track progress, invoices, and history from their phone.",
  },
  {
    icon: Wifi,
    title: "Works anywhere you work",
    description: "Cloud access on phone or tablet — same workshop data, same live status.",
  },
  {
    icon: ShieldCheck,
    title: "Secure team access",
    description: "Staff see what their role allows, whether they sign in on desktop or mobile.",
  },
];

/** Homepage section — MY DETAIL OS works on mobile too. */
export function MobileSection() {
  return (
    <section id="mobile" className="relative overflow-x-clip bg-white py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 hidden h-[420px] w-[420px] rounded-full bg-teal-100/40 blur-3xl sm:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-500/20">
              <Smartphone className="size-3.5" aria-hidden />
              Mobile ready
            </p>
            <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your workshop runs on mobile too.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Owners, staff, and customers can use MY DETAIL OS from a phone or tablet — not only
              from a desktop browser.
            </p>

            <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2" staggerChildren={0.08}>
              {mobilePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <StaggerItem key={point.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{point.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{point.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <div className="mt-10">
              <Link href="/mobile">
                <Button
                  size="lg"
                  className="rounded-full bg-teal-600 px-7 font-semibold text-white hover:bg-teal-500"
                >
                  Explore mobile experience
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="relative min-w-0">
            <div
              aria-hidden
              className="absolute inset-8 hidden rounded-full bg-teal-200/30 blur-3xl sm:block"
            />
            {/* Stack on narrow screens so phones never overflow / steal vertical scroll */}
            <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-center sm:gap-5 lg:justify-end">
              <MobileMockup screen="workshop" showLabel />
              <MobileMockup screen="customer" showLabel className="sm:translate-y-5" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "MY DETAIL OS builds modern workshop management software for detailing studios, service centers, and auto businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell
      title="About MY DETAIL OS"
      description="We help automotive workshops replace manual follow-ups with a clearer, connected operating system."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-lg font-semibold">Our focus</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Help workshop owners and managers run daily operations with clarity — job cards, customers,
            billing, inventory, staff, and communication in one platform.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-lg font-semibold">Product boundary</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            This website is the public SaaS marketing and conversion experience. Workshop operations
            run in the dedicated Workshop App. Platform administration lives in the SaaS Admin Portal.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-white p-6 md:col-span-2">
          <h2 className="text-lg font-semibold">Who we build for</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Car detailing workshops, car service centers, auto spas, car wash businesses, and
            multi-branch automotive service teams that need modern operations software.
          </p>
        </article>
      </div>
    </PageShell>
  );
}

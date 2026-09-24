import type { Metadata } from "next";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy",
  description: "Understand how MY DETAIL OS handles data submitted through public forms and account access.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="MY DETAIL OS handles business and user data according to platform security and compliance practices."
    >
      <article className="prose prose-sm max-w-none rounded-xl border border-border bg-card p-5 text-muted-foreground">
        <p>Form data submitted on this public website is used for onboarding and support workflows.</p>
        <p>Authentication and authorization are validated by backend services and role-based access policies.</p>
        <p>Public website pages do not directly expose sensitive platform administration features or credentials.</p>
      </article>
    </PageShell>
  );
}

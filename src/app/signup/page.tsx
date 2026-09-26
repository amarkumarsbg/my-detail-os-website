import type { Metadata } from "next";
import { SignupForm } from "@/features/auth/signup-form";
import { AuthPageShell } from "@/features/auth/auth-page-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Start Free Trial",
  description: "Start your MY DETAIL OS free trial and set up your workshop account.",
  path: "/signup",
});

async function fetchTrialDaysDefault(): Promise<number> {
  const base = (
    process.env.NEXT_PUBLIC_API_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:4000" : siteConfig.apiUrl)
  ).replace(/\/$/, "");

  try {
    const res = await fetch(`${base}/api/public/plans`, {
      cache: "no-store",
    });
    if (!res.ok) return 14;
    const json = (await res.json()) as {
      data?: { trialDaysDefault?: number };
    };
    const days = json.data?.trialDaysDefault;
    if (typeof days === "number" && Number.isFinite(days) && days >= 1) {
      return Math.min(90, Math.floor(days));
    }
  } catch {
    /* fall through */
  }
  return 14;
}

export default async function SignupPage() {
  const trialDays = await fetchTrialDaysDefault();

  return (
    <AuthPageShell
      title="Create Your Account"
      description={`Get started with a ${trialDays}-day premium trial`}
      wide
    >
      <SignupForm />
    </AuthPageShell>
  );
}

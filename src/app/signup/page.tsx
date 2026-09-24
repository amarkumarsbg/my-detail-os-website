import type { Metadata } from "next";
import { SignupForm } from "@/features/auth/signup-form";
import { AuthPageShell } from "@/features/auth/auth-page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Start Free Trial",
  description: "Start your MY DETAIL OS free trial and set up your workshop account.",
  path: "/signup",
});

export default function SignupPage() {
  return (
    <AuthPageShell
      title="Create Your Account"
      description="Get started with a 7-day premium trial"
      wide
    >
      <SignupForm />
    </AuthPageShell>
  );
}

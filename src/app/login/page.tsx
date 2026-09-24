import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/login-form";
import { AuthPageShell } from "@/features/auth/auth-page-shell";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Login",
  description: "Sign in to MY DETAIL OS to continue to your workshop workspace.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <AuthPageShell
      title={`Welcome to ${siteConfig.name}`}
      description="Sign in to your account to continue"
    >
      <LoginForm />
    </AuthPageShell>
  );
}

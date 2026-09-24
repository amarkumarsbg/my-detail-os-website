import type { Metadata } from "next";
import { ForgotPasswordForm } from "@/features/auth/forgot-password-form";
import { AuthPageShell } from "@/features/auth/auth-page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Forgot Password",
  description: "Reset your MY DETAIL OS account password.",
  path: "/forgot-password",
});

export default function ForgotPasswordPage() {
  return (
    <AuthPageShell
      title="Forgot Password"
      description="Enter your registered email to receive a password reset link"
    >
      <ForgotPasswordForm />
    </AuthPageShell>
  );
}

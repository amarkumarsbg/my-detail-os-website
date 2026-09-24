import type { Metadata } from "next";
import Link from "next/link";
import { ForgotPasswordForm } from "@/features/auth/forgot-password-form";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/brand/brand-mark";

export const metadata: Metadata = buildMetadata({
  title: "Forgot Password",
  description: "Reset your MY DETAIL OS account password.",
  path: "/forgot-password",
});

export default function ForgotPasswordPage() {
  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" aria-label={siteConfig.name}>
            <BrandMark size={56} className="mb-4 size-14 rounded-2xl shadow-sm" />
          </Link>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Forgot Password
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-[280px]">
            Enter your registered email to receive a One-Time Password (OTP)
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
      
      <div className="absolute bottom-6 right-6">
        <p className="text-xs text-slate-400">A product by <span className="font-semibold text-teal-600">Techifyhouse</span></p>
      </div>
    </div>
  );
}

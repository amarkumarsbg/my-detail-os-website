"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { loginPublic } from "@/services/auth";
import { mapApiError } from "@/lib/error-messages";
import { siteConfig, workshopAppLoginUrl } from "@/config/site";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [redirectHref, setRedirectHref] = useState<string | null>(null);
  const setSession = useAuthStore((s) => s.setSession);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setRedirectHref(null);
    setIsLoading(true);

    try {
      const session = await loginPublic(email.trim(), password);
      setSession(session.user, session.accessToken);

      if (session.user.role === "PLATFORM_OWNER") {
        setSuccess("Platform owner accounts sign in via the Admin Portal.");
        setIsLoading(false);
        return;
      }

      const dest = workshopAppLoginUrl({
        accessToken: session.accessToken,
        next: session.user.mustChangePassword ? "/change-password" : "/dashboard",
      });

      let destUrl: URL;
      try {
        destUrl = new URL(dest);
      } catch {
        setError(
          `Workshop app URL is invalid. Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel to your live workshop origin (include https://). Current: ${siteConfig.workshopAppUrl}`
        );
        setIsLoading(false);
        return;
      }

      // Guard: never "succeed" into a localhost workshop from a hosted marketing site.
      const isHostedMarketing = !/^localhost$|^127\.0\.0\.1$/.test(window.location.hostname);
      if (isHostedMarketing && /localhost|127\.0\.0\.1/.test(destUrl.hostname)) {
        setError(
          `Workshop app URL is misconfigured (points to localhost). Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel to your live workshop URL. Current target: ${siteConfig.workshopAppUrl}`
        );
        setIsLoading(false);
        return;
      }

      // Same-origin /login#token only changes the hash — page never leaves (looks "stuck").
      if (destUrl.origin === window.location.origin) {
        setError(
          `Workshop app URL points at this marketing site (${destUrl.origin}). Set NEXT_PUBLIC_WORKSHOP_APP_URL to the workshop app (e.g. https://prime-detailer-fs-demo.vercel.app), then redeploy.`
        );
        setIsLoading(false);
        return;
      }

      setRedirectHref(dest);
      setSuccess(`Login successful! Opening ${destUrl.host}…`);
      setIsLoading(false);
      // Navigate immediately (before paint). Delayed assign can look "stuck" if the
      // target host hangs (e.g. misconfigured default domain).
      window.location.href = dest;
    } catch (err) {
      setError(mapApiError(err));
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-left">
        <FloatingInput
          id="email"
          type="email"
          label="Email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>
      <div className="text-left">
        <div className="flex justify-end mb-1">
          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-teal-700 hover:text-teal-600"
          >
            Forgot Password?
          </Link>
        </div>
        <FloatingInput
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <p className="text-center text-sm text-slate-600 mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-teal-600 hover:underline">
          Sign Up
        </Link>
      </p>

      {error && (
        <div className="mt-6">
          <Alert tone="error">
            <AlertTitle>Sign in failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {success && (
        <div className="mt-6 space-y-3">
          <Alert tone="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
          {redirectHref && (
            <a
              href={redirectHref}
              className="block text-center text-sm font-semibold text-teal-700 hover:text-teal-600 underline"
            >
              Continue to Workshop App
            </a>
          )}
        </div>
      )}
    </form>
  );
}

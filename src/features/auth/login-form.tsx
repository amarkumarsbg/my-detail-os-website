"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { Loader2, Smartphone } from "lucide-react";
import {
  loginPublic,
  sendLoginOtpPublic,
  verifyLoginOtpPublic,
} from "@/services/auth";
import { mapApiError } from "@/lib/error-messages";
import { siteConfig, workshopAppLoginUrl } from "@/config/site";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { OtpInput } from "@/components/ui/otp-input";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";
import type { AuthSession } from "@/types";

type LoginMethod = "email" | "mobile";

export function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpHint, setOtpHint] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [redirectHref, setRedirectHref] = useState<string | null>(null);
  const setSession = useAuthStore((s) => s.setSession);
  const verifyOtpLock = useRef(false);

  function finishWithSession(session: AuthSession): boolean {
    setSession(session.user, session.accessToken);

    if (session.user.role === "PLATFORM_OWNER") {
      setSuccess("Platform owner accounts sign in via the Admin Portal.");
      setIsLoading(false);
      return false;
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
      return false;
    }

    const isHostedMarketing = !/^localhost$|^127\.0\.0\.1$/.test(window.location.hostname);
    if (isHostedMarketing && /localhost|127\.0\.0\.1/.test(destUrl.hostname)) {
      setError(
        `Workshop app URL is misconfigured (points to localhost). Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel to your live workshop URL. Current target: ${siteConfig.workshopAppUrl}`
      );
      setIsLoading(false);
      return false;
    }

    if (destUrl.origin === window.location.origin) {
      setError(
        `Workshop app URL points at this marketing site (${destUrl.origin}). Set NEXT_PUBLIC_WORKSHOP_APP_URL to the workshop app (e.g. https://prime-detailer-fs-demo.vercel.app), then redeploy.`
      );
      setIsLoading(false);
      return false;
    }

    setRedirectHref(dest);
    setSuccess(`Login successful! Opening ${destUrl.host}…`);
    setIsLoading(false);
    window.location.href = dest;
    return true;
  }

  async function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setRedirectHref(null);
    setIsLoading(true);

    try {
      const session = await loginPublic(email.trim(), password);
      finishWithSession(session);
    } catch (err) {
      setError(mapApiError(err));
      setIsLoading(false);
    }
  }

  async function handleSendOtp() {
    const digits = mobile.replace(/\D/g, "");
    if (digits.length !== 10) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    setError(null);
    setOtpHint(null);
    setIsLoading(true);
    try {
      const result = await sendLoginOtpPublic(digits);
      setOtp("");
      setOtpSent(true);
      if (result.delivery === "sms") {
        setOtpHint("OTP sent to your mobile number.");
      } else if (result.devDemoCode) {
        setOtpHint(`Dev/demo code: ${result.devDemoCode}`);
      } else if (result.hint) {
        setOtpHint(result.hint);
      } else {
        setOtpHint("OTP ready — check SMS or API logs.");
      }
    } catch (err) {
      setError(mapApiError(err));
      setOtpSent(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function runMobileOtpVerify(code?: string) {
    const digits = (code ?? otp).replace(/\D/g, "");
    if (digits.length !== 4 || verifyOtpLock.current) return;
    verifyOtpLock.current = true;
    setError(null);
    setSuccess(null);
    setRedirectHref(null);
    setIsLoading(true);
    try {
      const session = await verifyLoginOtpPublic(mobile, digits);
      finishWithSession(session);
    } catch (err) {
      setError(mapApiError(err));
      setIsLoading(false);
    } finally {
      verifyOtpLock.current = false;
    }
  }

  async function handleMobileSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!otpSent) {
      await handleSendOtp();
      return;
    }
    await runMobileOtpVerify();
  }

  function switchTo(method: LoginMethod) {
    setLoginMethod(method);
    setError(null);
    setSuccess(null);
    setRedirectHref(null);
    setOtp("");
    setOtpSent(false);
    setOtpHint(null);
  }

  return (
    <div className="space-y-6">
      {loginMethod === "email" ? (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
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
        </form>
      ) : (
        <form onSubmit={handleMobileSubmit} className="space-y-6">
          <div className="text-left">
            <label
              htmlFor="mobile"
              className="mb-1.5 block text-sm font-medium text-slate-600"
            >
              Mobile Number
            </label>
            <div className="flex gap-2">
              <div className="flex h-[50px] shrink-0 items-center justify-center rounded-md border-2 border-slate-300 bg-slate-50 px-3 text-sm text-slate-500">
                +91
              </div>
              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                required
                maxLength={10}
                className="block w-full rounded-md border-2 border-slate-300 bg-transparent px-3 py-3 text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-0 disabled:opacity-50"
              />
            </div>
          </div>

          {!otpSent ? (
            <Button
              type="submit"
              size="lg"
              disabled={isLoading || mobile.length < 10}
              className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </Button>
          ) : (
            <>
              <div className="text-left space-y-3">
                <div className="flex items-baseline justify-between gap-x-3">
                  <span className="text-sm font-medium text-slate-600">Enter OTP</span>
                  <button
                    type="button"
                    onClick={() => void handleSendOtp()}
                    disabled={isLoading}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-600 disabled:opacity-50"
                  >
                    Resend OTP
                  </button>
                </div>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  onComplete={(v) => void runMobileOtpVerify(v)}
                  disabled={isLoading}
                />
                {otpHint && <p className="text-xs text-slate-500 text-center">{otpHint}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading || otp.length < 4}
                className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Sign In"
                )}
              </Button>
            </>
          )}
        </form>
      )}

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs uppercase tracking-wider text-slate-400">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {loginMethod === "email" ? (
        <button
          type="button"
          onClick={() => switchTo("mobile")}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          <Smartphone className="size-4 text-teal-600" />
          Login with Mobile OTP
        </button>
      ) : (
        <button
          type="button"
          onClick={() => switchTo("email")}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border-2 border-slate-200 bg-white text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
          Login with Email
        </button>
      )}

      <p className="text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-teal-600 hover:underline">
          Sign Up
        </Link>
      </p>

      {error && (
        <Alert tone="error">
          <AlertTitle>Sign in failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <div className="space-y-3">
          <Alert tone="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
          {redirectHref && (
            <a
              href={redirectHref}
              className="inline-flex w-full h-11 items-center justify-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium shadow-sm"
            >
              Continue to Workshop App
            </a>
          )}
        </div>
      )}
    </div>
  );
}

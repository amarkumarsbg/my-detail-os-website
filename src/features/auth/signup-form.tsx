"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { signupPublic } from "@/services/signup";
import { mapApiError } from "@/lib/error-messages";
import { workshopAppLoginUrl } from "@/config/site";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";
import { OpeningWorkshopOverlay } from "@/features/auth/opening-workshop-overlay";

function validatePassword(password: string): string | null {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(password)) return "Password must include an uppercase letter.";
  if (!/[a-z]/.test(password)) return "Password must include a lowercase letter.";
  if (!/[0-9]/.test(password)) return "Password must include a number.";
  if (!/[#@$%&*!?+-]/.test(password)) {
    return "Password must include one of these special characters: # @ $ % & * ! ? + -";
  }
  return null;
}

export function SignupForm() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branchName, setBranchName] = useState("HQ");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [redirectHref, setRedirectHref] = useState<string | null>(null);
  const setSession = useAuthStore((s) => s.setSession);

  const passwordMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setRedirectHref(null);

    if (passwordMismatch) {
      setError("Password and confirm password must match.");
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setIsRedirecting(true);

    try {
      const result = await signupPublic({
        businessName: businessName.trim(),
        ownerName: ownerName.trim(),
        email: email.trim(),
        phone: phoneDigits.slice(-10),
        password,
        branchName: branchName.trim() || "HQ",
      });

      setSession(result.user, result.accessToken);
      const orgSlug = (result.organization?.slug ?? "").trim().toLowerCase() || null;
      if (!orgSlug) {
        setError("Organization slug was not returned. Please contact support.");
        setIsRedirecting(false);
        return;
      }
      const dest = workshopAppLoginUrl({
        accessToken: result.accessToken,
        next: result.user.mustChangePassword ? "/change-password" : "/dashboard",
        orgSlug,
      });

      let destUrl: URL;
      try {
        destUrl = new URL(dest);
      } catch {
        setError(
          "Workshop app URL is invalid. Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel (include https://)."
        );
        setIsRedirecting(false);
        return;
      }

      const isHostedMarketing = !/^localhost$|^127\.0\.0\.1$/.test(window.location.hostname);
      if (isHostedMarketing && /localhost|127\.0\.0\.1/.test(destUrl.hostname)) {
        setError(
          "Workshop app URL is misconfigured (points to localhost). Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel."
        );
        setIsRedirecting(false);
        return;
      }
      if (destUrl.origin === window.location.origin) {
        setError(
          "Workshop app URL points at this marketing site. Set NEXT_PUBLIC_WORKSHOP_APP_URL to the workshop app, then redeploy."
        );
        setIsRedirecting(false);
        return;
      }

      setRedirectHref(dest);
      window.location.assign(dest);
    } catch (err) {
      setError(mapApiError(err));
      setIsRedirecting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isRedirecting ? <OpeningWorkshopOverlay href={redirectHref} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingInput
          id="ownerName"
          label="Owner Name"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          required
          autoComplete="name"
          placeholder="John Doe"
        />
        <FloatingInput
          id="email"
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="john@example.com"
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-600"
          >
            Mobile Number
          </label>
          <div className="flex gap-2">
            <div className="flex h-12 shrink-0 items-center justify-center rounded-xl border-2 border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-500">
              +91
            </div>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              required
              maxLength={10}
              placeholder="10-digit mobile number"
              className="block h-12 w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none focus:ring-0 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <FloatingInput
            id="businessName"
            label="Workshop / Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            autoComplete="organization"
            placeholder="My Workshop"
          />
        </div>

        <div className="sm:col-span-2">
          <FloatingInput
            id="branchName"
            label="Branch Name"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            autoComplete="off"
            placeholder="HQ"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <FloatingInput
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Strong password"
          />
          <p className="text-xs leading-relaxed text-slate-500">
            Min. 8 characters with uppercase, lowercase, a number, and a special character
            (#@$%&*!?+-).
          </p>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <FloatingInput
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
            placeholder="Confirm password"
          />
          {passwordMismatch && (
            <p className="text-xs font-medium text-red-600">Passwords do not match.</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isRedirecting || passwordMismatch}
        className="mt-1 h-12 w-full rounded-xl bg-teal-600 text-base font-semibold text-white shadow-sm hover:bg-teal-700"
      >
        <span className="sm:hidden">Start Free Trial</span>
        <span className="hidden sm:inline">Sign Up & Start Free Trial</span>
      </Button>

      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-teal-600 hover:underline">
          Sign In
        </Link>
      </p>

      {error && (
        <Alert tone="error">
          <AlertTitle>Signup failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}

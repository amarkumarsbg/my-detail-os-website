"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signupPublic } from "@/services/signup";
import { mapApiError } from "@/lib/error-messages";
import { workshopAppLoginUrl } from "@/config/site";
import { useAuthStore } from "@/store/auth-store";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";

const PASSWORD_HINT =
  "At least 8 characters with uppercase, lowercase, a number, and a special character (#@$%&*!?+-).";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const setSession = useAuthStore((s) => s.setSession);

  const passwordMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

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

    setIsLoading(true);

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
      const dest = workshopAppLoginUrl({
        accessToken: result.accessToken,
        next: result.user.mustChangePassword ? "/change-password" : "/dashboard",
      });

      let destUrl: URL;
      try {
        destUrl = new URL(dest);
      } catch {
        setError(
          "Workshop app URL is invalid. Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel (include https://)."
        );
        setIsLoading(false);
        return;
      }

      const isHostedMarketing = !/^localhost$|^127\.0\.0\.1$/.test(window.location.hostname);
      if (isHostedMarketing && /localhost|127\.0\.0\.1/.test(destUrl.hostname)) {
        setError(
          "Workshop app URL is misconfigured (points to localhost). Set NEXT_PUBLIC_WORKSHOP_APP_URL on Vercel."
        );
        setIsLoading(false);
        return;
      }
      if (destUrl.origin === window.location.origin) {
        setError(
          "Workshop app URL points at this marketing site. Set NEXT_PUBLIC_WORKSHOP_APP_URL to the workshop app, then redeploy."
        );
        setIsLoading(false);
        return;
      }

      setSuccess("Trial account created. Opening your Workshop App...");
      window.location.assign(dest);
    } catch (err) {
      setError(mapApiError(err));
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-x-5 sm:grid-cols-2 text-left">
        <div>
          <FloatingInput
            id="ownerName"
            label="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
            autoComplete="name"
            placeholder="John Doe"
          />
        </div>
        <div>
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
        </div>
        <div className="sm:col-span-2 flex gap-2">
          <div className="flex items-center justify-center px-4 mt-2 mb-4 border-2 border-slate-300 rounded-md bg-slate-50 text-sm h-[52px]">
            🇮🇳 +91
          </div>
          <div className="flex-1">
            <FloatingInput
              id="phone"
              type="tel"
              label="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
              placeholder="Enter 10 digit phone number"
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

        <div className="sm:col-span-2">
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
          <p className="text-xs text-slate-500 -mt-2 mb-3">Password requirements: {PASSWORD_HINT}</p>
        </div>

        <div className="sm:col-span-2">
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
            <p className="text-xs text-red-600 font-medium -mt-2 mb-4">Passwords do not match.</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isLoading || passwordMismatch}
        className="w-full h-11 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm mt-6"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Creating trial account...
          </>
        ) : (
          "Sign Up & Start Free Trial"
        )}
      </Button>

      <p className="text-center text-sm text-slate-600 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-teal-600 hover:underline">
          Sign In
        </Link>
      </p>

      {error && (
        <div className="mt-6">
          <Alert tone="error">
            <AlertTitle>Signup failed</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {success && (
        <div className="mt-6">
          <Alert tone="success">
            <AlertTitle>Account created</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        </div>
      )}
    </form>
  );
}

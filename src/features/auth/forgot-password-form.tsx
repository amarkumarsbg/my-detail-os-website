"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { forgotPasswordPublic } from "@/services/auth";
import { mapApiError } from "@/lib/error-messages";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      await forgotPasswordPublic(email.trim());
      setSuccess(true);
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100 mb-4">
          <svg
            className="size-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Check your email</h3>
        <p className="text-sm text-slate-600">
          If an account exists for <span className="font-semibold text-slate-900">{email}</span>,
          we sent a password reset link. Open it to choose a new password in the Workshop App.
        </p>
        <div className="pt-4">
          <Button
            type="button"
            className="w-full h-11 p-0 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm"
          >
            <Link href="/login" className="w-full h-full flex items-center justify-center">
              Return to Login
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-left">
        <FloatingInput
          id="email"
          type="email"
          label="Email Address"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
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
            Sending reset link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      <div className="text-center mt-6">
        <Button
          type="button"
          variant="ghost"
          className="w-full text-teal-600 hover:text-teal-700 hover:bg-teal-50"
        >
          <Link href="/login" className="w-full h-full flex items-center justify-center">
            Back to Sign In
          </Link>
        </Button>
      </div>

      {error && (
        <div className="mt-6">
          <Alert tone="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}
    </form>
  );
}

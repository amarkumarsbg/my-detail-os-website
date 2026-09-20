"use client";

import { FormEvent, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { getPricingQuote } from "@/api/pricing";
import { Alert, AlertDescription, AlertTitle } from "@/features/shared/alert";
import { validityOptions } from "@/features/marketing/data";
import { mapApiError } from "@/lib/error-messages";
import type { PricingQuote } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PLAN_CODE = "STARTER";

export function PricingCalculator() {
  const [termMonths, setTermMonths] = useState<12 | 24 | 36 | 60>(12);
  const [extraBranches, setExtraBranches] = useState(0);
  const [extraUsers, setExtraUsers] = useState(0);
  const [referralCode, setReferralCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingReferral, setIsCheckingReferral] = useState(false);
  const [quote, setQuote] = useState<PricingQuote | null>(null);
  const [error, setError] = useState<string | null>(null);

  const tableRows = useMemo(
    () => [
      { label: "Base Plan", value: quote ? formatMoney(quote.basePlanAmount, quote.currency) : "--" },
      {
        label: "Extra Branches",
        value: quote ? formatMoney(quote.extraBranchAmount, quote.currency) : "--",
      },
      { label: "Extra Users", value: quote ? formatMoney(quote.extraUserAmount, quote.currency) : "--" },
      { label: "Onboarding Fee", value: quote ? formatMoney(quote.onboardingFee, quote.currency) : "--" },
      {
        label: "Referral Discount",
        value: quote ? `- ${formatMoney(quote.referralDiscount, quote.currency)}` : "--",
      },
      { label: "GST", value: quote ? formatMoney(quote.gstAmount, quote.currency) : "--" },
    ],
    [quote]
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setQuote(null);
    setIsLoading(true);

    if (referralCode.trim()) {
      setIsCheckingReferral(true);
    }

    try {
      const result = await getPricingQuote({
        planCode: PLAN_CODE,
        termMonths,
        extraBranches,
        extraUsers,
        referralCode: referralCode.trim() || null,
      });
      setQuote(result);
    } catch (err) {
      setError(mapApiError(err));
    } finally {
      setIsCheckingReferral(false);
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <form onSubmit={onSubmit} className="marketing-surface space-y-5 p-6 sm:p-7">
        <div className="space-y-1">
          <h3 className="font-heading text-xl font-semibold">Pricing Calculator</h3>
          <p className="text-sm text-muted-foreground">
            Quote is calculated by backend pricing rules. Final payable amount is never computed only in frontend.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="plan">Plan</Label>
          <Input id="plan" value={PLAN_CODE} disabled />
        </div>

        <div className="space-y-2">
          <Label htmlFor="validity">Validity</Label>
          <select
            id="validity"
            className="h-10 w-full rounded-xl border border-input bg-white px-3 text-sm"
            value={termMonths}
            onChange={(e) => setTermMonths(Number(e.target.value) as 12 | 24 | 36 | 60)}
          >
            {validityOptions.map((option) => (
              <option key={option.months} value={option.months}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="extraBranches">Extra Branches</Label>
            <Input
              id="extraBranches"
              type="number"
              min={0}
              value={extraBranches}
              onChange={(e) => setExtraBranches(Math.max(0, Number(e.target.value) || 0))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="extraUsers">Extra Users</Label>
            <Input
              id="extraUsers"
              type="number"
              min={0}
              value={extraUsers}
              onChange={(e) => setExtraUsers(Math.max(0, Number(e.target.value) || 0))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="referralCode">Referral Code</Label>
          <Input
            id="referralCode"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            placeholder="Optional"
          />
          {isCheckingReferral && (
            <p className="text-xs text-muted-foreground" role="status">
              Checking referral...
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Loading pricing...
            </>
          ) : (
            "Get Exact Quote"
          )}
        </Button>

        {error && (
          <Alert tone="error">
            <AlertTitle>Unable to fetch quote</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </form>

      <div className="marketing-surface p-6 sm:p-7">
        <h4 className="font-heading text-xl font-semibold">Quote Summary</h4>
        <dl className="mt-4 space-y-2 text-sm">
          {tableRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4 border-b border-border/60 py-2">
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-white p-4">
          <p className="text-sm font-semibold">Final Amount</p>
          <p className="font-heading text-2xl font-semibold">
            {quote ? formatMoney(quote.totalAmount, quote.currency) : "--"}
          </p>
        </div>
      </div>
    </div>
  );
}

function formatMoney(amount: number, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

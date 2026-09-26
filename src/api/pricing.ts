import { apiClient } from "@/lib/api-client";
import type { PricingQuote, PricingQuoteBreakdown } from "@/types";
import { ApiError } from "@/lib/api-client";
import type { PricingPlan } from "@/data/pricing";

export type PublicPlansResponse = {
  plans: Array<{
    planCode: string;
    planName: string;
    limits: { maxBranches: number | null; maxStaff?: number | null };
    annualPrice: number;
    currency: string;
    gstPercent: number;
  }>;
  /** From admin Platform Settings → Trial days default. */
  trialDaysDefault?: number;
  pricing: {
    currency: string;
    gstPercent: number;
    termBasePrices: Record<string, number>;
    planMultipliers: Record<string, number>;
    addOns: Record<string, number>;
    source: string;
  };
};

const FEATURES: Record<string, string[]> = {
  STARTER: [
    "Job card management",
    "Customer & vehicle profiles",
    "Basic billing & invoices",
    "Customer portal access",
    "Email support",
  ],
  GROWTH: [
    "Everything in Starter",
    "Inventory & stock control",
    "Staff management",
    "Service history & reminders",
    "Priority support",
  ],
  BUSINESS: [
    "Everything in Growth",
    "Advanced reports & insights",
    "Rewards & membership",
    "Role-based access control",
    "Activity tracking",
  ],
  ENTERPRISE: [
    "Everything in Business",
    "Dedicated onboarding",
    "Custom integrations",
    "SLA & account support",
    "Tailored rollout",
  ],
  CUSTOM: [
    "Negotiated scope",
    "Dedicated success manager",
    "Custom limits",
    "Priority support",
  ],
};

function formatInr(amount: number, currency = "INR"): string {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  }
}

const DESCRIPTIONS: Record<string, string> = {
  STARTER: "For single-branch workshops getting started with digital operations.",
  GROWTH: "For growing workshops that need inventory, staff, and deeper workflows.",
  BUSINESS: "For multi-branch teams that need reporting, rewards, and stronger controls.",
  ENTERPRISE: "Custom plans for large multi-branch automotive service networks.",
};

export function mapPublicPlansToCards(res: PublicPlansResponse): PricingPlan[] {
  return res.plans
    .filter((p) => p.planCode !== "CUSTOM")
    .map((p, index) => {
      const isCustomPriced =
        p.planCode === "ENTERPRISE" ||
        (p.limits.maxBranches == null && p.limits.maxStaff == null);
      return {
        id: p.planCode.toLowerCase(),
        name: p.planName,
        description:
          DESCRIPTIONS[p.planCode] ??
          `${p.planName} plan for workshops that need tailored capacity and pricing.`,
        price: isCustomPriced ? null : p.annualPrice,
        priceLabel: isCustomPriced ? "Custom" : formatInr(p.annualPrice, p.currency),
        billingDuration: isCustomPriced ? "annual contract" : "per year (billed annually)",
        currency: p.currency,
        branches:
          p.limits.maxBranches == null
            ? "Unlimited branches"
            : `${p.limits.maxBranches} branch${p.limits.maxBranches === 1 ? "" : "es"}`,
        users:
          p.limits.maxStaff == null
            ? "Unlimited users"
            : `${p.limits.maxStaff} users`,
        features: FEATURES[p.planCode] ?? [
          "Job card management",
          "Customer & vehicle profiles",
          "Billing & invoices",
          "Email support",
        ],
        highlighted: p.planCode === "GROWTH" || index === 1,
        ctaLabel: isCustomPriced ? "Contact Sales" : "Start Free Trial",
        ctaHref: isCustomPriced ? "/contact" : "/signup",
        planCode: p.planCode,
      };
    });
}

export function mapBreakdownToQuote(
  breakdown: PricingQuoteBreakdown
): PricingQuote {
  return {
    planCode: breakdown.planCode,
    planName: breakdown.planName,
    termMonths: breakdown.termMonths,
    termLabel: breakdown.termLabel,
    baseBranches: breakdown.includedBranches,
    baseUsers: breakdown.includedUsers,
    extraBranches: breakdown.extraBranches,
    extraUsers: breakdown.extraUsers,
    basePlanAmount: breakdown.baseAmount,
    extraBranchAmount: breakdown.extraBranchCost,
    extraUserAmount: breakdown.extraUserCost,
    onboardingFee: breakdown.onboardingFee,
    subtotal: breakdown.subTotalBeforeTax,
    referralDiscount: breakdown.referralDiscount,
    taxableAmount: breakdown.subTotalBeforeTax - breakdown.referralDiscount,
    gstRate: breakdown.gstPercent,
    gstAmount: breakdown.gstAmount,
    totalAmount: breakdown.finalAmount,
    currency: breakdown.currency,
  };
}

export async function getPublicPlans(): Promise<PublicPlansResponse> {
  return apiClient.get<PublicPlansResponse>("/api/public/plans");
}

export async function getPricingQuote(input: {
  planCode?: string;
  termMonths: 12 | 24 | 36 | 60;
  extraBranches?: number;
  extraUsers?: number;
  referralCode?: string | null;
}): Promise<PricingQuote> {
  const payload = {
    planCode: input.planCode ?? "STARTER",
    termMonths: input.termMonths,
    extraBranches: input.extraBranches ?? 0,
    extraUsers: input.extraUsers ?? 0,
    referralCode: input.referralCode ?? null,
    isFirstSubscription: true,
  };

  try {
    const res = await apiClient.post<{ breakdown: PricingQuoteBreakdown } | PricingQuote>(
      "/api/public/pricing/quote",
      payload
    );
    if (res && typeof res === "object" && "breakdown" in res && res.breakdown) {
      return mapBreakdownToQuote(res.breakdown);
    }
    return res as PricingQuote;
  } catch (error) {
    if (error instanceof ApiError && (error.status === 404 || error.status === 405)) {
      const res = await apiClient.post<{ breakdown: PricingQuoteBreakdown } | PricingQuote>(
        "/api/public/subscription/pricing",
        payload
      );
      if (res && typeof res === "object" && "breakdown" in res && res.breakdown) {
        return mapBreakdownToQuote(res.breakdown);
      }
      return res as PricingQuote;
    }
    throw error;
  }
}

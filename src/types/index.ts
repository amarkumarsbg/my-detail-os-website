// ─── Auth ─────────────────────────────────────────────────────────────────────
export type UserRole =
  | "PLATFORM_OWNER"
  | "SUPER_ADMIN"
  | "ADMIN"
  | "BRANCH_MANAGER"
  | "MANAGER"
  | "SUPERVISOR"
  | "RECEPTIONIST"
  | "MECHANIC";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationId: string | null;
  branchId: string | null;
  mustChangePassword?: boolean;
}

export interface AuthSession {
  accessToken: string;
  user: AuthUser;
}

// ─── Subscription / Pricing ───────────────────────────────────────────────────
export type PlanCode = string;
export type SubscriptionStatus = "ACTIVE" | "PAST_DUE" | "EXPIRED" | "CANCELLED";
export type SubscriptionPaymentStatus = "PAID" | "PENDING" | "PROCESSING" | "FAILED";
export type GraceOrLockStatus = "OK" | "GRACE" | "LOCKED" | "SUSPENDED";

export interface PricingQuote {
  planCode: PlanCode;
  planName: string;
  termMonths: 12 | 24 | 36 | 60;
  termLabel: string;
  baseBranches: number;
  baseUsers: number;
  extraBranches: number;
  extraUsers: number;
  basePlanAmount: number;
  extraBranchAmount: number;
  extraUserAmount: number;
  onboardingFee: number;
  subtotal: number;
  referralDiscount: number;
  taxableAmount: number;
  gstRate: number;
  gstAmount: number;
  totalAmount: number;
  currency: string;
}

// ─── Signup ───────────────────────────────────────────────────────────────────
export interface SignupInput {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  password: string;
  branchName?: string;
  referralCode?: string;
}

export interface SignupResult {
  accessToken: string;
  user: AuthUser;
  organizationId: string;
}

// ─── Pricing Calculator Form ──────────────────────────────────────────────────
export interface PricingCalculatorInput {
  termMonths: 12 | 24 | 36 | 60;
  extraBranches: number;
  extraUsers: number;
  referralCode: string;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormInput {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  message: string;
}

// ─── API Client ───────────────────────────────────────────────────────────────
export interface ApiErrorShape {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface ApiResponse<T> {
  data: T;
  error: ApiErrorShape | null;
}

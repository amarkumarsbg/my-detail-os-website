import { USE_MOCK_PUBLIC_API } from "@/config/site";
import * as authApi from "@/api/auth";
import type { AuthSession } from "@/types";

function delay(ms = 900) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Public login entrypoint. Uses mock response only when NEXT_PUBLIC_USE_MOCK_PUBLIC_API=true.
 */
export async function loginPublic(email: string, password: string): Promise<AuthSession> {
  if (!USE_MOCK_PUBLIC_API) {
    return authApi.login(email, password);
  }

  await delay();

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  if (password.length < 6) {
    throw new Error("Invalid email or password.");
  }

  return {
    accessToken: "mock-access-token",
    user: {
      id: "mock-user",
      name: "Workshop Owner",
      email,
      role: "ADMIN",
      organizationId: "mock-org",
      branchId: "mock-branch",
    },
  };
}

export async function forgotPasswordPublic(email: string): Promise<{ message: string }> {
  if (!USE_MOCK_PUBLIC_API) {
    return authApi.forgotPassword(email);
  }

  await delay(600);
  if (!email) throw new Error("Email is required.");
  return {
    message: "If an account exists for that email, a reset link has been sent. (Demo)",
  };
}

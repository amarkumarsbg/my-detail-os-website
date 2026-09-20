import * as authApi from "@/api/auth";
import type { AuthSession } from "@/types";

/**
 * Public login — always calls the real backend API (no mocks).
 */
export async function loginPublic(email: string, password: string): Promise<AuthSession> {
  return authApi.login(email, password);
}

export async function forgotPasswordPublic(email: string): Promise<{ message: string }> {
  return authApi.forgotPassword(email);
}

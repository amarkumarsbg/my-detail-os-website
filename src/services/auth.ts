import * as authApi from "@/api/auth";
import type { AuthSession } from "@/types";

/**
 * Public login — always calls the real backend API (no mocks).
 */
export async function loginPublic(email: string, password: string): Promise<authApi.LoginResponse> {
  return authApi.login(email, password);
}

export async function sendLoginOtpPublic(phone: string): Promise<authApi.OtpSendResult> {
  return authApi.sendLoginOtp(phone);
}

export async function verifyLoginOtpPublic(
  phone: string,
  code: string
): Promise<authApi.LoginResponse> {
  return authApi.verifyLoginOtp(phone, code);
}

export async function forgotPasswordPublic(email: string): Promise<{ message: string }> {
  return authApi.forgotPassword(email);
}

/** Narrow login payload to AuthSession for local store. */
export function toAuthSession(login: authApi.LoginResponse): AuthSession {
  return {
    accessToken: login.accessToken,
    user: login.user,
  };
}

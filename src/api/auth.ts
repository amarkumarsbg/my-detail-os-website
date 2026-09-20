import { apiClient, setToken, clearToken } from "@/lib/api-client";
import type { AuthSession, AuthUser } from "@/types";

type LoginResponse = AuthSession & {
  branch?: unknown;
};

export async function login(email: string, password: string): Promise<AuthSession> {
  const session = await apiClient.post<LoginResponse>("/api/auth/login", { email, password });
  if (session.accessToken) {
    setToken(session.accessToken);
  }
  return {
    accessToken: session.accessToken,
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: session.user.role,
      organizationId: session.user.organizationId,
      branchId: session.user.branchId,
      mustChangePassword: session.user.mustChangePassword,
    },
  };
}

export async function getMe(): Promise<AuthUser> {
  const me = await apiClient.get<{ user: AuthUser } | AuthUser>("/api/auth/me");
  if (me && typeof me === "object" && "user" in me && me.user) {
    return me.user;
  }
  return me as AuthUser;
}

export async function forgotPassword(email: string): Promise<{ message: string }> {
  const res = await apiClient.post<{ message?: string } | null>("/api/auth/forgot-password", {
    email,
  });
  return {
    message:
      (res && typeof res === "object" && res.message) ||
      "If an account exists for that email, a reset link has been sent.",
  };
}

export async function getResetPasswordStatus(token: string): Promise<{ valid: boolean }> {
  const res = await apiClient.get<{ pending?: boolean; valid?: boolean }>(
    `/api/auth/reset-password/status?token=${encodeURIComponent(token)}`
  );
  return { valid: Boolean(res.valid ?? res.pending) };
}

export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ message: string }> {
  // Backend expects `password`; keep newPassword alias for callers.
  const res = await apiClient.post<{ message?: string } | null>("/api/auth/reset-password", {
    token,
    password: newPassword,
    newPassword,
  });
  return {
    message:
      (res && typeof res === "object" && res.message) ||
      "Password updated. You can sign in with your new password.",
  };
}

export function logout(): void {
  clearToken();
}

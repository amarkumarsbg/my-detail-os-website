import * as signupApi from "@/api/signup";
import type { SignupInput, SignupResult } from "@/types";

/**
 * Public signup — always calls the real backend API (no mocks).
 */
export async function signupPublic(input: SignupInput): Promise<SignupResult> {
  return signupApi.signup(input);
}

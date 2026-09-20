import * as contactApi from "@/api/contact";
import type { ContactFormInput } from "@/types";

/**
 * Public contact — always calls the real backend API (no mocks).
 */
export async function submitContactPublic(
  input: ContactFormInput
): Promise<{ message: string }> {
  return contactApi.submitContact(input);
}

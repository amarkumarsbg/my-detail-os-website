import { apiClient } from "@/lib/api-client";
import type { ContactFormInput } from "@/types";

export async function submitContact(
  input: ContactFormInput
): Promise<{ message: string }> {
  const res = await apiClient.post<{ ok?: boolean; id?: string; message?: string }>(
    "/api/public/contact",
    {
      name: input.name,
      email: input.email,
      phone: input.phone,
      businessName: input.businessName,
      message: input.message,
      source: "public_website",
    }
  );
  return {
    message:
      res.message ??
      "Thanks for reaching out. Our team will follow up shortly.",
  };
}

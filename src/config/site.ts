export const siteConfig = {
  name: "Prime Detailers",
  tagline: "Complete Workshop Management Software",
  description:
    "Modern workshop management software for car service centers, detailing studios and auto workshops. Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer communication from one platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.primedetailers.com",
  workshopAppUrl:
    process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ?? "https://prime-detailers-api.onrender.com",
  ogImage: "/og-image.svg",
  links: {
    workshop: process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  },
} as const;

/**
 * When true, auth/contact/signup use local mock responses.
 * Set NEXT_PUBLIC_USE_MOCK_PUBLIC_API=true to force mocks in any environment.
 * Defaults to false so real backend integration is the normal path.
 */
export const USE_MOCK_PUBLIC_API =
  process.env.NEXT_PUBLIC_USE_MOCK_PUBLIC_API === "true";

/** Redirect target after successful workshop owner login/signup. */
export function workshopAppLoginUrl(opts?: {
  accessToken?: string;
  next?: string;
}): string {
  let base = (siteConfig.workshopAppUrl || "http://localhost:3000").replace(/\/$/, "");

  // Guard: bare http://localhost (no port) hits port 80 / Caddy — not the Next workshop app.
  if (base === "http://localhost" || base === "https://localhost") {
    base = "http://localhost:3000";
  }

  const next = opts?.next ?? "/dashboard";
  if (!opts?.accessToken) {
    return `${base}/login`;
  }
  // Put token in the hash so it is not sent to the workshop host in request logs.
  const params = new URLSearchParams({
    accessToken: opts.accessToken,
    next,
  });
  return `${base}/login#${params.toString()}`;
}

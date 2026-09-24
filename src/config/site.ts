/** Platform marketing defaults — override via NEXT_PUBLIC_* in each environment. */
const DEFAULT_WORKSHOP_APP_URL = "https://prime-detailer-fs-demo.vercel.app";
const DEFAULT_API_URL = "https://prime-detailers-api.onrender.com";
const DEFAULT_SITE_URL = "https://www.mydetailos.com";

/** Normalize a public app origin: trim, require absolute http(s), fix bare hostnames. */
export function normalizePublicOrigin(
  value: string | undefined | null,
  fallback: string
): string {
  let raw = (value ?? "").trim();
  if (!raw) raw = fallback;

  // Bare hostname (missing scheme) becomes a same-origin relative path and
  // login appears to "succeed" while never leaving /login.
  if (!/^https?:\/\//i.test(raw)) {
    raw = `https://${raw.replace(/^\/+/, "")}`;
  }

  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return fallback.replace(/\/$/, "");
    }
    // Bare http://localhost (no port) hits port 80 / Caddy — not the Next workshop app.
    if (
      (url.hostname === "localhost" || url.hostname === "127.0.0.1") &&
      !url.port &&
      url.protocol === "http:"
    ) {
      url.port = "3000";
    }
    return url.origin;
  } catch {
    return fallback.replace(/\/$/, "");
  }
}

export const siteConfig = {
  name: "MY DETAIL OS",
  tagline: "Complete Workshop Management Software",
  description:
    "Modern workshop management software for car service centers, detailing studios and auto workshops. Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer communication from one platform.",
  url: normalizePublicOrigin(process.env.NEXT_PUBLIC_SITE_URL, DEFAULT_SITE_URL),
  workshopAppUrl: normalizePublicOrigin(
    process.env.NEXT_PUBLIC_WORKSHOP_APP_URL,
    DEFAULT_WORKSHOP_APP_URL
  ),
  apiUrl: normalizePublicOrigin(process.env.NEXT_PUBLIC_API_URL, DEFAULT_API_URL),
  ogImage: "/og-image.png",
  /** Full lockup (emblem + wordmark) — navy plate. */
  logo: "/brand/my-detail-os-logo.png",
  /** Diamond mark only — favicons / compact nav. */
  logoMark: "/brand/my-detail-os-mark.png",
  links: {
    workshop: normalizePublicOrigin(
      process.env.NEXT_PUBLIC_WORKSHOP_APP_URL,
      DEFAULT_WORKSHOP_APP_URL
    ),
  },
} as const;

/**
 * Mock flag removed — auth always uses the real API.
 * Kept as `false` so any leftover imports still compile.
 */
export const USE_MOCK_PUBLIC_API = false;

function normalizeTenantPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? "/" : p.replace(/\/+$/, "") || "/";
}

/** Prefix a workshop path with organization slug when present (idempotent). */
export function tenantWorkshopPath(orgSlug: string | null | undefined, path: string): string {
  const clean = normalizeTenantPath(path);
  const slug = (orgSlug ?? "").trim().toLowerCase();
  if (!slug) return clean;
  if (clean === `/${slug}` || clean.startsWith(`/${slug}/`)) return clean;

  const segments = clean.split("/").filter(Boolean);
  const appRoots = new Set([
    "login",
    "dashboard",
    "customer",
    "change-password",
    "saas-admin",
    "api",
    "_next",
  ]);
  let bare = clean;
  if (segments[0] && !appRoots.has(segments[0])) {
    bare = segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";
  }
  if (bare === "/") return `/${slug}`;
  return `/${slug}${bare}`;
}

/**
 * Redirect target after successful workshop owner login/signup.
 * Prefer tenant-aware URLs: /{slug}/login#accessToken=…&next=/{slug}/dashboard
 */
export function workshopAppLoginUrl(opts?: {
  accessToken?: string;
  next?: string;
  /** Organization public slug — required for white-label tenant handoff. */
  orgSlug?: string | null;
}): string {
  const base = normalizePublicOrigin(siteConfig.workshopAppUrl, DEFAULT_WORKSHOP_APP_URL);
  const slug = (opts?.orgSlug ?? "").trim().toLowerCase() || null;
  const nextRaw = opts?.next ?? "/dashboard";
  const next = tenantWorkshopPath(slug, nextRaw);
  const loginPath = tenantWorkshopPath(slug, "/login");

  if (!opts?.accessToken) {
    return `${base}${loginPath}`;
  }
  // Put token in the hash so it is not sent to the workshop host in request logs.
  const params = new URLSearchParams({
    accessToken: opts.accessToken,
    next,
  });
  return `${base}${loginPath}#${params.toString()}`;
}

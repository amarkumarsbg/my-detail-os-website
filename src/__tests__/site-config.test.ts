import { normalizePublicOrigin, workshopAppLoginUrl } from "@/config/site";

describe("normalizePublicOrigin", () => {
  it("adds https:// to bare hostnames", () => {
    expect(normalizePublicOrigin("prime-detailer-fs-demo.vercel.app", "https://fallback.test")).toBe(
      "https://prime-detailer-fs-demo.vercel.app"
    );
  });

  it("uses fallback for empty values", () => {
    expect(normalizePublicOrigin("", "https://fallback.test")).toBe("https://fallback.test");
    expect(normalizePublicOrigin("   ", "https://fallback.test")).toBe("https://fallback.test");
  });

  it("keeps explicit http localhost with port", () => {
    expect(normalizePublicOrigin("http://localhost:3002", "https://fallback.test")).toBe(
      "http://localhost:3002"
    );
  });
});

describe("workshopAppLoginUrl", () => {
  it("builds an absolute handoff URL with hash token", () => {
    const url = workshopAppLoginUrl({ accessToken: "tok", next: "/dashboard" });
    expect(url).toMatch(/^https?:\/\//);
    expect(url).toContain("/login#");
    expect(url).toContain("accessToken=tok");
    expect(url).toContain("next=%2Fdashboard");
  });
});

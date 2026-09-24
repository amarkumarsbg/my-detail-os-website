import { normalizePublicOrigin, workshopAppLoginUrl } from "@/config/site";

describe("normalizePublicOrigin", () => {
  it("adds https:// to bare hostnames", () => {
    expect(normalizePublicOrigin("workshop-demo.mydetailos.com", "https://fallback.test")).toBe(
      "https://workshop-demo.mydetailos.com"
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

  it("prefixes organization slug for tenant handoff", () => {
    const url = workshopAppLoginUrl({
      accessToken: "tok",
      next: "/dashboard",
      orgSlug: "abcd-detailers",
    });
    expect(url).toContain("/abcd-detailers/login#");
    expect(url).toContain("next=%2Fabcd-detailers%2Fdashboard");
  });
});

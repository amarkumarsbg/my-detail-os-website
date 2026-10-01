import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js "N" badge in local `next dev`
  devIndicators: false,
  // Phone / LAN testing: allow private-network hosts (not just localhost).
  // Without this, Next blocks /_next assets from http://192.168.x.x → broken UI on real devices.
  allowedDevOrigins: [
    "192.168.1.6",
    "192.168.*.*",
    "10.*.*.*",
  ],
  async redirects() {
    return [
      // Legacy apex hostname → current marketing site
      {
        source: "/:path*",
        has: [{ type: "host", value: "primedetailers.com" }],
        destination: "https://www.mydetailos.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

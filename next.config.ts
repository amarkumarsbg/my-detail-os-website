import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js "N" badge in local `next dev`
  devIndicators: false,
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

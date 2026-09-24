import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

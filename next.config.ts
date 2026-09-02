import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    qualities: [75, 100],
  },
  turbopack: {
    root,
  },
  async redirects() {
    return [
      // Enforce a single canonical host (www) to avoid duplicate-content SEO issues.
      {
        source: "/:path*",
        has: [{ type: "host", value: "thyssendigital.fr" }],
        destination: "https://www.thyssendigital.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

const isDevelopment = process.env.NODE_ENV !== "production";
// Vercel preview deployments inject the vercel.live feedback toolbar.
const vercelLive = process.env.VERCEL_ENV === "preview" ? " https://vercel.live" : "";

// No external scripts are allowed. 'unsafe-inline' is kept for the inline scripts Next.js emits,
// so pages stay statically generated (a nonce-based policy would make every page dynamic).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  // Google review author photos are served from googleusercontent.com.
  `img-src 'self' data: blob: https://*.googleusercontent.com${vercelLive}`,
  "font-src 'self'",
  `connect-src 'self'${vercelLive}${vercelLive ? " wss://ws-us3.pusher.com" : ""}`,
  `frame-src 'self'${vercelLive}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  poweredByHeader: false,
  experimental: {
    // Tailwind CSS is small: inlining it removes the render-blocking stylesheet request,
    // which helps first-time visitors on mobile (the main audience).
    inlineCss: true,
  },
  images: {
    qualities: [75, 100],
  },
  turbopack: {
    root,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Enforce a single canonical host (no www) to avoid duplicate-content SEO issues.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thyssendigital.fr" }],
        destination: "https://thyssendigital.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from "next";

import { business, footer } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.name,
    description: footer.tagline,
    lang: "fr",
    start_url: "/",
    display: "browser",
    background_color: "#070b14",
    theme_color: "#070b14",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

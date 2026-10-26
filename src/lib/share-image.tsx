import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { business } from "@/content/site";

export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";

/** Renders a 1200×630 share image (Open Graph / Twitter) in the site's colours, at build time. */
export async function renderShareImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}): Promise<ImageResponse> {
  const logo = await readFile(path.join(process.cwd(), "public/brand/icon-512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 85% 15%, rgba(47,124,255,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(140,109,255,0.25), transparent 40%), #070b14",
          color: "#f7f9fc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img alt="" height={96} src={logoSrc} width={96} />
          <div style={{ display: "flex", fontSize: 36, letterSpacing: 6 }}>THYSSEN DIGITAL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 1.12, maxWidth: 1080 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 34, color: "#50e3ff" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c9d3e3" }}>
          {`thyssendigital.fr · ${business.phoneDisplay}`}
        </div>
      </div>
    ),
    shareImageSize,
  );
}

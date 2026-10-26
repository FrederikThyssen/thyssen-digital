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
            "radial-gradient(circle at 88% 12%, rgba(19,80,255,0.16), transparent 42%), radial-gradient(circle at 8% 95%, rgba(125,44,255,0.12), transparent 40%), #ffffff",
          color: "#0b1220",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img alt="" height={96} src={logoSrc} width={96} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <div style={{ display: "flex", fontSize: 34, letterSpacing: 8 }}>THYSSEN</div>
            <div style={{ display: "flex", fontSize: 22, letterSpacing: 12, color: "#1350ff" }}>DIGITAL</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 58, lineHeight: 1.12, maxWidth: 1080 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 34, color: "#1350ff" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#475369" }}>
          {`thyssendigital.fr · ${business.phoneDisplay}`}
        </div>
      </div>
    ),
    shareImageSize,
  );
}

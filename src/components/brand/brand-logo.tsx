import { useId } from "react";

import { BRAND_NAME, BRAND_SIGNATURE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "mark" | "horizontal";
  tone?: "default" | "white" | "black" | "accent";
  className?: string;
  showSignature?: boolean;
  decorative?: boolean;
};

const toneClassName = {
  default: "text-foreground",
  white: "text-white",
  black: "text-black",
  accent: "text-foreground",
};

export function BrandLogo({
  variant = "horizontal",
  tone = "default",
  className,
  showSignature = false,
  decorative = false,
}: BrandLogoProps) {
  const gradientId = useId();
  const label = showSignature ? `${BRAND_NAME} - ${BRAND_SIGNATURE}` : BRAND_NAME;

  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className={cn(
        "inline-flex items-center gap-3 text-foreground",
        toneClassName[tone],
        className,
      )}
      role={decorative ? undefined : "img"}
    >
      <BrandMarkSvg gradientId={gradientId} tone={tone} />
      {variant === "horizontal" ? (
        <span className="grid gap-0.5 leading-none">
          <span className="text-sm font-semibold tracking-[0.22em] text-current">
            THYSSEN DIGITAL
          </span>
          {showSignature ? (
            <span className="text-[0.625rem] font-medium tracking-[0.14em] text-muted-foreground">
              {BRAND_SIGNATURE}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

function BrandMarkSvg({
  gradientId,
  tone,
}: {
  gradientId: string;
  tone: BrandLogoProps["tone"];
}) {
  const fill = tone === "accent" ? `url(#${gradientId})` : "currentColor";

  return (
    <svg
      aria-hidden="true"
      className="size-10 shrink-0"
      focusable="false"
      viewBox="0 0 64 64"
    >
      {tone === "accent" ? (
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={gradientId}
            x1="10"
            x2="58"
            y1="12"
            y2="54"
          >
            <stop stopColor="#2f7cff" />
            <stop offset=".58" stopColor="#50e3ff" />
            <stop offset="1" stopColor="#8c6dff" />
          </linearGradient>
        </defs>
      ) : null}
      <path
        d="M10 10h28c12 0 22 9.2 22 22S50 54 38 54H26V22H10V10Zm28 34c6.7 0 12-5.1 12-12S44.7 20 38 20h-2v24h2Zm-2-24H20v8h8v22h8V20Z"
        fill={fill}
      />
    </svg>
  );
}

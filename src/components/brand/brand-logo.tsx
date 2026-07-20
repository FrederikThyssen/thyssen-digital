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
        clipRule="evenodd"
        d="M6 8h32c14.2 0 24 10 24 24S52.2 56 38 56H20V23H9L6 8Zm29 34h4c7 0 12-4 12-10S46 22 39 22h-4v20Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
}

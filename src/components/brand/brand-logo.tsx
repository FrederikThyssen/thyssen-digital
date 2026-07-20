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
        <span className="grid gap-1 leading-none">
          <span className="text-sm font-semibold tracking-[0.28em] text-white">
            THYSSEN
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.42em] text-primary">
            DIGITAL
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
  const baseFill = tone === "accent" ? `url(#${gradientId}-base)` : "currentColor";
  const glowId = `${gradientId}-glow`;

  return (
    <svg
      aria-hidden="true"
      className="size-10 shrink-0 overflow-visible"
      focusable="false"
      viewBox="0 0 128 96"
    >
      {tone === "accent" ? (
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${gradientId}-base`}
            x1="13"
            x2="114"
            y1="18"
            y2="88"
          >
            <stop stopColor="#1350ff" />
            <stop offset=".38" stopColor="#00e5ff" />
            <stop offset=".68" stopColor="#2377ff" />
            <stop offset="1" stopColor="#7d2cff" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${gradientId}-top`}
            x1="10"
            x2="104"
            y1="17"
            y2="36"
          >
            <stop stopColor="#1350ff" />
            <stop offset=".55" stopColor="#00e5ff" />
            <stop offset="1" stopColor="#65f5ff" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${gradientId}-stem`}
            x1="42"
            x2="64"
            y1="38"
            y2="91"
          >
            <stop stopColor="#0c8dff" />
            <stop offset=".52" stopColor="#1350ff" />
            <stop offset="1" stopColor="#7d2cff" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${gradientId}-edge`}
            x1="78"
            x2="123"
            y1="30"
            y2="83"
          >
            <stop stopColor="#62f6ff" />
            <stop offset=".42" stopColor="#167dff" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <filter
            colorInterpolationFilters="sRGB"
            height="142"
            id={glowId}
            width="168"
            x="-20"
            y="-18"
          >
            <feGaussianBlur stdDeviation="6" />
            <feColorMatrix values="0 0 0 0 0.04 0 0 0 0 0.44 0 0 0 0 1 0 0 0 .72 0" />
          </filter>
        </defs>
      ) : null}
      {tone === "accent" ? (
        <path
          d="M12 17h76l8 25H64v54H42V42H20L12 17Zm60 0h10c27.5 0 44 17.4 44 39 0 22.6-17.6 40-45.5 40H72V72h8.5c12.2 0 21-6.4 21-16 0-9.8-8.8-16-21-16H72V17Z"
          fill="#167dff"
          filter={`url(#${glowId})`}
          opacity=".58"
        />
      ) : null}
      <path
        clipRule="evenodd"
        d="M12 17h76l8 25H64v54H42V42H20L12 17Zm60 0h10c27.5 0 44 17.4 44 39 0 22.6-17.6 40-45.5 40H72V72h8.5c12.2 0 21-6.4 21-16 0-9.8-8.8-16-21-16H72V17Z"
        fill={baseFill}
        fillRule="evenodd"
      />
      {tone === "accent" ? (
        <>
          <path
            d="M12 17h76l8 25H20L12 17Z"
            fill={`url(#${gradientId}-top)`}
          />
          <path
            d="M42 42h22v54L42 84V42Z"
            fill={`url(#${gradientId}-stem)`}
            opacity=".92"
          />
          <path
            d="M72 17h10c27.5 0 44 17.4 44 39 0 22.6-17.6 40-45.5 40H72V72h8.5c12.2 0 21-6.4 21-16 0-9.8-8.8-16-21-16H72V17Z"
            fill={`url(#${gradientId}-edge)`}
            opacity=".82"
          />
          <path
            d="M72 40h8.5c12.2 0 21 6.2 21 16 0 9.6-8.8 16-21 16H72V40Z"
            fill="#05070d"
            opacity=".78"
          />
          <path
            d="M78 45h2.3c8.2 0 14.1 4.3 14.1 11 0 6.5-5.9 11-14.1 11H78V45Z"
            fill="#66f6ff"
            opacity=".2"
          />
        </>
      ) : null}
    </svg>
  );
}

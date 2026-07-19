import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const glowVariants = cva(
  "pointer-events-none absolute -z-10 rounded-full blur-3xl",
  {
    variants: {
      position: {
        "top-left": "left-0 top-0 -translate-x-1/3 -translate-y-1/3",
        "top-right": "right-0 top-0 translate-x-1/3 -translate-y-1/3",
        "bottom-left": "bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
        "bottom-right": "bottom-0 right-0 translate-x-1/3 translate-y-1/3",
        center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
      },
      size: {
        sm: "size-48",
        md: "size-72",
        lg: "size-96",
      },
      intensity: {
        low: "opacity-20",
        medium: "opacity-30",
        high: "opacity-40",
      },
      tone: {
        blue: "bg-primary",
        cyan: "bg-accent-cyan",
        violet: "bg-accent-violet",
      },
    },
    defaultVariants: {
      position: "top-left",
      size: "md",
      intensity: "low",
      tone: "blue",
    },
  },
);

export type BackgroundGlowProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof glowVariants>;

export function BackgroundGlow({
  className,
  position,
  size,
  intensity,
  tone,
  ...props
}: BackgroundGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(glowVariants({ position, size, intensity, tone }), className)}
      {...props}
    />
  );
}

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function GlassPanel({
  className,
  interactive = false,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface-glass shadow-card backdrop-blur-md",
        "supports-[not(backdrop-filter:blur(1px))]:bg-surface-elevated",
        interactive &&
          "transition-colors duration-200 ease-standard hover:border-border-strong hover:bg-surface-hover",
        className,
      )}
      {...props}
    />
  );
}

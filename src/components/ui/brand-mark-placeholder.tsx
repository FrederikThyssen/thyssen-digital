import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BrandMarkPlaceholderProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function BrandMarkPlaceholder({
  className,
  label = "Thyssen Digital",
  ...props
}: BrandMarkPlaceholderProps) {
  return (
    // Placeholder temporaire: remplacer par le logo SVG final au Sprint 2.
    <div
      aria-label={label}
      className={cn(
        "grid size-12 place-items-center rounded-md border border-border bg-surface text-sm font-semibold tracking-[0.18em] text-foreground shadow-soft",
        className,
      )}
      role="img"
      {...props}
    >
      TD
    </div>
  );
}

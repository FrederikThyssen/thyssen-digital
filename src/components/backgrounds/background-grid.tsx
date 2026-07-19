import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BackgroundGridProps = HTMLAttributes<HTMLDivElement> & {
  visible?: boolean;
};

export function BackgroundGrid({
  className,
  visible = true,
  ...props
}: BackgroundGridProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-20 opacity-[0.055]",
        "bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px]",
        className,
      )}
      {...props}
    />
  );
}

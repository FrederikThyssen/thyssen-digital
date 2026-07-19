import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function NoiseOverlay({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-[0.035]",
        "bg-[radial-gradient(circle_at_20%_20%,var(--foreground)_0_1px,transparent_1px)] bg-[size:18px_18px]",
        className,
      )}
      {...props}
    />
  );
}

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  decorative?: boolean;
};

export function Divider({
  className,
  decorative = true,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative}
      className={cn("h-px w-full border-0 bg-border", className)}
      role={decorative ? "presentation" : undefined}
      {...props}
    />
  );
}

import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dividerVariants = cva("h-px w-full border-0", {
  variants: {
    variant: {
      simple: "bg-border",
      gradient:
        "bg-gradient-to-r from-transparent via-border-strong to-transparent",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type DividerProps = HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof dividerVariants> & {
    decorative?: boolean;
  };

export function Divider({
  className,
  variant,
  decorative = true,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative}
      className={cn(dividerVariants({ variant }), className)}
      role={decorative ? "presentation" : undefined}
      {...props}
    />
  );
}

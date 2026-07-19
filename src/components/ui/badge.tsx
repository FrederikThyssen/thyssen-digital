import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-sm border font-medium uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface text-muted-foreground",
        accent: "border-primary/40 bg-primary/10 text-accent-cyan",
        outline: "border-border-strong bg-transparent text-foreground",
      },
      size: {
        sm: "px-2 py-1 text-[0.625rem]",
        md: "px-2.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

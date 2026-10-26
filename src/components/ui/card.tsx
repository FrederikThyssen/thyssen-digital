import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-2xl border text-foreground", {
  variants: {
    variant: {
      glass: "border-border bg-surface-glass shadow-card backdrop-blur-md",
      surface: "border-border bg-surface shadow-soft",
      outline: "border-border bg-transparent",
    },
    interactive: {
      true: "transition-[border-color,box-shadow,transform] duration-200 ease-standard hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift motion-reduce:transform-none",
      false: "",
    },
  },
  defaultVariants: {
    variant: "surface",
    interactive: false,
  },
});

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({
  className,
  variant,
  interactive,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, interactive }), className)}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2 p-6 pb-0", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-display text-lg font-semibold leading-7 text-ink", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-[0.95rem] leading-7 text-muted-foreground", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 p-6 pt-0", className)}
      {...props}
    />
  );
}

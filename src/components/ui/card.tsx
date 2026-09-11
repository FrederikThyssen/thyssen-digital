import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-md border text-foreground", {
  variants: {
    variant: {
      surface: "border-border bg-surface",
      outline: "border-border bg-transparent",
    },
    interactive: {
      true: "transition-colors duration-200 ease-standard hover:border-border-strong",
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
  return <div className={cn("space-y-3 p-6 pb-0", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-base font-semibold leading-6 text-foreground", className)}
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
      className={cn("text-sm leading-6 text-muted-foreground", className)}
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

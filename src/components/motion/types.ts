import type { HTMLMotionProps, Variants, ViewportOptions } from "motion/react";
import type { ReactNode } from "react";

export type MotionPrimitiveProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "children" | "initial" | "transition" | "variants" | "whileInView"
> & {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: ViewportOptions;
};

export type StaggerProps = MotionPrimitiveProps & {
  staggerDelay?: number;
};

export type MotionVariantConfig = {
  variants: Variants;
  delay?: number;
  duration?: number;
  viewport?: ViewportOptions;
};

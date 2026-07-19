"use client";

import { motion, useReducedMotion } from "motion/react";

import { createTransition, defaultViewport } from "@/components/motion/motion-config";
import type { MotionPrimitiveProps } from "@/components/motion/types";
import { cn } from "@/lib/utils";

export function ScaleIn({
  className,
  delay,
  duration,
  viewport,
  ...props
}: MotionPrimitiveProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
      transition={createTransition(delay, duration)}
      viewport={viewport ?? defaultViewport}
      whileInView={{ opacity: 1, scale: 1 }}
      {...props}
    />
  );
}

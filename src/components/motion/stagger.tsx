"use client";

import { motion, useReducedMotion } from "motion/react";

import { createTransition, defaultViewport } from "@/components/motion/motion-config";
import type { MotionPrimitiveProps, StaggerProps } from "@/components/motion/types";
import { cn } from "@/lib/utils";

export function Stagger({
  className,
  delay,
  duration,
  staggerDelay = 0.08,
  viewport,
  ...props
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      transition={{
        ...createTransition(delay, duration),
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      }}
      variants={{
        hidden: {},
        visible: {},
      }}
      viewport={viewport ?? defaultViewport}
      whileInView="visible"
      {...props}
    />
  );
}

export function StaggerItem({
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
      transition={createTransition(delay, duration)}
      variants={{
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 14,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      viewport={viewport ?? defaultViewport}
      {...props}
    />
  );
}

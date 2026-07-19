"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import { createTransition, defaultViewport } from "@/components/motion/motion-config";
import type { MotionPrimitiveProps } from "@/components/motion/types";

type Direction = "none" | "up" | "left" | "right";

const offsetByDirection: Record<Direction, { x: number; y: number }> = {
  none: { x: 0, y: 0 },
  up: { x: 0, y: 18 },
  left: { x: 18, y: 0 },
  right: { x: -18, y: 0 },
};

function Fade({
  className,
  delay,
  duration,
  viewport,
  direction,
  ...props
}: MotionPrimitiveProps & { direction: Direction }) {
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? offsetByDirection.none : offsetByDirection[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      transition={createTransition(delay, duration)}
      viewport={viewport ?? defaultViewport}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      {...props}
    />
  );
}

export function FadeIn(props: MotionPrimitiveProps) {
  return <Fade direction="none" {...props} />;
}

export function FadeUp(props: MotionPrimitiveProps) {
  return <Fade direction="up" {...props} />;
}

export function FadeLeft(props: MotionPrimitiveProps) {
  return <Fade direction="left" {...props} />;
}

export function FadeRight(props: MotionPrimitiveProps) {
  return <Fade direction="right" {...props} />;
}

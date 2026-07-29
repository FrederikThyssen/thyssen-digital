"use client";

import { motion, useReducedMotion } from "motion/react";

type SlowZoomBackgroundProps = {
  image: string;
  className?: string;
};

export function SlowZoomBackground({ image, className }: SlowZoomBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={prefersReducedMotion ? undefined : { scale: 1.018 }}
      className={className}
      initial={{ scale: 1 }}
      style={{ backgroundImage: `url('${image}')` }}
      transition={{
        duration: 24,
        ease: "easeOut",
      }}
    />
  );
}

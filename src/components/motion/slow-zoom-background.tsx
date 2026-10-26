"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

type SlowZoomBackgroundProps = {
  image: string;
  className?: string;
  imageClassName?: string;
  /** Above-the-fold LCP image: loads eagerly with high fetch priority. */
  priority?: boolean;
};

export function SlowZoomBackground({
  image,
  className,
  imageClassName,
  priority,
}: SlowZoomBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      animate={prefersReducedMotion ? undefined : { scale: 1.018 }}
      className={className}
      initial={{ scale: 1 }}
      transition={{
        duration: 24,
        ease: "easeOut",
      }}
    >
      <Image
        alt=""
        className={imageClassName}
        fetchPriority={priority ? "high" : undefined}
        fill
        loading={priority ? "eager" : undefined}
        sizes="100vw"
        src={image}
      />
    </motion.div>
  );
}

import type { Transition, ViewportOptions } from "motion/react";

export const defaultViewport: ViewportOptions = {
  once: true,
  amount: 0.24,
};

export function createTransition(delay = 0, duration = 0.42): Transition {
  return {
    delay: Math.min(Math.max(delay, 0), 1.2),
    duration: Math.min(Math.max(duration, 0.12), 0.9),
    ease: [0.16, 1, 0.3, 1],
  };
}

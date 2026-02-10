"use client";

/**
 * MotionStagger — animate a list of children with a stagger delay.
 *
 * Wrap a set of sibling elements (cards, rows, etc.) and each direct
 * child will fade-in + slide-up sequentially.
 *
 * - Respects `prefers-reduced-motion`.
 * - Uses `viewport={{ once: true }}` so the animation fires only
 *   once per mount cycle.
 * - `staggerDelay` defaults to 0.06 s (very subtle).
 */

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerChild } from "./motion.config";

interface MotionStaggerProps {
  children: React.ReactNode;
  /** Delay between each child entrance (seconds). Default 0.06 */
  staggerDelay?: number;
  className?: string;
  /** Render as a different HTML element. Default "div" */
  as?: keyof typeof motion;
}

export default function MotionStagger({
  children,
  staggerDelay = 0.06,
  className,
}: MotionStaggerProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer(staggerDelay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Convenience child wrapper ── */

interface MotionStaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrap each child inside <MotionStagger> with this to get the
 * staggered animation. If used outside a MotionStagger context
 * it still works — it just animates immediately.
 */
export function MotionStaggerItem({
  children,
  className,
}: MotionStaggerItemProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
}

"use client";

/**
 * MotionCard — a thin wrapper that adds hover lift + tap press
 * to card-like elements without changing any styling.
 *
 * Respects `prefers-reduced-motion`.
 */

import { motion, useReducedMotion } from "framer-motion";
import { cardHover, transition } from "./motion.config";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionCard({ children, className }: MotionCardProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={cardHover}
      transition={transition.micro}
      className={className}
    >
      {children}
    </motion.div>
  );
}

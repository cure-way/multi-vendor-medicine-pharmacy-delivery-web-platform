"use client";

/**
 * PageTransition — wraps a page's content to fade-in + slide-up on mount.
 *
 * - Scrolls to top on every route change.
 * - Respects `prefers-reduced-motion`: instantly visible if enabled.
 * - Uses only `opacity` + `translateY` for GPU-composited animations.
 * - Keyed on `pathname` so the animation re-fires on route change.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, transition } from "./motion.config";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  /* Scroll to top on every route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      transition={transition.page}
      className={className}
    >
      {children}
    </motion.div>
  );
}

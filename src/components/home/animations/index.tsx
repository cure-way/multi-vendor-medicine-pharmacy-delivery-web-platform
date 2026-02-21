"use client";

import { type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";

/* ----------------------------------------------------------------
   Shared viewport config
   ---------------------------------------------------------------- */
const VIEWPORT = { once: true, amount: 0.2 } as const;

/* ----------------------------------------------------------------
   useMotionSafe — returns static values when reduced motion is on
   ---------------------------------------------------------------- */
function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  return !prefersReduced;
}

/* ----------------------------------------------------------------
   FadeIn — simple opacity fade on mount or viewport entry
   ---------------------------------------------------------------- */
interface FadeInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  inView?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  inView = false,
  ...rest
}: FadeInProps) {
  const animate = useMotionSafe();
  const props = animate
    ? {
        initial: { opacity: 0 },
        ...(inView
          ? { whileInView: { opacity: 1 }, viewport: VIEWPORT }
          : { animate: { opacity: 1 } }),
        transition: { duration, delay, ease: "easeOut" },
      }
    : {};

  return (
    <motion.div {...props} {...rest}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   FadeUp — fade + translateY on mount or viewport entry
   ---------------------------------------------------------------- */
interface FadeUpProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
  inView?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  offset = 12,
  inView = true,
  ...rest
}: FadeUpProps) {
  const animate = useMotionSafe();
  const props = animate
    ? {
        initial: { opacity: 0, y: offset },
        ...(inView
          ? { whileInView: { opacity: 1, y: 0 }, viewport: VIEWPORT }
          : { animate: { opacity: 1, y: 0 } }),
        transition: { duration, delay, ease: "easeOut" },
      }
    : {};

  return (
    <motion.div {...props} {...rest}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   SlideIn — slide from a direction + fade
   ---------------------------------------------------------------- */
interface SlideInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  offset?: number;
  inView?: boolean;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.5,
  offset = 24,
  inView = false,
  ...rest
}: SlideInProps) {
  const animate = useMotionSafe();
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "left" || direction === "up" ? -offset : offset;

  const props = animate
    ? {
        initial: { opacity: 0, [axis]: sign },
        ...(inView
          ? {
              whileInView: { opacity: 1, [axis]: 0 },
              viewport: VIEWPORT,
            }
          : { animate: { opacity: 1, [axis]: 0 } }),
        transition: { duration, delay, ease: "easeOut" },
      }
    : {};

  return (
    <motion.div {...props} {...rest}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   ScaleIn — scale + fade (for images)
   ---------------------------------------------------------------- */
interface ScaleInProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  inView?: boolean;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  inView = true,
  ...rest
}: ScaleInProps) {
  const animate = useMotionSafe();
  const props = animate
    ? {
        initial: { opacity: 0, scale: 0.98 },
        ...(inView
          ? {
              whileInView: { opacity: 1, scale: 1 },
              viewport: VIEWPORT,
            }
          : { animate: { opacity: 1, scale: 1 } }),
        transition: { duration, delay, ease: "easeOut" },
      }
    : {};

  return (
    <motion.div {...props} {...rest}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   StaggerContainer + StaggerItem — staggered children animation
   ---------------------------------------------------------------- */
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

interface StaggerContainerProps extends Omit<
  HTMLMotionProps<"div">,
  "children"
> {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  stagger = 0.08,
  delayChildren = 0.1,
  ...rest
}: StaggerContainerProps) {
  const animate = useMotionSafe();

  if (!animate) {
    return <div {...(rest as Record<string, unknown>)}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
}

export function StaggerItem({ children, ...rest }: StaggerItemProps) {
  const animate = useMotionSafe();

  if (!animate) {
    return <div {...(rest as Record<string, unknown>)}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   FloatingAnimation — subtle perpetual float (for icons/images)
   ---------------------------------------------------------------- */
interface FloatingProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
}

export function Floating({
  children,
  amplitude = 6,
  duration = 4,
  ...rest
}: FloatingProps) {
  const animate = useMotionSafe();

  if (!animate) {
    return <div {...(rest as Record<string, unknown>)}>{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   HoverLift — micro-interaction on hover (card lift + shadow)
   Used by wrapping a card; applies translateY + shadow on hover.
   ---------------------------------------------------------------- */
interface HoverLiftProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  y?: number;
}

export function HoverLift({ children, y = -3, ...rest }: HoverLiftProps) {
  const animate = useMotionSafe();

  if (!animate) {
    return <div {...(rest as Record<string, unknown>)}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ y, transition: { duration: 0.2, ease: "easeOut" } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

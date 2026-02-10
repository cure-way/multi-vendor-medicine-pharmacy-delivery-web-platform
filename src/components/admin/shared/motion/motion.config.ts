/**
 * Centralized motion configuration for admin UI animations.
 *
 * All timing, easing, and variant definitions live here so every
 * animated component shares the same "feel".  Durations are deliberately
 * short (0.18 – 0.30 s) to keep the UI snappy and enterprise-grade.
 */

/* ── Easing ── */
export const ease = {
  /** Default ease-out for entrances */
  out: [0.25, 0.46, 0.45, 0.94] as const,
  /** Ease-in-out for transitions that reverse */
  inOut: [0.42, 0, 0.58, 1] as const,
};

/* ── Durations (seconds) ── */
export const duration = {
  fast: 0.15,
  normal: 0.22,
  slow: 0.32,
};

/* ── Spring presets ── */
export const spring = {
  /** Snappy spring, minimal overshoot — default for UI */
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
  /** Gentle spring for larger elements */
  gentle: { type: "spring" as const, stiffness: 260, damping: 24 },
};

/* ── Shared transition presets ── */
export const transition = {
  /** Default page/section entrance */
  enter: { duration: duration.normal, ease: ease.out },
  /** Slightly slower for page-level transitions */
  page: { duration: duration.slow, ease: ease.out },
  /** Fast for micro-interactions */
  micro: { duration: duration.fast, ease: ease.out },
};

/* ── Variant sets ── */

/** Fade-up entrance used by PageTransition */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: transition.page },
};

/** Fade-in only (no translation) */
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.enter },
};

/** Stagger container — children animate sequentially */
export const staggerContainer = (staggerDelay = 0.06) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.04,
    },
  },
});

/** Individual stagger child — fade + slide up */
export const staggerChild = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.enter,
  },
};

/** Table row entrance — fade in from slight left offset */
export const tableRowVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transition.enter,
  },
};

/** Scale-up for hover / tap on interactive cards */
export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.015, transition: transition.micro },
  tap: { scale: 0.985, transition: transition.micro },
};

/** Button micro-interaction */
export const buttonTap = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: transition.micro },
  tap: { scale: 0.97, transition: transition.micro },
};

/** Sidebar collapse / expand using Framer Motion layout */
export const sidebarVariants = {
  expanded: { width: 280 },
  collapsed: { width: 72 },
};

/** Fade-out for labels when sidebar collapses */
export const sidebarLabelVariants = {
  visible: { opacity: 1, transition: { duration: duration.fast } },
  hidden: { opacity: 0, transition: { duration: duration.fast } },
};

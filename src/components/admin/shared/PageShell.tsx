"use client";

import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Consistent page wrapper for all admin routes.
 * Provides uniform padding, spacing, and background.
 */
export default function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "flex-1 px-3 sm:pl-4 sm:pr-6 py-3 sm:py-4 space-y-3 bg-neutral-light",
        className,
      )}
    >
      {children}
    </div>
  );
}

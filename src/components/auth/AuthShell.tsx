"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AuthShellProps {
  children: ReactNode;
  hero?: ReactNode;
  className?: string;
}

/**
 * AuthShell - Split-screen layout wrapper for auth pages
 * Desktop: 50/50 split (hero left fixed, content right scrollable)
 * Mobile: Stacked (hero hidden, content full with normal scroll)
 */
export function AuthShell({ children, hero, className }: AuthShellProps) {
  return (
    <div
      className={cn("flex w-full h-dvh bg-white overflow-hidden", className)}
    >
      {/* Left side - Hero area (fixed, no scroll) */}
      {hero && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden lg:block w-1/2 h-dvh flex-shrink-0 relative overflow-hidden"
        >
          {hero}
        </motion.div>
      )}

      {/* Right side - Content area (scrollable) */}
      <div
        className={cn(
          "flex flex-col h-dvh overflow-y-auto",
          hero ? "w-full lg:w-1/2" : "w-full",
        )}
      >
        {children}
      </div>
    </div>
  );
}

"use client";

import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   NOTIFICATIONS LAYOUT
   Two-column on desktop (left sidebar + right content).
   Stacks vertically on tablet / mobile.
   ------------------------------------------------------------------ */
interface NotificationsLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export default function NotificationsLayout({
  leftPanel,
  rightPanel,
}: NotificationsLayoutProps) {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 items-stretch">
      {/* Left column — fixed width on desktop, full width on mobile */}
      <div className="w-full lg:w-[320px] lg:shrink-0">{leftPanel}</div>

      {/* Right column — fills remaining space */}
      <div className="flex-1 min-w-0 w-full">{rightPanel}</div>
    </div>
  );
}

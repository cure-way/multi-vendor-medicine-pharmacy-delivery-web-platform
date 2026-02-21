"use client";

import { usePathname } from "next/navigation";
import { PatientHeader } from "@/components/patient";
import { HomeHeader } from "@/components/patient/header";

/**
 * HeaderSwitch
 * Renders HomeHeader on the home page ("/") and PatientHeader
 * on all other patient-facing routes.
 */
interface HeaderSwitchProps {
  isAuthenticated: boolean;
  notificationCount?: number;
  cartCount?: number;
}

export function HeaderSwitch({
  isAuthenticated,
  notificationCount = 0,
  cartCount = 0,
}: HeaderSwitchProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <HomeHeader isAuthenticated={isAuthenticated} cartCount={cartCount} />
    );
  }

  return (
    <PatientHeader
      isAuthenticated={isAuthenticated}
      notificationCount={notificationCount}
      cartCount={cartCount}
    />
  );
}

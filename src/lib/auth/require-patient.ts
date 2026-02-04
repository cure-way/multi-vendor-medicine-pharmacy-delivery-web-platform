/**
 * Server-side auth guard for patient-only pages
 * Call at the top of protected server components
 */

import { redirect } from "next/navigation";
import { getSession, type Session } from "./get-session";
import { USER_ROLES } from "../roles";

const SIGN_IN_PATH = "/auth/sign-in";

/**
 * Require patient authentication for server components
 * Redirects to sign-in if not authenticated
 *
 * @example
 * ```tsx
 * // In a server component
 * export default async function OrdersPage() {
 *   const session = await requirePatient();
 *   // session is guaranteed to exist here
 *   return <div>Welcome, {session.user.name}</div>;
 * }
 * ```
 */
export async function requirePatient(): Promise<Session> {
  const session = await getSession();

  if (!session) {
    redirect(SIGN_IN_PATH);
  }

  // Optionally verify the user has the patient role
  if (session.user.role !== USER_ROLES.PATIENT) {
    // If user is authenticated but not a patient, redirect to their portal
    switch (session.user.role) {
      case USER_ROLES.PHARMACY:
        redirect("/pharmacy/dashboard");
      case USER_ROLES.ADMIN:
        redirect("/admin/dashboard");
      default:
        redirect(SIGN_IN_PATH);
    }
  }

  return session;
}

/**
 * Get optional patient session without redirecting
 * Useful for pages that work for both guests and authenticated users
 */
export async function getPatientSession(): Promise<Session | null> {
  const session = await getSession();

  if (!session) {
    return null;
  }

  // Return null if not a patient role
  if (session.user.role !== USER_ROLES.PATIENT) {
    return null;
  }

  return session;
}

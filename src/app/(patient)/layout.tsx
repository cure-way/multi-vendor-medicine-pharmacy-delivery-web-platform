import { PatientHeader } from "@/components/patient";
import { getPatientSession } from "@/lib/auth";

/**
 * Patient Layout
 * Unified layout for all patient-facing pages (main website UI).
 * Renders PatientHeader and wraps children with a container.
 *
 * This layout is used for BOTH:
 * - Guest users (sign in/up buttons shown)
 * - Authenticated patients (avatar, notifications, etc.)
 */
export default async function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get optional session - null for guests, Session for authenticated
  const session = await getPatientSession();

  return (
    <div className="min-h-screen bg-gray-50">
      <PatientHeader
        isAuthenticated={session !== null}
        notificationCount={0} // TODO: Fetch from notifications API
        cartCount={0} // TODO: Fetch from cart API
      />
      <main className="flex-1">{children}</main>
      {/* Mobile Bottom Navigation - only for authenticated patients */}
      {session && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
          {/* TODO: Implement PatientBottomNav component */}
        </nav>
      )}
    </div>
  );
}

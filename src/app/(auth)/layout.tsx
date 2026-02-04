import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { USER_ROLES } from "@/lib/roles";

export default async function AuthRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is already authenticated
  const session = await getSession();

  // Redirect authenticated users to their appropriate dashboard
  if (session?.user) {
    switch (session.user.role) {
      case USER_ROLES.PATIENT:
        redirect("/");
      case USER_ROLES.PHARMACY:
        redirect("/pharmacy/dashboard");
      case USER_ROLES.ADMIN:
        redirect("/admin/dashboard");
      default:
        redirect("/");
    }
  }

  // Not authenticated, render auth pages
  return <>{children}</>;
}

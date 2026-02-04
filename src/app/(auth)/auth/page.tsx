import { redirect } from "next/navigation";

/**
 * Auth Index Page
 * Redirects to sign-in page (server-side redirect, no client flicker)
 */
export default function AuthPage() {
  redirect("/auth/sign-in");
}

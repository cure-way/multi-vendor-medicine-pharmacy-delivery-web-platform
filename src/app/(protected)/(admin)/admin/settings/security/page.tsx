import type { Metadata } from "next";
import AdminSettingsSecurityPage from "./page.client";

export const metadata: Metadata = {
  title: "Security Settings",
  description:
    "Manage passwords, two-factor authentication, and security preferences",
};

export default function Page() {
  return <AdminSettingsSecurityPage />;
}

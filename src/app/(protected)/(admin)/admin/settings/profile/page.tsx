import type { Metadata } from "next";
import AdminSettingsProfilePage from "./page.client";

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Manage your admin profile information",
};

export default function Page() {
  return <AdminSettingsProfilePage />;
}

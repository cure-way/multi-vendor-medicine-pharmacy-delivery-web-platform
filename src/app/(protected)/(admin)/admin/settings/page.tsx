import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your admin account settings",
};

export default function AdminSettingsPage() {
  redirect("/admin/settings/profile");
}

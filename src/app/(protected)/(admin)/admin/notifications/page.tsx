import type { Metadata } from "next";
import AdminNotificationsPage from "./page.client";

export const metadata: Metadata = {
  title: "Notifications",
  description: "View and manage system notifications and alerts",
};

export default function Page() {
  return <AdminNotificationsPage />;
}

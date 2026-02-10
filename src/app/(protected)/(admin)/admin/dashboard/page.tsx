import type { Metadata } from "next";
import AdminDashboardPage from "./page.client";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Admin dashboard overview with analytics, revenue, and recent activity",
};

export default function Page() {
  return <AdminDashboardPage />;
}

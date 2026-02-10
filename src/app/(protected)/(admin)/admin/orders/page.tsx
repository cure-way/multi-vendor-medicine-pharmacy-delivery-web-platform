import type { Metadata } from "next";
import AdminOrdersPage from "./page.client";

export const metadata: Metadata = {
  title: "Orders",
  description: "View and manage customer orders and order status",
};

export default function Page() {
  return <AdminOrdersPage />;
}

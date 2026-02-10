import type { Metadata } from "next";
import AdminDeliveriesPage from "./page.client";

export const metadata: Metadata = {
  title: "Deliveries",
  description: "Track and manage delivery operations and drivers",
};

export default function Page() {
  return <AdminDeliveriesPage />;
}

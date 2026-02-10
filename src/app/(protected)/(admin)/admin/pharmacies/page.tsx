import type { Metadata } from "next";
import AdminPharmaciesPage from "./page.client";

export const metadata: Metadata = {
  title: "Pharmacies",
  description: "View and manage registered pharmacies and partners",
};

export default function Page() {
  return <AdminPharmaciesPage />;
}

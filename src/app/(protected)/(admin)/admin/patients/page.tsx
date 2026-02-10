import type { Metadata } from "next";
import AdminPatientsPage from "./page.client";

export const metadata: Metadata = {
  title: "Patients",
  description: "View and manage registered patients",
};

export default function Page() {
  return <AdminPatientsPage />;
}

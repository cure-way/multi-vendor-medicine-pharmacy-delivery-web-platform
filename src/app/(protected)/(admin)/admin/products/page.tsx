import type { Metadata } from "next";
import AdminProductsPage from "./page.client";

export const metadata: Metadata = {
  title: "Products",
  description: "View and manage medicine products and inventory",
};

export default function Page() {
  return <AdminProductsPage />;
}

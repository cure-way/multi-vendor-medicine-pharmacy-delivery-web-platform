import DashboardLayout from "@/components/pharmacy/layout/DashboardLayout";

export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

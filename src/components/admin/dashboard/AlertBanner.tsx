import SharedAlertBanner from "@/components/admin/shared/AlertBanner";

export default function AlertBanner() {
  return (
    <SharedAlertBanner
      variant="dashboard"
      title="System attention required"
      description="Low stock levels detected across multiple pharmacies. This may affect ongoing orders."
      actionLabel="View impacted pharmacies"
    />
  );
}

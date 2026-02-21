import { inventoryData } from "@/services/pharmacyData";
import AlertBanner from "@/components/pharmacy/inventory/AlertBanner";
import PageHeader from "@/components/pharmacy/shared/PageHeader";
import { FiLayers } from "react-icons/fi";
import { getInventoryAlerts } from "@/services/pharmacyService";
import InventorySection from "@/components/pharmacy/inventory/InventorySection";

export default function InventoryPage() {
  const alert = getInventoryAlerts(inventoryData);

  return (
    <div className="space-y-6">
      <PageHeader title="Inventory Management" icon={FiLayers} />

      {alert && (
        <AlertBanner title={alert.title} description={alert.description} />
      )}

      <InventorySection data={inventoryData} />
    </div>
  );
}

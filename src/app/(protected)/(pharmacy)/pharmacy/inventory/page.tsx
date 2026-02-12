import { inventoryData } from "@/services/pharmacyData";
import AlertBanner from "@/components/pharmacy/inventory/AlertBanner";
import InventoryFilters from "@/components/pharmacy/inventory/InventoryFilters";
import InventoryTable from "@/components/pharmacy/inventory/InventoryTable";

import PageHeader from "@/components/pharmacy/shared/PageHeader";
import { FiLayers } from "react-icons/fi";
import { getInventoryAlerts } from "@/services/pharmacyService";

export default function InventoryPage() {
  const alert = getInventoryAlerts(inventoryData);

  return (
    <div className="space-y-6">
      <PageHeader title="Inventory Management" icon={FiLayers} />
      {alert && (
        <AlertBanner title={alert.title} description={alert.description} />
      )}
      <InventoryFilters />
      <InventoryTable data={inventoryData} />
    </div>
  );
}

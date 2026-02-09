import { inventoryData } from "@/components/pharmacy/utils/data";
import AlertBanner from "@/components/pharmacy/inventory/AlertBanner";
import InventoryFilters from "@/components/pharmacy/inventory/InventoryFilters";
import InventoryTable from "@/components/pharmacy/inventory/InventoryTable";

import PageHeader from "@/components/pharmacy/shared/PageHeader";
import { FiLayers } from "react-icons/fi";

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Inventory Management" icon={FiLayers} />
      <AlertBanner
        title="Medication Out Of Stock Alert"
        description="A very limited quantity of Panadol remains. Please restock immediately to ensure continued order fulfillment."
      />
      <InventoryFilters />
      <InventoryTable data={inventoryData} />
    </div>
  );
}

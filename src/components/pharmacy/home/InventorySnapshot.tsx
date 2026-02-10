"use client";

import { useRouter } from "next/navigation";
import InventoryItemCard from "./InventoryItemCard";
import { inventoryData } from "../utils/data";

export default function InventorySnapshot() {
  const router = useRouter();

  return (
    <div className="bg-white p-4 border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-900 text-sm">
          Inventory Snapshot
        </h2>

        <button
          onClick={() => router.push("/pharmacy/inventory")}
          className="font-medium text-(--color-primary) text-xs"
        >
          View All →
        </button>
      </div>

      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
        {inventoryData.slice(0, 3).map((item) => (
          <InventoryItemCard
            key={item.id}
            id={item.id}
            title={item.medicineName}
            extra={item.batchNumber}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import InventoryItemCard from "./InventoryItemCard";

const INVENTORY_ITEMS = [
  {
    id: "M-1",
    title: "Vitamin A",
    extra: "+5 more",
    image: "/medicines/vitamin-a.png",
  },
  {
    id: "M-2",
    title: "Vitamin D",
    extra: "+4 more",
    image: "/medicines/vitamin-d.png",
  },
  {
    id: "M-3",
    title: "Antibiotic",
    extra: "+2 more",
    image: "/medicines/antibiotic.png",
  },
];

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
        {INVENTORY_ITEMS.map((item) => (
          <InventoryItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            extra={item.extra}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InventoryItem, MatchedOrder } from "@/types/pharmacyTypes";

interface GlobalSearchPanelProps {
  medicines: InventoryItem[];
  orders: MatchedOrder[];
  onItemClick?: () => void;
}

export default function GlobalSearchPanel({
  medicines,
  orders,
  onItemClick,
}: GlobalSearchPanelProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"medicines" | "orders">(
    "medicines",
  );

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-2xl ring-1 ring-black/5 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("medicines")}
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "medicines"
              ? "text-(--color-primary) border-b-2 border-(--color-primary)"
              : "text-gray-500"
          }`}
        >
          Medicines ({medicines.length})
        </button>

        <button
          onClick={() => setActiveTab("orders")}
          className={`flex-1 py-2 text-sm font-medium ${
            activeTab === "orders"
              ? "text-(--color-primary) border-b-2 border-(--color-primary)"
              : "text-gray-500"
          }`}
        >
          Orders ({orders.length})
        </button>
      </div>

      <div className="p-3 max-h-72 overflow-y-auto">
        {activeTab === "medicines" &&
          (medicines.length ? (
            medicines.map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  router.push(`/pharmacy/inventory/${m.id}`);
                  onItemClick?.();
                }}
                className="hover:bg-gray-100 p-2 rounded-lg text-sm cursor-pointer"
              >
                <p className="font-medium">{m.medicineName}</p>
                <p className="text-gray-500 text-xs">
                  {m.brand} • {m.manufacturer}
                </p>
              </div>
            ))
          ) : (
            <p className="py-4 text-gray-500 text-sm text-center">
              No medicines found
            </p>
          ))}

        {activeTab === "orders" &&
          (orders.length ? (
            orders.map(({ order, matchedItems }) => {
              return (
                <div
                  key={order.id}
                  onClick={() => {
                    router.push(`/pharmacy/orders/${order.id}`);
                    onItemClick?.();
                  }}
                  className="hover:bg-gray-100 p-2 rounded-lg text-sm cursor-pointer"
                >
                  <p className="font-medium">Order #{order.id}</p>

                  <p className="text-gray-500 text-xs">
                    {matchedItems[0].medicineName}
                    {matchedItems.length > 1 &&
                      ` +${matchedItems.length - 1} more`}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="py-4 text-gray-500 text-sm text-center">
              No orders found
            </p>
          ))}
      </div>
    </div>
  );
}

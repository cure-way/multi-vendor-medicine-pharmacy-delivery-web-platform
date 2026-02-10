"use client";

import { useMemo, useState } from "react";
import { OrdersHeader } from "@/components/patient/orders/OrdersHeader";
import { OrdersTabs, type OrdersTabKey } from "@/components/patient/orders/OrdersTabs";
import { OrdersList } from "@/components/patient/orders/OrdersList";
import { mockOrders } from "@/services/orders.mock";
import type { Order } from "@/types/order";

function filterByTab(tab: OrdersTabKey, orders: Order[]) {
  if (tab === "all") return orders;
  if (tab === "active")
    return orders.filter((o) => o.status === "processing" || o.status === "on_the_way");
  if (tab === "delivered") return orders.filter((o) => o.status === "delivered");
  if (tab === "cancelled") return orders.filter((o) => o.status === "cancelled");
  return orders;
}

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrdersTabKey>("all");

  const counts = useMemo(() => {
    const all = mockOrders.length;
    const active = mockOrders.filter(
      (o) => o.status === "processing" || o.status === "on_the_way"
    ).length;
    const delivered = mockOrders.filter((o) => o.status === "delivered").length;
    const cancelled = mockOrders.filter((o) => o.status === "cancelled").length;
    return { all, active, delivered, cancelled };
  }, []);

  const tabs = useMemo(
    () => [
      { key: "all" as const, label: "All", count: counts.all },
      { key: "active" as const, label: "Active", count: counts.active },
      { key: "delivered" as const, label: "Delivered", count: counts.delivered },
      { key: "cancelled" as const, label: "Cancelled", count: counts.cancelled },
    ],
    [counts]
  );

  const filtered = useMemo(() => filterByTab(activeTab, mockOrders), [activeTab]);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-10 pb-6">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <OrdersHeader title="My Order" subtitle="Track and manage your orders" />

          <div className="w-full md:w-[560px]">
            <OrdersTabs activeTab={activeTab} tabs={tabs} onChange={setActiveTab} />
          </div>
        </div>

        {/* List (Scroll) */}
        <div className="mt-6 max-h-[1166px] overflow-y-auto pb-10">
          <OrdersList orders={filtered} />
        </div>
      </div>
    </div>
  );
}

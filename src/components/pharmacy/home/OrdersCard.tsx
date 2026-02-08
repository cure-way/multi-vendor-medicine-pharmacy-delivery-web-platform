"use client";

import OrdersStatusFilter from "./OrdersStatusFilter";
import OrdersTable from "./OrdersTable";

export default function OrdersCard() {
  return (
    <div className="bg-white mb-6 p-4 border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-900 text-sm">Orders</h2>
        <OrdersStatusFilter />
      </div>

      <OrdersTable />
    </div>
  );
}

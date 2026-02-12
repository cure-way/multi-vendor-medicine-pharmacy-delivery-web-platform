"use client";

import { useState } from "react";
import StatusDropdown from "../shared/StatusDropdown";
import OrdersTable from "./OrdersTable";
import { ORDER_STATUSES } from "@/utils/pharmacyConstants";
import { ORDERS } from "@/services/pharmacyData";

export default function OrdersCard() {
  const [status, setStatus] = useState("All");

  const filteredOrders =
    status === "All"
      ? ORDERS
      : ORDERS.filter((order) => order.status === status);

  return (
    <div className="bg-white mb-6 p-4 border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-900 text-sm">Orders</h2>
        <StatusDropdown
          options={ORDER_STATUSES}
          value={status}
          onChange={setStatus}
        />
      </div>

      <OrdersTable data={filteredOrders} />
    </div>
  );
}

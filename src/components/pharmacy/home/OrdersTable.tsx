"use client";

import { useRouter } from "next/navigation";
import { OrderRow } from "@/types/pharmacyTypes";
import { orderColumns } from "@/utils/pharmacyConstants";
import DataTable from "../shared/DataTable";
import { ORDERS } from "@/services/pharmacyData";

export default function OrdersTable() {
  const router = useRouter();

  return (
    <div>
      <DataTable<OrderRow>
        data={ORDERS}
        columns={orderColumns}
        onRowClick={(row) => router.push(`/pharmacy/orders/${row.id}`)}
        renderCell={(row, col) => {
          if (col.key === "status") {
            return (
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-(--color-primary)">
                {row.status}
              </span>
            );
          }

          if (col.key === "action") {
            return null;
          }

          return String(row[col.key]);
        }}
      />

      {/* Footer */}
      <div className="mt-3 text-right">
        <button
          onClick={() => router.push("/pharmacy/orders")}
          className="font-medium text-(--color-primary) text-xs"
        >
          View All Orders →
        </button>
      </div>
    </div>
  );
}

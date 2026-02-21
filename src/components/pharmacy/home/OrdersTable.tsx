"use client";

import { useRouter } from "next/navigation";
import { OrderRow } from "@/types/pharmacyTypes";
import { orderColumns } from "@/utils/pharmacyConstants";
import DataTable from "../shared/DataTable";
import StatusBadge from "../shared/StatusBadge";
import { inventoryData } from "@/services/pharmacyData";

export default function OrdersTable({ data }: { data: OrderRow[] }) {
  const router = useRouter();

  return (
    <div>
      <DataTable<OrderRow>
        data={data}
        columns={orderColumns}
        onRowClick={(row) => router.push(`/pharmacy/orders/${row.id}`)}
        renderCell={(row, col) => {
          if (col.key === "status") {
            return <StatusBadge value={row.status} type="order" />;
          }

          if (col.key === "items") {
            if (!row.items.length) return "-";

            const firstItem = row.items[0];

            const medicine = inventoryData.find(
              (inv) => inv.id === firstItem.inventoryId,
            );

            const remainingCount = row.items.length - 1;

            return (
              <span>
                {medicine?.medicineName ?? "Unknown"}
                {remainingCount > 0 && (
                  <span className="ml-1 text-gray-500 text-xs">
                    +{remainingCount}
                  </span>
                )}
              </span>
            );
          }

          if (col.key === "total") {
            return `${row.total.toFixed(2)}$`;
          }

          return String(row[col.key as keyof OrderRow]);
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

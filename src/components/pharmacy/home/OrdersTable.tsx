"use client";

import { useRouter } from "next/navigation";
import { OrderRow } from "@/types/pharmacyTypes";
import { orderColumns } from "@/utils/pharmacyConstants";
import DataTable from "../shared/DataTable";
import StatusBadge from "../shared/StatusBadge";

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

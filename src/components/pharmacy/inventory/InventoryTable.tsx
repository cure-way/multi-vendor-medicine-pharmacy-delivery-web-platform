"use client";

import DataTable from "../shared/DataTable";
import { useRouter } from "next/navigation";
import ActionsDropdown from "../shared/ActionsDropdown";
import { ActionId, InventoryRow } from "../utils/types";
import { columns, INVENTORY_ACTIONS } from "../utils/constants";

export default function InventoryTable({ data }: { data: InventoryRow[] }) {
  const router = useRouter();

  function handleAction(action: ActionId, row: InventoryRow) {
    switch (action) {
      case "view":
        router.push(`/pharmacy/inventory/${row.id}`);
        break;

      case "mark_low":
        // markLowStock(row.id);
        break;

      case "mark_out":
        // markOutStock(row.id);
        break;

      case "delete":
        // deleteMedicine(row.id);
        break;
    }
  }

  return (
    <DataTable
      data={data}
      columns={columns}
      renderCell={(row, col) => {
        if (col.key === "action") {
          return (
            <ActionsDropdown
              actions={INVENTORY_ACTIONS}
              onAction={(actionId) => handleAction(actionId, row)}
            />
          );
        }

        if (col.key === "status") {
          return (
            <span
              className={`inline-flex rounded-full px-4 py-1.5 text-xs font-medium ${
                row.status === "in"
                  ? "bg-green-100 text-green-700"
                  : row.status === "low"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {row.status === "in"
                ? "In Stock"
                : row.status === "low"
                  ? "Low Stock"
                  : "Out of Stock"}
            </span>
          );
        }

        return String(row[col.key]);
      }}
    />
  );
}

"use client";

import DataTable from "../shared/DataTable";
import { useRouter } from "next/navigation";
import ActionsDropdown from "../shared/ActionsDropdown";
import { ActionId, InventoryItem } from "@/types/pharmacyTypes";
import { INVENTORY_ACTIONS, inventoryColumns } from "@/utils/pharmacyConstants";
import StatusBadge from "../shared/StatusBadge";
import { getInventoryStatus } from "@/services/pharmacyService";

export default function InventoryTable({ data }: { data: InventoryItem[] }) {
  const router = useRouter();

  function handleAction(action: ActionId, row: InventoryItem) {
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
      columns={inventoryColumns}
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
            <StatusBadge value={getInventoryStatus(row)} type="inventory" />
          );
        }
        return String(row[col.key]);
      }}
    />
  );
}

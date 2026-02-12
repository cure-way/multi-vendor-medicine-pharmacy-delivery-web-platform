"use client";

import DataTable from "../shared/DataTable";
import ActionsDropdown from "../shared/ActionsDropdown";
import { InventoryItem } from "@/types/pharmacyTypes";
import { INVENTORY_ACTIONS, inventoryColumns } from "@/utils/pharmacyConstants";
import StatusBadge from "../shared/StatusBadge";
import { getInventoryStatus } from "@/services/pharmacyService";
import ConfirmActionModal from "../shared/ConfirmActionModal";
import { useMedicineActions } from "@/hooks/pharmacy/useMedicineActions";

export default function InventoryTable({ data }: { data: InventoryItem[] }) {
  const { pendingAction, handleMedicineAction, handleConfirm, closeAction } =
    useMedicineActions();

  return (
    <>
      <DataTable
        data={data}
        columns={inventoryColumns}
        renderCell={(row, col) => {
          if (col.key === "action") {
            return (
              <ActionsDropdown
                actions={INVENTORY_ACTIONS}
                onAction={(actionId) => handleMedicineAction(actionId, row)}
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
      <ConfirmActionModal
        open={!!pendingAction}
        title={
          pendingAction?.type === "delete"
            ? "Delete Medicine"
            : "Mark as Out of Stock"
        }
        description={
          pendingAction?.type === "delete"
            ? `Are you sure you want to delete ${pendingAction.item.medicineName}?`
            : `Mark ${pendingAction?.item.medicineName} as out of stock?`
        }
        confirmLabel={
          pendingAction?.type === "delete" ? "Delete Medicine" : "Confirm"
        }
        confirmVariant={pendingAction?.type === "delete" ? "danger" : "primary"}
        onConfirm={handleConfirm}
        onCancel={closeAction}
      />
    </>
  );
}

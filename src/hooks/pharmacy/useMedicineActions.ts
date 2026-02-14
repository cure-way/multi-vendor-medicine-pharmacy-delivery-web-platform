"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InventoryItem } from "@/types/pharmacyTypes";

export type MedicineActionType = "delete" | "mark_out";

export interface PendingMedicineAction {
  type: MedicineActionType;
  item: InventoryItem;
}

export function useMedicineActions() {
  const router = useRouter();

  const [pendingAction, setPendingAction] =
    useState<PendingMedicineAction | null>(null);

  function handleMedicineAction(action: string, item: InventoryItem) {
    switch (action) {
      case "view":
        router.push(`/pharmacy/inventory/${item.id}`);
        break;

      case "delete":
        setPendingAction({ type: "delete", item });
        break;

      case "mark_out":
        setPendingAction({ type: "mark_out", item });
        break;
    }
  }

  function handleConfirm() {
    if (!pendingAction) return;

    if (pendingAction.type === "delete") {
      console.log("Deleting:", pendingAction.item.id);
      // delete logic here
    }

    if (pendingAction.type === "mark_out") {
      console.log("Marking out:", pendingAction.item.id);
      // mark out logic here
    }

    closeAction();
  }

  function closeAction() {
    setPendingAction(null);
  }

  return {
    pendingAction,
    handleMedicineAction,
    handleConfirm,
    closeAction,
  };
}

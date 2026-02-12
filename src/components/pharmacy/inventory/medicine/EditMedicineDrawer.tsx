"use client";

import clsx from "clsx";
import { X } from "lucide-react";
import { EditMedicinePayload, InventoryItem } from "@/types/pharmacyTypes";
import EditMedicineForm from "./edit-form/EditMedicineForm";

interface Props {
  open: boolean;
  onClose: () => void;
  item: InventoryItem;
}

export default function EditMedicineDrawer({ open, onClose, item }: Props) {
  function handleSave(data: EditMedicinePayload) {
    // await updateInventoryItem(item.id, data)
    onClose();
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={clsx(
          "z-50 fixed inset-0 bg-black/40 w-screen h-screen transition-opacity",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer */}
      <aside
        className={clsx(
          "top-0 right-0 z-999 fixed bg-white shadow-xl w-full sm:max-w-sm h-full",
          "flex flex-col",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-gray-900 text-sm">
            Edit medicine details
          </h2>

          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-2 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 p-4 overflow-y-auto">
          <EditMedicineForm item={item} onSubmit={handleSave} />
        </div>

        {/* Footer */}
        <div className="space-y-2 p-4 border-t">
          <button
            onClick={() => {
              document.querySelector("form")?.requestSubmit();
            }}
            className="w-full bg-(--color-primary) text-white py-2 rounded-lg text-sm"
          >
            Save changes
          </button>

          <button
            onClick={onClose}
            className="py-2 border rounded-lg w-full text-gray-600 text-sm"
          >
            Cancel
          </button>
        </div>
      </aside>
    </>
  );
}

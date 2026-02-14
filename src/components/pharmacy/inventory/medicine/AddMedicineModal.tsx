"use client";

import { MedicineFormPayload } from "@/types/pharmacyTypes";

import { X } from "lucide-react";
import MedicineForm from "./form/MedicineForm";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddMedicineModal({ open, onClose }: Props) {
  function handleSave(data: MedicineFormPayload) {
    onClose();
  }

  if (!open) return null;

  return (
    <div
      className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="flex flex-col bg-white shadow-xl rounded-2xl w-full max-w-md h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b shrink-0">
          <h2 className="font-semibold text-gray-900 text-sm">
            Add new medicine
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
          <MedicineForm onSubmit={handleSave} />
        </div>

        {/* Footer */}
        <div className="space-y-2 p-4 border-t shrink-0">
          <button
            type="submit"
            form="medicine-form"
            className="w-full bg-(--color-primary) text-white py-2 rounded-lg text-sm"
          >
            Save
          </button>

          <button
            onClick={onClose}
            className="py-2 border rounded-lg w-full text-gray-600 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

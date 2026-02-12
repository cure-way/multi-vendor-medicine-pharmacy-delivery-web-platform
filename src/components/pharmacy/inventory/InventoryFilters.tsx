"use client";

import { Plus } from "lucide-react";
import StatusDropdown from "../shared/StatusDropdown";
import { INVENTORY_STATUSES } from "@/utils/pharmacyConstants";

interface InventoryFiltersProps {
  status: string;
  onStatusChange: (value: string) => void;
}

export default function InventoryFilters({
  status,
  onStatusChange,
}: InventoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-3">
      <StatusDropdown
        options={INVENTORY_STATUSES}
        value={status}
        onChange={onStatusChange}
      />

      <button className="hover:bg-gray-100 p-2 border border-gray-200 rounded-lg">
        <Plus className="w-4 h-4 text-(--color-primary)" />
      </button>
    </div>
  );
}

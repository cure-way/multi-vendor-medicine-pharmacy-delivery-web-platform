"use client";

import { Plus, Search } from "lucide-react";
import StatusDropdown from "../shared/StatusDropdown";
import { INVENTORY_STATUSES } from "@/utils/pharmacyConstants";

interface InventoryFiltersProps {
  status: string;
  onStatusChange: (value: string) => void;

  search: string;
  onSearchChange: (value: string) => void;
}

export default function InventoryFilters({
  status,
  onStatusChange,
  search,
  onSearchChange,
}: InventoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-end items-center gap-3">
      <div className="relative flex flex-1 items-center bg-(--color-secondary-light) border rounded-lg">
        <Search className="left-3 absolute w-4 h-4 text-gray-500 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Medicine..."
          className="bg-transparent py-2 pr-3 pl-9 outline-none w-full text-sm"
        />
      </div>

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

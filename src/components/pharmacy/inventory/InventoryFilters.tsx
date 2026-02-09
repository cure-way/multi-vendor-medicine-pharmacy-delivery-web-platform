"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import StatusDropdown from "../shared/StatusDropdown";
import { INVENTORY_STATUSES } from "../utils/constants";

export default function InventoryFilters() {
  const [status, setStatus] = useState("All Status");

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex flex-1 items-center gap-2 bg-(--color-secondary-light) px-3 py-2 border  rounded-lg">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search Medicine..."
          className="bg-transparent outline-none placeholder:text-gray-500 text-sm"
        />
      </div>

      <div className="flex items-center gap-2">
        <StatusDropdown
          options={INVENTORY_STATUSES}
          value={status}
          onChange={setStatus}
        />

        <button className="hover:bg-gray-100 mr-2 p-2 border border-gray-200 rounded-lg">
          <Plus className="w-4 h-4 text-(--color-primary)" />
        </button>
      </div>
    </div>
  );
}

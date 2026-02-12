"use client";

import { useState } from "react";
import InventoryFilters from "./InventoryFilters";
import InventoryTable from "./InventoryTable";
import { InventoryItem } from "@/types/pharmacyTypes";
import { getInventoryStatus } from "@/services/pharmacyService";

interface InventorySectionProps {
  data: InventoryItem[];
}

export default function InventorySection({ data }: InventorySectionProps) {
  const [status, setStatus] = useState("all");

  const filteredInventory =
    status === "all"
      ? data
      : data.filter((item) => getInventoryStatus(item) === status);

  return (
    <>
      <InventoryFilters status={status} onStatusChange={setStatus} />

      <InventoryTable data={filteredInventory} />
    </>
  );
}

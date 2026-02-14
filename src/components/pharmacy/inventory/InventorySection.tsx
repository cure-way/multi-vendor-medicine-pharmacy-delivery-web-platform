"use client";

import { useState, useMemo } from "react";
import InventoryFilters from "./InventoryFilters";
import InventoryTable from "./InventoryTable";
import { InventoryItem } from "@/types/pharmacyTypes";

interface InventorySectionProps {
  data: InventoryItem[];
}

export default function InventorySection({ data }: InventorySectionProps) {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const filteredInventory = useMemo(() => {
    const searchFiltered = data.filter((item) => {
      const query = search.toLowerCase();

      return (
        item.medicineName.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        item.manufacturer.toLowerCase().includes(query)
      );
    });

    if (status === "all") return searchFiltered;

    return searchFiltered.filter((item) => item.status === status);
  }, [data, search, status]);

  return (
    <>
      <InventoryFilters
        status={status}
        onStatusChange={setStatus}
        search={search}
        onSearchChange={setSearch}
      />

      <InventoryTable data={filteredInventory} />
    </>
  );
}

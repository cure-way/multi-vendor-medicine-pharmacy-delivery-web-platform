import { Column, InventoryRow, RowAction } from "./types";

export const STATUSES = ["All Status", "In Stock", "Low Stock", "Out Of Stock"];

export const columns: readonly Column<InventoryRow>[] = [
  { key: "id", header: "ID", hideOnMobile: true },
  { key: "medicine", header: "Medicine" },
  { key: "brand", header: "Brand", hideOnMobile: true },
  { key: "stock", header: "Stock" },
  { key: "expiration", header: "Expiration", hideOnMobile: true },
  { key: "status", header: "Status" },
  { key: "action", header: "" },
];

export const INVENTORY_ACTIONS: RowAction[] = [
  { id: "view", label: "View details" },
  { id: "mark_low", label: "Mark as low stock" },
  { id: "mark_out", label: "Mark as out of stock" },
  { id: "delete", label: "Delete medicine", danger: true },
];

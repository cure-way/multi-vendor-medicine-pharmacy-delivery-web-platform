import { Column, InventoryItem, OrderRow, RowAction } from "./types";

export const INVENTORY_STATUSES = [
  "All Status",
  "In Stock",
  "Low Stock",
  "Out Of Stock",
];

export const ORDER_STATUSES = ["All", "New", "Past", "Delivered"];

export const inventoryColumns: Column<InventoryItem>[] = [
  { key: "id", header: "ID" },
  { key: "medicineName", header: "Medicine" },
  { key: "brand", header: "Brand" },
  { key: "stock", header: "Stock" },
  { key: "expiryDate", header: "Expiration" },
  { key: "status", header: "Status" },
  { key: "action", header: "" },
];

export const INVENTORY_ACTIONS: RowAction[] = [
  { id: "view", label: "View details" },
  { id: "mark_low", label: "Mark as low stock" },
  { id: "mark_out", label: "Mark as out of stock" },
  { id: "delete", label: "Delete medicine", danger: true },
];

export const orderColumns: readonly Column<OrderRow>[] = [
  { key: "id", header: "Order ID" },
  { key: "customer", header: "Customer" },
  { key: "medicine", header: "Medicine", hideOnMobile: true },
  { key: "total", header: "Total" },
  { key: "date", header: "Date", hideOnMobile: true },
  { key: "status", header: "Status" },
];

import {
  Column,
  InventoryItem,
  OrderRow,
  RowAction,
} from "@/types/pharmacyTypes";

export const INVENTORY_STATUSES = [
  { label: "All Status", value: "all" },
  { label: "In Stock", value: "in" },
  { label: "Low Stock", value: "low" },
  { label: "Out Of Stock", value: "out" },
];

export const ORDER_STATUSES = [
  "All",
  "New",
  "Pending",
  "Delivered",
  "Cancelled",
];

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

export const DAY_ORDER = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
] as const;

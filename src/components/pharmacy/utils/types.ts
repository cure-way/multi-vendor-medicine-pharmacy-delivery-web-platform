export type InventoryStatus = "in" | "low" | "out";

export type InventoryCategory =
  | "pain_relief"
  | "antibiotics"
  | "vitamins"
  | "digestive"
  | "diabetes"
  | "eye_care"
  | "cough_cold";

export interface InventoryRow {
  id: string;
  medicine: string;
  brand: string;
  stock: string;
  expiration: string;
  status: "in" | "low" | "out";
  category: InventoryCategory;
}

export interface Column<T> {
  key: keyof T | "action";
  header: string;
  hideOnMobile?: boolean;
}

export type ActionId = "view" | "mark_low" | "mark_out" | "delete";

export interface RowAction {
  id: ActionId;
  label: string;
  danger?: boolean;
}

export interface ActionItem<TActionId extends string> {
  id: TActionId;
  label: string;
  danger?: boolean;
  disabled?: boolean;
}

export interface OrderRow {
  id: string;
  inventoryId: string;
  customer: string;
  medicine: string;
  total: string;
  date: string;
  status: "Delivered" | "Pending" | "Cancelled";
}

export type InventoryStatus = "in" | "low" | "out";

export interface InventoryRow {
  id: string;
  medicine: string;
  brand: string;
  stock: string;
  expiration: string;
  status: InventoryStatus;
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

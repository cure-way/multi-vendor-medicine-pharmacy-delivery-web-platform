import { DAY_ORDER } from "@/utils/pharmacyConstants";

export type InventoryStatus = "in" | "low" | "out";

export type InventoryCategory =
  | "pain_relief"
  | "antibiotics"
  | "vitamins"
  | "digestive"
  | "diabetes"
  | "eye_care"
  | "cough_cold";

export interface InventoryItem {
  id: string;

  medicineName: string;
  brand: string;
  manufacturer: string;
  category: string;

  stock: number;
  minStock: number;
  status: InventoryStatus;

  batchNumber: string;
  expiryDate: string;
  prescriptionRequired: boolean;

  purchasePrice: number;
  sellingPrice: number;

  imageUrl?: string;
  usageNotes?: string[];
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
export interface OrderItem {
  inventoryId: string;
  quantity: number;
  unitPrice: number;
}
export interface OrderRow {
  id: string;
  customer: string;
  items: OrderItem[];
  total: number;
  date: string;
  status: "Delivered" | "Pending" | "New" | "Cancelled";
}

export interface EditMedicinePayload {
  medicineName: string;
  category: string;
  stock: number;
  expiryDate: string;
  usageNotes: string[];
  imageFile?: File | null;
}
export interface EditMedicineFormValues {
  medicineName: string;
  category: string;
  stock: number;
  expiryDate: string;
  usageNotes: { value: string }[];
}

export interface OrderStatusDatum {
  name: "Delivered" | "Pending";
  value: number;
}

export interface WeeklyOrdersDatum {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  orders: number;
}

export type Day = (typeof DAY_ORDER)[number];

export interface TopMedicine {
  id: string;
  medicine: string;
  sold: number;
  orders: number;
}

export interface OrdersStatusModel {
  completedPercent: number;
  pendingPercent: number;
  outerData: { name: string; value: number }[];
  innerData: { name: string; value: number }[];
}
export interface MatchedOrder {
  order: OrderRow;
  matchedItems: InventoryItem[];
}

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
  status: "in" | "low" | "out";

  batchNumber: string;
  expiryDate: string;
  prescriptionRequired: boolean;

  purchasePrice: number;
  sellingPrice: number;

  /** NEW */
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

export interface OrderRow {
  id: string;
  inventoryId: string;
  customer: string;
  medicine: string;
  total: string;
  date: string;
  status: "Delivered" | "Pending" | "Cancelled";
}

export interface UsageNote {
  value: string;
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

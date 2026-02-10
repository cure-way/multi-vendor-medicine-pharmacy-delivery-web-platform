export type OrderStatus =
  | "processing"
  | "on_the_way"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  pharmacyName: string;
  address: string;
  itemsCount: number;
  total: number;
  orderedAtISO: string;
  estimatedDelivery?: string;
  status: OrderStatus;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  totalAmount: number;
  items: OrderItem[];
  prescriptions?: Prescription[];
  createdAt: string;
  updatedAt: string;
  deliveredAt?: string;
  notes?: string;
}

export interface Prescription {
  id: string;
  imageUrl: string;
  uploadedAt: string;
  reviewed: boolean;
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface OrderItem {
  id: string;
  medicineName: string;
  quantity: number;
  price: number;
  imageUrl?: string;
  inStock: boolean;
}

export interface Notification {
  id: string;
  type: "order" | "prescription" | "system";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  orderId?: string;
}

export interface PrescriptionRequest {
  reason: string;
  orderId?: string;
}

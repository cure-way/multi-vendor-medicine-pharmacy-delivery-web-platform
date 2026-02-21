export type OrderStatus = "processing" | "on_the_way" | "delivered" | "cancelled";

export interface Order {
  id: string; 
  pharmacyName: string;
  address: string;
  itemsCount: number;
  total: number; 
  orderedAtISO: string; 
  estimatedDelivery?: string; 
  status: OrderStatus;
}

export interface Notification {
  id: string;
  type: "order" | "ready" | "prescription" | "system" | "stock";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  orderId?: string;
}

export interface PrescriptionRequest {
  patientId: string;
  pharmacyId: string;
  notes?: string;
  files?: File[];
}

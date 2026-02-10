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

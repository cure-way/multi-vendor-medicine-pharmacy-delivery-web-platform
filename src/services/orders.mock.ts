import type { Order } from "@/types/order";

export const mockOrders: Order[] = [
  {
    id: "1245",
    pharmacyName: "City Pharmacy",
    address: "Omar Mukhtar Street, Al-Rimal Area",
    itemsCount: 3,
    total: 36.0,
    orderedAtISO: "2025-12-27T10:30:00.000Z",
    estimatedDelivery: "Today, 6:00 PM",
    status: "on_the_way",
  },
  {
    id: "3321",
    pharmacyName: "City Pharmacy",
    address: "Omar Mukhtar Street, Al-Rimal Area",
    itemsCount: 1,
    total: 12.5,
    orderedAtISO: "2025-12-20T14:20:00.000Z",
    status: "processing",
  },
  {
    id: "7788",
    pharmacyName: "City Pharmacy",
    address: "Omar Mukhtar Street, Al-Rimal Area",
    itemsCount: 2,
    total: 22.0,
    orderedAtISO: "2025-12-10T09:00:00.000Z",
    status: "delivered",
  },
  
];

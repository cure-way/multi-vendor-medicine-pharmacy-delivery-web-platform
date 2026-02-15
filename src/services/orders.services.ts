import { getRequest, postRequest, patchRequest } from "@/lib/apiClient";
import type {
  Order,
  OrderStatus,
  Notification,
  PrescriptionRequest,
} from "@/types/order";

export interface OrdersResponse {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
}

export interface NotificationsResponse {
  notifications: Notification[];
  total: number;
  unreadCount: number;
}

// Mock notifications for test
let mockNotifications: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "Order Confirmed",
    message: "Your order #ORD-001 has been confirmed and is being processed.",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
    orderId: "ORD-001",
  },
  {
    id: "2",
    type: "ready",
    title: "Order Ready for Pickup",
    message: "Your order #ORD-002 is ready for pickup at the pharmacy.",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    orderId: "ORD-002",
  },
  {
    id: "3",
    type: "prescription",
    title: "Prescription Approved",
    message: "Your prescription request has been approved by the pharmacist.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: "4",
    type: "stock",
    title: "Low Stock Alert",
    message:
      "Paracetamol 500mg is running low in stock. Only 10 units remaining.",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
  },
  {
    id: "5",
    type: "order",
    title: "Order Delivered",
    message: "Your order #ORD-003 has been successfully delivered.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    orderId: "ORD-003",
  },
  {
    id: "6",
    type: "system",
    title: "System Maintenance",
    message:
      "Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
  },
  {
    id: "7",
    type: "prescription",
    title: "Prescription Expiring Soon",
    message: "Your prescription for Amoxicillin will expire in 3 days.",
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
  },
  {
    id: "8",
    type: "order",
    title: "Order Cancelled",
    message: "Your order #ORD-004 has been cancelled as requested.",
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
    orderId: "ORD-004",
  },
];

export const fetchOrders = async (
  page: number = 1,
  limit: number = 10,
  status?: OrderStatus,
): Promise<OrdersResponse> => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status && { status }),
    });
    const data = await getRequest<OrdersResponse>(`/orders?${params}`);
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const fetchOrderById = async (id: string): Promise<Order> => {
  try {
    const data = await getRequest<Order>(`/orders/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const updateOrderStatus = async (
  orderId: string,
  status: OrderStatus,
): Promise<Order> => {
  try {
    const data = await patchRequest<Order, { status: OrderStatus }>(
      `/orders/${orderId}/status`,
      { status },
    );
    return data;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
};

export const fetchNotifications = async (): Promise<NotificationsResponse> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const unreadCount = mockNotifications.filter((n) => !n.read).length;

    return {
      notifications: mockNotifications,
      total: mockNotifications.length,
      unreadCount,
    };
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

export const markNotificationAsRead = async (id: string): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const notification = mockNotifications.find((n) => n.id === id);
    if (notification) {
      notification.read = true;
    }
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

export const markAllNotificationsAsRead = async (): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    mockNotifications = mockNotifications.map((n) => ({ ...n, read: true }));
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    throw error;
  }
};

export const requestPrescription = async (
  data: PrescriptionRequest,
): Promise<void> => {
  try {
    await postRequest<void, PrescriptionRequest>(
      "/prescriptions/request",
      data,
    );
  } catch (error) {
    console.error("Error requesting prescription:", error);
    throw error;
  }
};

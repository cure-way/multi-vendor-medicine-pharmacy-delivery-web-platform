import { getRequest, postRequest,patchRequest } from "@/lib/apiClient";
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
    const data = await getRequest<NotificationsResponse>("/notifications");
    return data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

export const markNotificationAsRead = async (id: string): Promise<void> => {
  try {
    await patchRequest<void, { read: boolean }>(`/notifications/${id}`, {
      read: true,
    });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

export const markAllNotificationsAsRead = async (): Promise<void> => {
  try {
    await patchRequest<void, { read: boolean }>(
      "/notifications/mark-all-read",
      {
        read: true,
      },
    );
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

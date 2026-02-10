import { useState, useEffect } from "react";
import Link from "next/link";
import type { Notification } from "@/types/order";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
  fetchNotifications,
} from "@/services/orders.services";

const notificationIcons: Record<
  Notification["type"],
  { icon: React.ReactNode; bgColor: string; iconColor: string }
> = {
  order: {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  prescription: {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  system: {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  stock: {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  ready: {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      setLoading(true);
      const data = await fetchNotifications();
      setNotifications(data.notifications);
    } catch (err) {
      setError("Failed to load notifications");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await markNotificationAsRead(id);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllNotificationsAsRead();
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-sm animate-pulse"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadNotifications}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Notification
          </h1>
          <p className="text-sm text-gray-500">
            You've {unreadCount} unread notifications
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllAsRead}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`py-2.5 rounded-lg font-medium text-sm transition-colors ${
            filter === "all"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`py-2.5 rounded-lg font-medium text-sm transition-colors ${
            filter === "unread"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Unread
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`py-2.5 rounded-lg font-medium text-sm transition-colors ${
            filter === "read"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Read
        </button>
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">🔔</div>
          <p className="text-gray-600 text-lg mb-2">
            {filter === "unread"
              ? "No unread notifications"
              : filter === "read"
                ? "No read notifications"
                : "No notifications yet"}
          </p>
          <p className="text-gray-500 text-sm">
            {filter === "unread"
              ? "You're all caught up!"
              : "Notifications will appear here"}
          </p>
        </div>
      ) : (
        <div className="space-y-0 bg-white rounded-lg overflow-hidden border border-gray-200">
          {filteredNotifications.map((notification, index) => {
            const iconData =
              notificationIcons[
                notification.type as keyof typeof notificationIcons
              ] || notificationIcons.system;

            const content = (
              <div
                className={`flex items-start gap-4 p-4 transition-colors hover:bg-gray-50 ${
                  index !== filteredNotifications.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 ${iconData.bgColor} rounded-full flex items-center justify-center ${iconData.iconColor}`}
                >
                  {iconData.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 mb-0.5">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {notification.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {new Date(notification.createdAt).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          },
                        )}
                      </span>
                      {!notification.read && (
                        <span className="w-2 h-2 bg-red-500 rounded-full" />
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {notification.message}
                  </p>
                </div>
              </div>
            );

            // If notification has orderId, wrap in Link
            if (notification.orderId) {
              return (
                <Link
                  key={notification.id}
                  href={`/orders/${notification.orderId}`}
                  onClick={() =>
                    !notification.read && handleMarkAsRead(notification.id)
                  }
                  className="block"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={notification.id}
                onClick={() =>
                  !notification.read && handleMarkAsRead(notification.id)
                }
                className="cursor-pointer"
              >
                {content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   TYPES
   ------------------------------------------------------------------ */
export interface Notification {
  id: string;
  name: string;
  avatar: string;
  time: string;
  message: string;
  isRead: boolean;
  isFavorite: boolean;
  isArchived: boolean;
  category: NotificationCategoryId;
}

export type NotificationCategoryId = "patient" | "vendor" | "delivery";

export interface NotificationCategory {
  id: NotificationCategoryId;
  label: string;
  icon: ReactNode;
  count: number;
}

export type TabFilter = "all" | "achieved" | "favorite";

export interface TabItem {
  key: TabFilter;
  label: string;
  count: number;
}

/* ------------------------------------------------------------------
   MOCK DATA — categories are built in the component that owns the
   icons; only raw notification rows live here.
   ------------------------------------------------------------------ */
export const mockNotifications: Notification[] = [
  {
    id: "1",
    name: "Mohammed B. Alfaro",
    avatar: "",
    time: "just now",
    message: "A patient has sent a request related to their medication order.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "2",
    name: "Sarah D. Lee",
    avatar: "",
    time: "5 minutes ago",
    message: "A new appointment has been scheduled for next week.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "3",
    name: "James R. Smith",
    avatar: "",
    time: "10 minutes ago",
    message: "The lab results for patient X have been received.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "4",
    name: "Emily J. Reed",
    avatar: "",
    time: "15 minutes ago",
    message:
      "A reminder has been sent to the patient for their follow-up visit.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "5",
    name: "John C. Doe",
    avatar: "",
    time: "20 minutes ago",
    message: "The prescription for patient Y has been updated.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "6",
    name: "Lisa M. Wong",
    avatar: "",
    time: "25 minutes ago",
    message: "A consultation request has been initiated for patient Z.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "7",
    name: "David P. Johnson",
    avatar: "",
    time: "30 minutes ago",
    message: "The discharge summary for patient A is ready for review.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "8",
    name: "Anna T. Garcia",
    avatar: "",
    time: "35 minutes ago",
    message:
      "A referral has been made for specialist care regarding patient B.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "patient",
  },
  {
    id: "9",
    name: "Pharmacy Plus",
    avatar: "",
    time: "1 hour ago",
    message: "New inventory update submitted for review.",
    isRead: false,
    isFavorite: true,
    isArchived: false,
    category: "vendor",
  },
  {
    id: "10",
    name: "MedCare Pharmacy",
    avatar: "",
    time: "2 hours ago",
    message: "License renewal application has been submitted.",
    isRead: true,
    isFavorite: false,
    isArchived: false,
    category: "vendor",
  },
  {
    id: "11",
    name: "HealthFirst Store",
    avatar: "",
    time: "3 hours ago",
    message: "New vendor registration request pending approval.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "vendor",
  },
  {
    id: "12",
    name: "QuickDeliver Co.",
    avatar: "",
    time: "4 hours ago",
    message: "Delivery route optimization report is available.",
    isRead: false,
    isFavorite: false,
    isArchived: false,
    category: "delivery",
  },
  {
    id: "13",
    name: "FastShip Logistics",
    avatar: "",
    time: "5 hours ago",
    message: "A delivery delay has been reported for order #4521.",
    isRead: true,
    isFavorite: false,
    isArchived: true,
    category: "delivery",
  },
];

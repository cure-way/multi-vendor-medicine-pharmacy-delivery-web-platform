/**
 * Admin Mock Data — Shared Types
 *
 * Central type definitions for all admin demo data.
 * Re-export MockPatient from the existing patients mock for backward compat.
 */

import type { BadgeVariant } from "@/components/admin/shared";

/* ── Re-export legacy type ── */
export type { MockPatient } from "@/lib/mock/patients";

/* ── Pharmacy ── */
export interface MockPharmacy {
  id: string;
  name: string;
  branch: string;
  address: string;
  area: string;
  earning: string;
  earningPct: string;
  earningDelta: string;
  earningUp: boolean;
  orders: string;
  rating: number;
  ratingCount: string;
  verification: BadgeVariant;
}

/* ── Product ── */
export interface MockProduct {
  id: string;
  name: string;
  form: string;
  image: string;
  category: string;
  activeIngredient: string;
  brand: string;
  expireDate: string;
  dosage: string;
  rating: number;
  ratingCount: string;
  status: BadgeVariant;
  stockLeft?: string;
}

/* ── Order ── */
export interface MockOrder {
  id: string;
  customerName: string;
  customerPhone: string;
  customerLocation: string;
  pharmacyName: string;
  pharmacyBranch: string;
  date: string;
  time: string;
  amount: string;
  payment: BadgeVariant;
  delivery: BadgeVariant;
}

/* ── Delivery ── */
export interface MockDelivery {
  id: string;
  delivererName: string;
  delivererPhone: string;
  delivererLocation: string;
  vehicleType: "Bike" | "Car";
  vehicleNumber: string;
  earning: string;
  earningPct: string;
  earningDelta: string;
  earningUp: boolean;
  date: string;
  time: string;
  rating: number;
  ratingCount: string;
  availability: BadgeVariant;
  status: BadgeVariant;
}

/* ── Patient Detail sub-types ── */
export interface PatientSummaryCard {
  iconName: "alarm-clock" | "pill" | "pill-alt";
  label: string;
  title: string;
  subtitle: string;
}

export interface PatientTimelineEntry {
  time: string;
  name: string;
  pharmacy: string;
  color: string;
}

export interface PatientAttachment {
  name: string;
  date: string;
}

export interface PatientTransaction {
  pharmacy: string;
  date: string;
  status: "Paid" | "Pending" | "Unpaid";
}

export interface PatientReviewStat {
  label: string;
  value: string;
  change: string;
}

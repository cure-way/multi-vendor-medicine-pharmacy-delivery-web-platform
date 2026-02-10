/**
 * Admin Mock Data — Barrel Export
 *
 * Single import point for all admin demo data and types.
 * Usage: import { pharmacies, type MockPharmacy } from "@/lib/mock/admin";
 */

/* ── Types ── */
export type {
  MockPatient,
  MockPharmacy,
  MockProduct,
  MockOrder,
  MockDelivery,
  PatientSummaryCard,
  PatientTimelineEntry,
  PatientAttachment,
  PatientTransaction,
  PatientReviewStat,
} from "./types";

/* ── Data — Pharmacies ── */
export { pharmacies } from "./pharmacies";

/* ── Data — Products ── */
export { products } from "./products";

/* ── Data — Orders ── */
export { orders } from "./orders";

/* ── Data — Deliveries ── */
export { deliveries, recentSearches } from "./deliveries";

/* ── Data — Patient Details ── */
export {
  summaryCards,
  timelineEntries,
  reviewStats,
  barData,
  barLabels,
  attachments,
  transactions,
} from "./patient-details";

/* ── Types — Dashboard ── */
export type {
  BarType,
  RevenueMetric,
  RevenueTimeframe,
  RevenueDataset,
  ExperienceDataset,
  DashboardOrder,
  DashboardPharmacy,
  DashboardDelivery,
  DashboardPatient,
  DashboardCategory,
  ExperienceSegment,
} from "./dashboard";

/* ── Data — Dashboard ── */
export {
  revenueMonths,
  revenueBarData,
  revenueBarTypes,
  barColorMap,
  revenueYLabels,
  revenueMetrics,
  revenueLegends,
  revenueDatasets,
  dashboardOrders,
  dashboardPharmacies,
  dashboardDeliverers,
  dashboardPatients,
  dashboardCategories,
  experienceTabs,
  experienceActiveTab,
  experienceSegments,
  experienceDatasets,
} from "./dashboard";

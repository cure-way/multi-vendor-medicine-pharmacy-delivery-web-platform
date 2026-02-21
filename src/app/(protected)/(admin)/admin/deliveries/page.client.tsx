"use client";

import {
  RefreshCw,
  MoreVertical,
  UserCheck,
  UserPlus,
  Star,
  Bike,
  Car,
  TrendingUp,
  TrendingDown,
  Clock,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  PageShell,
  PageHeader,
  HeaderPrimaryButton,
  HeaderIconButton,
  StatsBar,
  KpiPill,
  DataTable,
  StatusBadge,
  AlertBanner,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/admin/shared";
import type { ColumnDef } from "@/components/admin/shared";
import { DeliveriesPageIcon } from "@/components/admin/shared/icons";
import {
  deliveries,
  recentSearches,
  type MockDelivery,
} from "@/lib/mock/admin";

/* ------------------------------------------------------------------
   COLUMNS
   ------------------------------------------------------------------ */
const columns: ColumnDef<MockDelivery>[] = [
  {
    id: "id",
    header: "ID",
    cell: (d) => (
      <span className="text-[12px] leading-[1.2] font-semibold text-primary-darker">
        {d.id}
      </span>
    ),
  },
  {
    id: "deliverer",
    header: "Deliverer Info",
    className: "flex-1 min-w-55",
    cell: (d) => (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-warning-light flex items-center justify-center shrink-0">
          <span className="text-[14px] leading-[1.2] font-bold text-warning-dark">
            {d.delivererName.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-[14px] leading-[1.2] font-semibold text-neutral-darker truncate">
            {d.delivererName}
          </p>
          <p className="text-[12px] leading-[1.2] font-medium text-neutral truncate">
            {d.delivererLocation}, {d.delivererPhone}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "vehicle",
    header: "Vehicle",
    cell: (d) => (
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          {d.vehicleType === "Bike" ? (
            <Bike className="w-5 h-4 text-primary-dark shrink-0" />
          ) : (
            <Car className="w-5 h-5 text-primary-dark shrink-0" />
          )}
          <span className="text-[14px] leading-[1.2] font-semibold text-neutral-darker">
            {d.vehicleType}
          </span>
        </div>
        <p className="text-[12px] leading-[1.2] font-medium text-neutral">
          {d.vehicleNumber}
        </p>
      </div>
    ),
  },
  {
    id: "earning",
    header: "Earning",
    cell: (d) => (
      <div className="min-w-0">
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {d.earning}
        </p>
        <div className="flex items-center gap-1">
          <span
            className={`text-[12px] leading-[1.2] font-medium ${
              d.earningUp ? "text-success-dark" : "text-error-dark"
            }`}
          >
            {d.earningPct} ({d.earningUp ? "" : "-"}
            {d.earningDelta})
          </span>
          {d.earningUp ? (
            <TrendingUp className="w-3 h-3 text-success-dark" />
          ) : (
            <TrendingDown className="w-3 h-3 text-error-dark" />
          )}
        </div>
      </div>
    ),
  },
  {
    id: "date",
    header: "Date",
    cell: (d) => (
      <div className="flex flex-col gap-1">
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {d.date}
        </p>
        <p className="text-[12px] leading-[1.2] text-neutral-darker">
          {d.time}
        </p>
      </div>
    ),
  },
  {
    id: "rating",
    header: "Rating",
    cell: (d) => (
      <div className="min-w-0">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-warning fill-warning" />
          <span className="text-[12px] leading-[1.2] font-semibold text-neutral-darker">
            {d.rating}({d.ratingCount})
          </span>
        </div>
        <p className="text-[12px] leading-[1.2] font-medium text-neutral">
          Pharmacy rate
        </p>
      </div>
    ),
  },
  {
    id: "availability",
    header: "Availability",
    cell: (d) => <StatusBadge variant={d.availability} />,
  },
  {
    id: "status",
    header: "Status",
    cell: (d) => <StatusBadge variant={d.status} />,
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminDeliveriesPage() {
  return (
    <PageShell>
      <MotionStagger className="space-y-3">
        <MotionStaggerItem>
          <PageHeader
            icon={<DeliveriesPageIcon />}
            title="Deliveries"
            subtitle="Manage your deliveries"
            actions={
              <>
                <HeaderPrimaryButton>Add new delivery</HeaderPrimaryButton>
                <HeaderIconButton
                  icon={<RefreshCw className="w-6 h-6 text-neutral-dark" />}
                  label="Refresh"
                />
                <HeaderIconButton
                  icon={<MoreVertical className="w-6 h-6 text-neutral-dark" />}
                  label="More options"
                />
              </>
            }
          />
        </MotionStaggerItem>

        {/* ── Alert Banner ── */}
        <MotionStaggerItem>
          <AlertBanner
            variant="dashboard"
            title="Delivery Needs Review"
            actionLabel="Review Details"
          />
        </MotionStaggerItem>

        <MotionStaggerItem>
          <StatsBar
            count="135 Deliveries"
            description="100% of your deliveries"
          >
            <KpiPill
              icon={<UserCheck className="w-6 h-6 text-success-dark" />}
              value={80}
              label="Active deliverer"
              variant="success"
            />
            <KpiPill
              icon={<UserPlus className="w-6 h-6 text-primary-dark" />}
              value={8}
              label="New this week"
              variant="secondary"
            />
          </StatsBar>
        </MotionStaggerItem>

        {/* ── Tracking Card (page-specific) ── */}
        <MotionStaggerItem>
          <div className="bg-white border border-border rounded-xl p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Recent Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 text-neutral">
                <Clock className="w-5 h-5" />
                <span className="text-[14px] leading-[1.2] font-medium">
                  Recent:
                </span>
              </div>
              {recentSearches.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-neutral-light rounded-lg text-[12px] sm:text-[14px] leading-[1.2] font-medium text-neutral-darker"
                >
                  {tag}
                  <button
                    className="hover:text-error-dark transition-colors"
                    aria-label={`Remove ${tag}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>

            {/* Order Code Tracker */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="text-[13px] sm:text-[14px] leading-[1.2] font-medium text-neutral-darker whitespace-nowrap">
                Type your Order code:
              </span>
              <div className="flex flex-1 w-full sm:w-auto gap-2">
                <input
                  type="text"
                  placeholder="#"
                  className="flex-1 min-w-0 h-10 sm:h-12 px-3 sm:px-4 border border-border rounded-xl text-[14px] sm:text-[16px] leading-[1.2] font-semibold text-primary-darker placeholder:text-neutral focus:outline-none focus:ring-2 focus:ring-primary-dark/20 transition-shadow"
                />
                <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 h-10 sm:h-12 bg-primary-dark text-white rounded-xl text-[12px] sm:text-[14px] leading-[1.2] font-semibold hover:bg-primary-dark-hover transition-colors shrink-0">
                  Track Order
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <DataTable
            data={deliveries}
            columns={columns}
            getRowId={(d, i) => d.id + i}
            getRowLabel={(d) => `delivery ${d.id}`}
            searchPlaceholder="Search deliverer name, deliverer ID..."
            selectAllLabel="Select all deliveries"
            minWidthClass="min-w-300"
          />
        </MotionStaggerItem>
      </MotionStagger>
    </PageShell>
  );
}

"use client";

import {
  RefreshCw,
  MoreVertical,
  UserCheck,
  UserPlus,
  Star,
  TrendingUp,
  TrendingDown,
  Pill,
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
  MotionStagger,
  MotionStaggerItem,
} from "@/components/admin/shared";
import type { ColumnDef } from "@/components/admin/shared";
import { PharmacyPageIcon } from "@/components/admin/shared/icons";
import { pharmacies, type MockPharmacy } from "@/lib/mock/admin";

/* ------------------------------------------------------------------
   COLUMNS
   ------------------------------------------------------------------ */
const columns: ColumnDef<MockPharmacy>[] = [
  {
    id: "id",
    header: "Pha. ID",
    cell: (p) => (
      <span className="text-[12px] leading-[1.2] font-semibold text-primary-darker">
        {p.id}
      </span>
    ),
  },
  {
    id: "name",
    header: "Pharmacy Name",
    className: "flex-1 min-w-50",
    cell: (p) => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-2xl bg-secondary-light-active flex items-center justify-center shrink-0">
          <Pill className="w-4 h-4 text-primary-dark" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark truncate">
            {p.name}
          </p>
          <p className="text-[12px] leading-[1.2] font-medium text-neutral truncate">
            {p.branch}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    header: "Location",
    className: "flex-1 min-w-50",
    cell: (p) => (
      <div>
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {p.address}
        </p>
        <p className="text-[12px] leading-[1.2] font-medium text-neutral">
          {p.area}
        </p>
      </div>
    ),
  },
  {
    id: "earning",
    header: "Earning",
    cell: (p) => (
      <div>
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {p.earning}
        </p>
        {p.earningPct && (
          <div className="flex items-center gap-0.5">
            <span
              className={`text-[12px] leading-[1.2] ${
                p.earningUp ? "text-success-dark" : "text-error-dark"
              }`}
            >
              {p.earningPct}
            </span>
            <span className="text-[12px] leading-[1.2] text-neutral-darker">
              {p.earningDelta}
            </span>
            {p.earningUp ? (
              <TrendingUp className="w-3 h-3 text-success-dark" />
            ) : (
              <TrendingDown className="w-3 h-3 text-error-dark" />
            )}
          </div>
        )}
      </div>
    ),
  },
  {
    id: "orders",
    header: "Order",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.orders}
      </span>
    ),
  },
  {
    id: "rating",
    header: "Rating",
    cell: (p) =>
      p.rating > 0 ? (
        <div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-warning-dark fill-warning-dark" />
            <span className="text-[14px] leading-[1.2] font-semibold text-primary-darker">
              {p.rating}
            </span>
            <span className="text-[10px] leading-[1.2] text-neutral">
              ({p.ratingCount})
            </span>
          </div>
          <p className="text-[10px] leading-[1.2] text-neutral">
            Customer rate
          </p>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-neutral" />
          <span className="text-[14px] leading-[1.2] font-semibold text-primary-darker">
            -
          </span>
        </div>
      ),
  },
  {
    id: "verification",
    header: "Verification",
    cell: (p) => <StatusBadge variant={p.verification} />,
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminPharmaciesPage() {
  return (
    <PageShell>
      <MotionStagger className="space-y-3">
        <MotionStaggerItem>
          <PageHeader
            icon={<PharmacyPageIcon />}
            title="Pharmacies"
            subtitle="Manage your pharmacies"
            actions={
              <>
                <HeaderPrimaryButton>Add new Pharmacy</HeaderPrimaryButton>
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

        <MotionStaggerItem>
          <StatsBar
            count="100 Pharmacy"
            description="100% of your Pharmacies base"
          >
            <KpiPill
              icon={<UserCheck className="w-6 h-6 text-success-dark" />}
              value={80}
              label="Active Pharmacy"
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

        <MotionStaggerItem>
          <DataTable
            data={pharmacies}
            columns={columns}
            getRowId={(p, i) => p.id + i}
            getRowLabel={(p) => p.name}
            searchPlaceholder="Search Pharmacies, ID number, location,..."
            selectAllLabel="Select all pharmacies"
            minWidthClass="min-w-275"
          />
        </MotionStaggerItem>
      </MotionStagger>
    </PageShell>
  );
}

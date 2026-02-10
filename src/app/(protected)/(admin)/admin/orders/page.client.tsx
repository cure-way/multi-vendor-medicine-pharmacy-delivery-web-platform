"use client";

import {
  RefreshCw,
  MoreVertical,
  PackageCheck,
  Truck,
  Clock,
  Timer,
  PackageX,
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
  AlertBanner,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/admin/shared";
import type { ColumnDef } from "@/components/admin/shared";
import { OrdersPageIcon } from "@/components/admin/shared/icons";
import { orders, type MockOrder } from "@/lib/mock/admin";

/* ------------------------------------------------------------------
   COLUMNS
   ------------------------------------------------------------------ */
const columns: ColumnDef<MockOrder>[] = [
  {
    id: "id",
    header: "Order ID",
    cell: (o) => (
      <span className="text-[12px] leading-[1.2] font-semibold text-primary-darker">
        {o.id}
      </span>
    ),
  },
  {
    id: "customer",
    header: "Customer",
    className: "flex-1 min-w-55",
    cell: (o) => (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-warning-light flex items-center justify-center shrink-0">
          <span className="text-[14px] leading-[1.2] font-bold text-warning-dark">
            {o.customerName.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-[14px] leading-[1.2] font-semibold text-neutral-darker truncate">
            {o.customerName}
          </p>
          <p className="text-[12px] leading-[1.2] font-medium text-neutral truncate">
            {o.customerLocation}, {o.customerPhone}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "pharmacy",
    header: "Pharmacy",
    className: "flex-1 min-w-45",
    cell: (o) => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-2xl bg-secondary-light-active flex items-center justify-center shrink-0">
          <Pill className="w-4 h-4 text-primary-dark" />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark truncate">
            {o.pharmacyName}
          </p>
          <p className="text-[12px] leading-[1.2] font-medium text-neutral truncate">
            {o.pharmacyBranch}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "date",
    header: "Date",
    cell: (o) => (
      <div className="flex flex-col gap-1">
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {o.date}
        </p>
        <p className="text-[12px] leading-[1.2] text-neutral-darker">
          {o.time}
        </p>
      </div>
    ),
  },
  {
    id: "amount",
    header: "Amount",
    cell: (o) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {o.amount}
      </span>
    ),
  },
  {
    id: "payment",
    header: "Payment",
    cell: (o) => <StatusBadge variant={o.payment} />,
  },
  {
    id: "delivery",
    header: "Delivery",
    cell: (o) => <StatusBadge variant={o.delivery} />,
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminOrdersPage() {
  return (
    <PageShell>
      <MotionStagger className="space-y-3">
        <MotionStaggerItem>
          <PageHeader
            icon={<OrdersPageIcon />}
            title="Orders / Prescriptions"
            subtitle="Manage your orders"
            actions={
              <>
                <HeaderPrimaryButton>Add new order</HeaderPrimaryButton>
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
          <AlertBanner
            variant="dashboard"
            title="Order Needs Review"
            actionLabel="Review Details"
          />
        </MotionStaggerItem>

        <MotionStaggerItem>
          <StatsBar count="135 Orders">
            <KpiPill
              icon={<PackageCheck className="w-6 h-6 text-success-dark" />}
              value={128}
              label="Delivered"
              variant="success"
            />
            <KpiPill
              icon={<Truck className="w-6 h-6 text-secondary-dark" />}
              value={1}
              label="On way"
              variant="info"
            />
            <KpiPill
              icon={<Clock className="w-6 h-6 text-warning-dark" />}
              value={3}
              label="Processing"
              variant="warning"
            />
            <KpiPill
              icon={<Timer className="w-6 h-6 text-warning-dark" />}
              value={2}
              label="Pending"
              variant="warning"
            />
            <KpiPill
              icon={<PackageX className="w-6 h-6 text-error-dark" />}
              value={1}
              label="Failed"
              variant="error"
            />
          </StatsBar>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <DataTable
            data={orders}
            columns={columns}
            getRowId={(o) => o.id}
            getRowLabel={(o) => `order ${o.id}`}
            searchPlaceholder="Search order ID, customer name, pharmacy..."
            selectAllLabel="Select all orders"
            minWidthClass="min-w-275"
          />
        </MotionStaggerItem>
      </MotionStagger>
    </PageShell>
  );
}

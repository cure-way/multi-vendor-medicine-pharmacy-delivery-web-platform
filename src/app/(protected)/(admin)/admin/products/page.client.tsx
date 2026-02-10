"use client";

import { RefreshCw, MoreVertical, Star, Package, PackageX } from "lucide-react";
import Image from "next/image";
import {
  PageShell,
  PageHeader,
  HeaderPrimaryButton,
  HeaderIconButton,
  StatsBar,
  DataTable,
  StatusBadge,
  AlertBanner,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/admin/shared";
import type { ColumnDef } from "@/components/admin/shared";
import { ProductsPageIcon } from "@/components/admin/shared/icons";
import { products, type MockProduct } from "@/lib/mock/admin";

/* ------------------------------------------------------------------
   COLUMNS
   ------------------------------------------------------------------ */
const columns: ColumnDef<MockProduct>[] = [
  {
    id: "id",
    header: "Pro. ID",
    cell: (p) => (
      <span className="text-[12px] leading-[1.2] font-semibold text-primary-darker">
        {p.id}
      </span>
    ),
  },
  {
    id: "name",
    header: "Product Name",
    className: "flex-1 min-w-50",
    cell: (p) => (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded border border-neutral/50 flex items-center justify-center overflow-hidden shrink-0 p-1">
          <Image
            src={p.image}
            alt={p.name}
            width={28}
            height={28}
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark truncate">
            {p.name}
          </p>
          <p className="text-[12px] leading-[1.2] text-neutral truncate">
            {p.form}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "category",
    header: "Category",
    className: "flex-1 min-w-50",
    cell: (p) => (
      <div className="min-w-0">
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark truncate">
          {p.category}
        </p>
        <p className="text-[12px] leading-[1.2] text-neutral truncate">
          {p.activeIngredient}
        </p>
      </div>
    ),
  },
  {
    id: "brand",
    header: "Brand",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.brand}
      </span>
    ),
  },
  {
    id: "expireDate",
    header: "Expire date",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.expireDate}
      </span>
    ),
  },
  {
    id: "dosage",
    header: "Dosage",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.dosage}
      </span>
    ),
  },
  {
    id: "rating",
    header: "Rating",
    cell: (p) => (
      <div className="min-w-0">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-warning fill-warning" />
          <span className="text-[14px] leading-[1.2] font-semibold text-primary-darker">
            {p.rating}
          </span>
          <span className="text-[10px] leading-[1.2] text-neutral">
            ({p.ratingCount})
          </span>
        </div>
        <p className="text-[10px] leading-[1.2] text-neutral">Pharmacy rate</p>
      </div>
    ),
  },
  {
    id: "status",
    header: "Status",
    cell: (p) => <StatusBadge variant={p.status} suffix={p.stockLeft} />,
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminProductsPage() {
  return (
    <PageShell>
      <MotionStagger className="space-y-3">
        <MotionStaggerItem>
          <PageHeader
            icon={<ProductsPageIcon />}
            title="Products"
            subtitle="Manage your Products"
            actions={
              <>
                <HeaderPrimaryButton>Add new Product</HeaderPrimaryButton>
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
            title="Medication Risk Alert"
            actionLabel="Review Details"
          />
        </MotionStaggerItem>

        {/* ── Alert Banner (page-specific) ── */}
        <MotionStaggerItem>
          <StatsBar
            count="121.23K Product"
            description="100% of your listed products"
          >
            {/* Low-stock warning badge */}
            <div className="flex items-center bg-warning-light px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg self-stretch">
              <p className="text-warning-darker">
                <span className="text-[13px] sm:text-[16px] leading-[1.2] font-medium">
                  In stock{" "}
                </span>
                <span className="text-[12px] sm:text-[14px] leading-[1.2] font-semibold">
                  · 3 left
                </span>
              </p>
            </div>

            {/* In-stock KPI pill */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-4 bg-success-light rounded-lg sm:rounded-xl">
              <div className="flex items-center gap-1 border-r border-success-light-active pr-1.5 sm:pr-2.5">
                <Package className="w-4 h-4 sm:w-6 sm:h-6 text-success-dark" />
                <span className="text-[13px] sm:text-[16px] leading-normal font-extrabold text-success-darker">
                  113K
                </span>
              </div>
              <span className="text-[13px] sm:text-[16px] leading-normal font-medium text-success-dark">
                In stock
              </span>
            </div>

            {/* Out-of-stock KPI pill */}
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-4 bg-error-light rounded-lg sm:rounded-xl">
              <div className="flex items-center gap-1">
                <PackageX className="w-4 h-4 sm:w-6 sm:h-6 text-error-dark" />
                <div className="border-r border-neutral-light-active pr-1.5 sm:pr-2.5">
                  <span className="text-[13px] sm:text-[16px] leading-normal font-extrabold text-error-dark">
                    8K
                  </span>
                </div>
              </div>
              <span className="text-[13px] sm:text-[16px] leading-normal font-medium text-error-darker">
                Out of stock
              </span>
            </div>
          </StatsBar>
        </MotionStaggerItem>

        <MotionStaggerItem>
          <DataTable
            data={products}
            columns={columns}
            getRowId={(p) => p.id}
            getRowLabel={(p) => p.name}
            searchPlaceholder="Search Product name, Product ID, Category..."
            selectAllLabel="Select all products"
            minWidthClass="min-w-275"
          />
        </MotionStaggerItem>
      </MotionStagger>
    </PageShell>
  );
}

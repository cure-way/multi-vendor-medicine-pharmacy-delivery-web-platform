"use client";

import { RefreshCw, MoreVertical, UserCheck, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
import { patients, type MockPatient } from "@/lib/mock/patients";
import { PatientsPageIcon } from "@/components/admin/shared/icons";

/* ------------------------------------------------------------------
   COLUMNS
   ------------------------------------------------------------------ */
const columns: ColumnDef<MockPatient>[] = [
  {
    id: "id",
    header: "Patient ID",
    cell: (p) => (
      <Link
        href={`/admin/patients/${p.id}`}
        className="text-[12px] leading-[1.2] font-semibold text-primary-darker hover:underline focus:underline focus:outline-none"
      >
        #{p.id}
      </Link>
    ),
  },
  {
    id: "name",
    header: "Patient Name",
    className: "flex-1 min-w-65",
    cell: (p) => (
      <div className="flex items-center gap-2 h-full">
        <div className="w-10 h-10 rounded-full bg-[#FFFDC3] shrink-0 overflow-hidden">
          <Image
            src={p.avatar}
            alt=""
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center min-w-0">
          <Link
            href={`/admin/patients/${p.id}`}
            className="text-[14px] leading-[1.2] font-semibold text-[#393737] truncate hover:underline focus:underline focus:outline-none"
          >
            {p.name}
          </Link>
          <p className="text-[12px] leading-[1.2] font-medium text-neutral truncate">
            {p.location}, {p.phone}
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "email",
    header: "Email",
    className: "flex-1 min-w-50",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.email}
      </span>
    ),
  },
  {
    id: "lastVisit",
    header: "Last visit",
    cell: (p) => (
      <div className="flex flex-col gap-1">
        <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
          {p.lastVisit}
        </p>
        <p className="text-[12px] leading-[1.2] font-normal text-[#393737]">
          {p.lastVisitTime}
        </p>
      </div>
    ),
  },
  {
    id: "totalSpent",
    header: "Total spent",
    cell: (p) => (
      <span className="text-[14px] leading-[1.2] font-semibold text-primary-dark">
        {p.totalSpent}
      </span>
    ),
  },
  {
    id: "status",
    header: "Status",
    cell: (p) => <StatusBadge variant={p.status} />,
  },
];

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminPatientsPage() {
  return (
    <PageShell>
      <MotionStagger className="space-y-3">
        <MotionStaggerItem>
          <PageHeader
            icon={<PatientsPageIcon />}
            title="Patients"
            subtitle="Manage your patients"
            actions={
              <>
                <HeaderPrimaryButton>Add new user</HeaderPrimaryButton>
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
            count="120 Patient"
            description="100% of your customer base"
          >
            <KpiPill
              icon={<UserCheck className="w-6 h-6 text-success-dark" />}
              value={80}
              label="Active Patients"
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
            data={patients}
            columns={columns}
            getRowId={(p) => p.id}
            getRowLabel={(p) => p.name}
            searchPlaceholder="Search medicine, pharmacy.."
            selectAllLabel="Select all patients"
          />
        </MotionStaggerItem>
      </MotionStagger>
    </PageShell>
  );
}

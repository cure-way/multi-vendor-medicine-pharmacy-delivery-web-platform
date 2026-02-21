"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MoreHorizontal,
  Mail,
  Cake,
  MapPin,
  Phone,
  AlarmClock,
  Pill,
  Activity,
  FileText,
  Download,
  Calendar,
  Circle,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { getPatientById } from "@/lib/mock/patients";
import {
  summaryCards,
  timelineEntries,
  reviewStats,
  barData,
  barLabels,
  attachments,
  transactions,
  type PatientSummaryCard,
  type PatientTransaction,
} from "@/lib/mock/admin";
import {
  GenderMaleIcon,
  GenderFemaleIcon,
  PharmacyCrossIcon,
} from "@/components/admin/shared/icons";
import { StatusBadge } from "@/components/admin/shared";
import { MotionStagger, MotionStaggerItem } from "@/components/admin/shared";

/* ==================================================================
   SUB-COMPONENTS
   ================================================================== */

/** Map iconName from mock data to actual Lucide icon JSX */
const summaryCardIcons: Record<
  PatientSummaryCard["iconName"],
  React.ReactNode
> = {
  "alarm-clock": <AlarmClock size={16} className="text-[#334EAC]" />,
  pill: <Pill size={16} className="text-[#334EAC]" />,
  "pill-alt": <Pill size={16} className="text-[#594920]" />,
};

const tabs = ["Overview", "Prescription", "Orders", "Billing"] as const;

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-neutral-light-active rounded-lg p-3 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[14px] leading-[1.2] font-medium text-neutral">
          {label}
        </span>
      </div>
      <div className="text-[16px] leading-[1.2] font-medium text-[#393737]">
        {value}
      </div>
    </div>
  );
}

function TransactionBadge({
  status,
}: {
  status: PatientTransaction["status"];
}) {
  const config = {
    Paid: {
      bg: "bg-success-light",
      text: "text-success-darker",
      dotColor: "text-success",
    },
    Pending: {
      bg: "bg-warning-light-active",
      text: "text-warning-darker",
      dotColor: "text-warning",
    },
    Unpaid: {
      bg: "bg-error-light",
      text: "text-error-darker",
      dotColor: "text-error",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[12px] leading-normal font-semibold ${config.bg} ${config.text}`}
    >
      <Circle className={`w-3 h-3 ${config.dotColor} fill-current`} />
      {status}
    </span>
  );
}

/* ==================================================================
   NOT FOUND STATE
   ================================================================== */
function PatientNotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8 min-h-[60vh]">
      <div className="w-16 h-16 rounded-full bg-warning-light flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-warning-dark" />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-[24px] leading-[1.2] font-bold text-primary-darker">
          Patient not found
        </h2>
        <p className="text-[16px] leading-[1.4] text-neutral max-w-sm">
          The patient you are looking for does not exist or may have been
          removed.
        </p>
      </div>
      <Link
        href="/admin/patients"
        className="inline-flex items-center gap-2 bg-primary-dark text-white px-5 py-3 rounded-lg text-[14px] font-semibold hover:bg-primary-dark-hover transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to patients
      </Link>
    </div>
  );
}

/* ==================================================================
   PAGE
   ================================================================== */
export default function AdminPatientDetailsPage() {
  const params = useParams<{ patientId: string }>();
  const patient = getPatientById(params.patientId);

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Overview");

  if (!patient) {
    return (
      <div className="flex-1 px-4 py-4 bg-neutral-light-hover">
        <PatientNotFound />
      </div>
    );
  }

  return (
    <MotionStagger className="flex-1 px-4 sm:pr-6 py-4 space-y-6 bg-neutral-light-hover overflow-x-hidden">
      {/* Page Header */}
      <MotionStaggerItem>
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] leading-[1.2] font-bold text-primary-darker">
            Patient details
          </h1>
          <p className="text-[18px] leading-[1.2] font-normal text-neutral">
            <Link href="/admin/patients" className="hover:underline">
              Patients
            </Link>
            /<span className="text-primary">Patient details</span>
          </p>
        </div>
      </MotionStaggerItem>

      {/* Two-Column Layout (stacks below lg) */}
      <MotionStaggerItem>
        <div className="flex flex-col lg:flex-row gap-4 items-start">
          {/* LEFT SIDEBAR: Patient Profile */}
          <div className="bg-white border border-neutral-light-active rounded-2xl p-4 flex flex-col gap-8 w-full lg:w-75 lg:min-w-75 lg:max-w-83.75 shrink-0 self-stretch">
            {/* Header */}
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-light-active">
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-[18px] leading-[1.2] font-medium text-[#393737]">
                  Patient Profile
                </p>
                <p className="text-[14px] leading-[1.2] font-normal text-neutral">
                  Patient ID: #{patient.id}
                </p>
              </div>
              <button
                aria-label="Patient profile options"
                className="w-8 h-8 flex items-center justify-center"
              >
                <MoreHorizontal className="w-5 h-5 text-neutral" />
              </button>
            </div>

            {/* Avatar + Name */}
            <div className="flex-1 flex flex-col gap-8 items-center">
              <div className="flex flex-col gap-4 items-center px-4">
                <div className="w-32.5 h-32.5 rounded-[20px] bg-[#FFFDC3] overflow-hidden relative">
                  <Image
                    src={patient.avatar}
                    alt={patient.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 items-center pb-3 border-b border-neutral-light-active">
                  <div className="flex items-center gap-2 flex-wrap justify-center">
                    <span className="text-[18px] leading-[1.2] font-semibold text-[#393737] text-center">
                      {patient.name} ·
                    </span>
                    <StatusBadge variant={patient.status} />
                  </div>
                  <p className="text-[14px] leading-[1.2] font-normal text-neutral">
                    Age <span className="font-bold">· {patient.age}</span>
                  </p>
                </div>
              </div>

              {/* General Information */}
              <div className="flex flex-col gap-5 w-full">
                <h3 className="text-[16px] leading-[1.2] font-semibold text-[#393737]">
                  General information
                </h3>
                <div className="flex flex-col gap-3">
                  <InfoCard
                    icon={
                      patient.gender === "Female" ? (
                        <GenderFemaleIcon />
                      ) : (
                        <GenderMaleIcon />
                      )
                    }
                    label="Gender"
                    value={patient.gender}
                  />
                  <InfoCard
                    icon={<Mail className="w-5 h-5 text-neutral" />}
                    label="Email"
                    value={patient.email}
                  />
                  <InfoCard
                    icon={<Cake className="w-5 h-5 text-neutral" />}
                    label="Birthday"
                    value={patient.birthday}
                  />
                  <InfoCard
                    icon={<MapPin className="w-5 h-5 text-neutral" />}
                    label="Address"
                    value={patient.address}
                  />
                  <InfoCard
                    icon={<Phone className="w-5 h-5 text-neutral" />}
                    label="Contact"
                    value={
                      <p className="text-[16px]">
                        <span className="text-neutral-dark-active">
                          {patient.phonePrefix}
                        </span>
                        <span className="text-[#393737]">
                          {" "}
                          {patient.phoneNumber}
                        </span>
                      </p>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Footer dates */}
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-light border border-neutral-light-active rounded-xl flex items-center px-3 py-2">
                <p className="text-[14px] leading-[1.2] font-normal text-[#393737] h-7.5 flex items-center">
                  Registered on: {patient.registeredOn}
                </p>
              </div>
              <div className="bg-neutral-light border border-neutral-light-active rounded-xl flex items-center px-3 py-2">
                <p className="text-[14px] leading-[1.2] font-normal text-[#393737] h-7.5 flex items-center">
                  Last Updated: {patient.lastUpdated}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white border border-neutral-light-active rounded-2xl p-4 flex-1 flex flex-col gap-6 min-w-0 w-full lg:w-auto">
            {/* Tab Bar — scrollable on small screens */}
            <div className="bg-neutral-light-hover rounded-2xl p-[2px] flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-25 text-center py-3 rounded-2xl text-[14px] leading-[1.2] whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "bg-white font-semibold text-[#393737] shadow-sm"
                      : "font-medium text-neutral-dark-active"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Patient Summary */}
            <div className="border border-neutral-light-active rounded-xl p-3 flex flex-col gap-2">
              <div className="pb-3">
                <h2 className="text-[20px] leading-[1.2] font-semibold text-[#393737]">
                  Patient summary
                </h2>
              </div>

              {/* 3 Summary Cards — stack on small, row on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {summaryCards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-neutral-light-active rounded-lg p-3 flex flex-col gap-6"
                  >
                    <div className="flex items-center gap-2">
                      {summaryCardIcons[card.iconName]}
                      <span className="text-[14px] leading-[1.2] font-medium text-neutral">
                        {card.label}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-[14px] leading-[1.2] font-medium text-[#393737]">
                        {card.title}
                      </p>
                      <p className="text-[12px] leading-[1.2] font-normal text-neutral-dark-hover">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline + Chart Row — stack below xl */}
              <div className="flex flex-col xl:flex-row gap-2">
                {/* Medication Timeline */}
                <div className="border border-neutral-light-active rounded-xl px-4 py-3 flex flex-col gap-4 w-full xl:w-57.75 xl:shrink-0">
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] leading-[1.2] font-medium text-[#393737]">
                      Your medication timeline
                    </p>
                    <p className="text-[12px] leading-[1.2] font-normal text-neutral">
                      Stay on top of your medication
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {/* Timeline line + dots */}
                    <div className="relative w-6 flex flex-col items-center">
                      <div className="absolute top-2.5 bottom-2.5 w-px border-l border-dashed border-neutral-light-active" />
                      {timelineEntries.map((_, i) => (
                        <div
                          key={i}
                          className="relative z-10 flex items-center justify-center"
                          style={{ marginTop: i === 0 ? 0 : "auto" }}
                        >
                          <div className="w-3 h-3 rounded-full bg-primary-dark border-2 border-secondary-light-active" />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                      {timelineEntries.map((entry, i) => (
                        <div key={i} className="flex flex-col gap-3">
                          <p className="text-[12px] leading-[1.2] font-normal text-neutral">
                            {entry.time}
                          </p>
                          <div className="border border-neutral-light-active rounded-lg p-3 flex flex-col gap-2">
                            <p className="text-[12px] leading-[1.2] font-medium text-[#393737]">
                              {entry.name}
                            </p>
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-4 h-4 rounded ${entry.color}`}
                              />
                              <span className="text-[12px] leading-[1.2] font-normal text-neutral">
                                {entry.pharmacy}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Patient Review (Chart) */}
                <div className="bg-white border border-neutral-light-active rounded-2xl p-3 flex-1 flex flex-col gap-6 min-w-0">
                  <div className="flex flex-col gap-3">
                    {/* Chart Header */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center shrink-0">
                        <Activity className="w-5 h-5 text-secondary-dark" />
                      </div>
                      <p className="flex-1 text-[14px] leading-[1.2] font-semibold text-secondary-darker">
                        Patient review
                      </p>
                      <div className="border border-neutral-light-active rounded-lg px-3 py-3 flex items-center gap-3">
                        <Calendar className="w-3 h-3 text-neutral-dark-active" />
                        <span className="text-[10px] leading-[1.2] font-medium text-neutral-dark-active">
                          Today · Jun, 01
                        </span>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {reviewStats.map((stat, i) => (
                        <div
                          key={i}
                          className="border border-neutral-light-active rounded-xl px-3 py-4 flex flex-col gap-4"
                        >
                          <p className="text-[10px] leading-[1.2] font-medium text-neutral">
                            {stat.label}
                          </p>
                          <div className="flex items-end justify-between">
                            <span className="text-[16px] leading-[1.2] font-semibold text-[#393737]">
                              {stat.value}
                            </span>
                            <div className="flex flex-col items-end gap-2">
                              <span className="bg-success-light text-success-darker text-[8px] leading-[1.2] font-semibold px-2 py-1 rounded">
                                {stat.change}
                              </span>
                              <span className="text-[8px] leading-[1.2] font-normal text-[#393737]">
                                from last week
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex flex-col overflow-x-auto">
                    <div className="flex h-42.5 min-w-[320px]">
                      {/* Y-axis labels */}
                      <div className="flex flex-col justify-between items-end pr-1 py-1.5 text-[10px] leading-[1.2] font-normal text-black/70">
                        <span>100K</span>
                        <span>80K</span>
                        <span>60K</span>
                        <span>40K</span>
                        <span>20K</span>
                        <span className="text-[12px]">0</span>
                      </div>
                      <div className="flex-1 flex items-end relative">
                        <div className="absolute inset-[6px_0] flex flex-col justify-between pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-full h-px bg-black/5" />
                          ))}
                        </div>
                        <div className="flex flex-1 items-end gap-0 h-full border-b border-black/30 relative z-10">
                          {barData.map((pct, i) => {
                            const isHighlighted = i === 9;
                            const isIncomplete = i >= 10;
                            let barColor = "bg-secondary-dark-active";
                            if (isHighlighted) barColor = "bg-success";
                            if (isIncomplete)
                              barColor = "bg-secondary-light-active";
                            return (
                              <div
                                key={i}
                                className="flex-1 flex items-end justify-center px-1"
                                style={{ height: "100%" }}
                              >
                                <div
                                  className={`w-full rounded-t-lg ${barColor}`}
                                  style={{ height: `${pct}%` }}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex pl-9 min-w-[320px]">
                      {barLabels.map((label, i) => (
                        <div key={i} className="flex-1 text-center pt-2">
                          <span
                            className={`text-[10px] leading-[1.2] font-normal ${i === 9 ? "text-success-dark" : "text-black/70"}`}
                          >
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend + View all */}
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex-1 flex flex-wrap gap-4 max-w-100">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-secondary-darker" />
                        <span className="text-[10px] leading-[1.2] font-medium text-neutral">
                          Previous periods
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-success" />
                        <span className="text-[10px] leading-[1.2] font-medium text-neutral">
                          Current period
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm bg-secondary-light-active" />
                        <span className="text-[10px] leading-[1.2] font-medium text-neutral">
                          Incomplete data
                        </span>
                      </div>
                    </div>
                    <button className="border border-neutral-light-active rounded-lg px-3 py-3 text-[12px] leading-[1.2] font-normal text-[#393737] hover:bg-neutral-light-hover transition-colors">
                      View all
                    </button>
                  </div>
                </div>
              </div>

              {/* Attachments + Recent Transactions — stack below md */}
              <div className="flex flex-col md:flex-row gap-2">
                {/* Attachments */}
                <div className="flex-1 bg-white border border-neutral-light-active rounded-lg p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-neutral" />
                    <span className="flex-1 text-[14px] leading-[1.2] font-medium text-neutral">
                      Attachments
                    </span>
                    <button
                      aria-label="Attachment options"
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      <MoreHorizontal className="w-5 h-5 text-neutral" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    {attachments.map((file, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 h-16 ${i < attachments.length - 1 ? "border-b border-neutral-light-active" : ""}`}
                      >
                        <FileText className="w-6 h-6 text-neutral shrink-0" />
                        <div className="flex-1 flex flex-col gap-2 min-w-0">
                          <p className="text-[14px] leading-[1.2] font-medium text-[#393737] truncate">
                            {file.name}
                          </p>
                          <p className="text-[12px] leading-[1.2] font-normal text-neutral-dark-hover">
                            {file.date}
                          </p>
                        </div>
                        <button
                          aria-label={`Download ${file.name}`}
                          className="shrink-0 hover:text-primary-dark transition-colors"
                        >
                          <Download className="w-6 h-6 text-neutral" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="flex-1 bg-white border border-neutral-light-active rounded-lg p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-neutral" />
                    <span className="flex-1 text-[14px] leading-[1.2] font-medium text-neutral">
                      Recent transactions
                    </span>
                    <button
                      aria-label="Transaction options"
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      <MoreHorizontal className="w-5 h-5 text-neutral" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    {transactions.map((tx, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 py-3 ${i < transactions.length - 1 ? "border-b border-neutral-light-active" : ""}`}
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-2xl bg-secondary-light-active flex items-center justify-center shrink-0">
                            <PharmacyCrossIcon />
                          </div>
                          <div className="flex-1 flex flex-col gap-2 min-w-0">
                            <p className="text-[14px] leading-[1.2] font-semibold text-primary-dark truncate">
                              {tx.pharmacy}
                            </p>
                            <p className="text-[12px] leading-[1.2] font-normal text-neutral-dark-hover">
                              {tx.date}
                            </p>
                          </div>
                        </div>
                        <TransactionBadge status={tx.status} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionStaggerItem>
    </MotionStagger>
  );
}

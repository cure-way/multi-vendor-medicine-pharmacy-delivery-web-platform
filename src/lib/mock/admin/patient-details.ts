import type {
  PatientSummaryCard,
  PatientTimelineEntry,
  PatientReviewStat,
  PatientAttachment,
  PatientTransaction,
} from "./types";

export const summaryCards: PatientSummaryCard[] = [
  {
    iconName: "alarm-clock",
    label: "Next Reminder",
    title: "Paracetamol (1 tablet)",
    subtitle: "April 20, 2024 · 1:30 PM",
  },
  {
    iconName: "pill",
    label: "Active Medications",
    title: "3 Active Prescriptions",
    subtitle: "Across 2 pharmacies",
  },
  {
    iconName: "pill-alt",
    label: "Recent Orders",
    title: "Paracetamol 500mg x2",
    subtitle: "From City Pharmacy",
  },
];

export const timelineEntries: PatientTimelineEntry[] = [
  {
    time: "08:00 AM",
    name: "Paracetamol - Morning",
    pharmacy: "by City Pharmacy",
    color: "bg-warning",
  },
  {
    time: "12:00 PM",
    name: "Ibuprofen - Afternoon",
    pharmacy: "by Town Pharmacy",
    color: "bg-success",
  },
  {
    time: "6:00 PM",
    name: "Cetirizine - Evening",
    pharmacy: "by City Health",
    color: "bg-primary-dark",
  },
  {
    time: "6:00 PM",
    name: "Cetirizine - Evening",
    pharmacy: "by City Health",
    color: "bg-primary-dark",
  },
];

export const reviewStats: PatientReviewStat[] = [
  { label: "Average order", value: "$32.00", change: "+2.43%" },
  { label: "Orders", value: "1,284", change: "+15.43%" },
  { label: "Refunds", value: "2.01%", change: "+1.78%" },
];

export const barData = [12, 47, 85, 70, 82, 70, 70, 15, 70, 65, 67, 100];
export const barLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const attachments: PatientAttachment[] = [
  { name: "Prescription_City_Pharmacy.pdf", date: "April 20, 2024 · 1:30 PM" },
  { name: "Health_Care_Overview.docx", date: "April 21, 2024 · 10:00 AM" },
  {
    name: "Patient_Records_Confidential.xlsx",
    date: "April 22, 2024 · 2:15 PM",
  },
  { name: "Insurance_Claim_Form.pdf", date: "April 23, 2024 · 9:00 AM" },
];

export const transactions: PatientTransaction[] = [
  {
    pharmacy: "City Pharmacy",
    date: "April 21, 2024 · 10:00 AM",
    status: "Paid",
  },
  {
    pharmacy: "Downtown Clinic",
    date: "April 22, 2024 · 1:30 PM",
    status: "Pending",
  },
  {
    pharmacy: "Westside Hospital",
    date: "April 23, 2024 · 3:15 PM",
    status: "Unpaid",
  },
  {
    pharmacy: "Northgate Health Center",
    date: "April 24, 2024 · 9:00 AM",
    status: "Paid",
  },
];

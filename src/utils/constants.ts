import { SearchFilter } from "@/types/search";

export const DEFAULT_FILTERS: SearchFilter[] = [
  {
    key: "availability",
    label: "Availability",
    description: "Available now",
  },
  {
    key: "delivery",
    label: "Delivery",
    description: "Fast delivery",
  },
  {
    key: "pharmacy",
    label: "Pharmacy",
    description: "Nearby only",
  },
  {
    key: "prescription",
    label: "Prescription",
    description: "Required",
  },
];

export const categoryImages: Record<number, string> = {
  1: "/patient/Daily Essentials.png",
  2: "/patient/Pharnacy-shelves.png",
  3: "/patient/Cold & Flu medicine.png",
  4: "/patient/Discount on First Aid.png",
  5: "/patient/Vitamins & Supplements.png",
};

export const categoryMedicinesFilters = [
  { label: "All", value: undefined },
  { label: "Most sales", value: "top" },
  { label: "Offers", value: "offers" },
  { label: "Rate", value: "rate" },
];

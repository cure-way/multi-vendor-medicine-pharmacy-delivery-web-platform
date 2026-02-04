/**
 * Application Constants
 */

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

export const CONTACT_PHONE = "+970 59-244-9634";
export const BRAND_NAME = "CUREWAY";

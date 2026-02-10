"use client";

import { useState } from "react";
import { User, MapPin, ChevronUp, ChevronDown, Plus } from "lucide-react";
import { PhoneField } from "@/components/ui/fields";

/* ------------------------------------------------------------------
   SELECT OPTIONS
   ------------------------------------------------------------------ */
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "gb", label: "United Kingdom" },
  { value: "ps", label: "Palestine" },
  { value: "jo", label: "Jordan" },
  { value: "eg", label: "Egypt" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "ae", label: "UAE" },
];

const stateOptions = [
  { value: "on", label: "Ontario" },
  { value: "qc", label: "Quebec" },
  { value: "bc", label: "British Columbia" },
  { value: "ab", label: "Alberta" },
];

const cityOptions = [
  { value: "toronto", label: "Toronto" },
  { value: "ottawa", label: "Ottawa" },
  { value: "vancouver", label: "Vancouver" },
  { value: "montreal", label: "Montreal" },
];

/* ------------------------------------------------------------------
   CUSTOM FIELD STYLES (matching the Figma design)
   ------------------------------------------------------------------ */
const inputClass =
  "w-full h-14 px-4 rounded-xl border border-neutral-normal bg-white text-t-16 text-neutral-darker placeholder:text-neutral-dark-hover focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

const selectClass =
  "w-full h-14 px-4 pr-10 rounded-xl border border-neutral-normal bg-white text-t-16 text-neutral-dark-hover appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all";

const labelClass = "text-t-16 font-medium text-neutral-darker";

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminSettingsProfilePage() {
  const [generalOpen, setGeneralOpen] = useState(true);
  const [addressOpen, setAddressOpen] = useState(true);

  return (
    <div className="bg-white border border-border rounded-2xl px-3 sm:px-6 py-3 sm:py-4 space-y-4 sm:space-y-6">
      {/* Section Header */}
      <div className="border-b border-border pb-3">
        <h2 className="text-t-18 font-medium text-neutral-darker">Profile</h2>
      </div>

      {/* ── General Information ── */}
      <div className="space-y-5">
        <button
          type="button"
          onClick={() => setGeneralOpen(!generalOpen)}
          className="flex items-center gap-3 px-3 w-full"
        >
          <User className="w-8 h-8 text-neutral-darker" />
          <span className="flex-1 text-left text-t-18 font-semibold text-neutral-darker">
            General Information
          </span>
          {generalOpen ? (
            <ChevronUp className="w-5 h-5 text-neutral" />
          ) : (
            <ChevronDown className="w-5 h-5 text-neutral" />
          )}
        </button>

        {generalOpen && (
          <div className="space-y-5">
            {/* Upload Image Area */}
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 h-[150px] sm:h-[200px] rounded-2xl border border-dashed border-neutral-normal px-3">
              <button
                type="button"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-primary-dark text-secondary-light text-[13px] sm:text-t-14 font-semibold rounded-lg hover:bg-primary-dark-hover transition-colors"
              >
                Upload image
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <p className="text-[13px] sm:text-t-16 font-medium text-neutral text-center max-w-[400px]">
                Upload an image below 2 MB, Accepted File format JPG, PNG and
                JPEG
              </p>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className={labelClass}>
                  First name <span className="text-error">*</span>
                </label>
                <input type="text" className={inputClass} placeholder="" />
              </div>
              <div className="space-y-3">
                <label className={labelClass}>
                  Last name <span className="text-error">*</span>
                </label>
                <input type="text" className={inputClass} placeholder="" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className={labelClass}>
                  Email <span className="text-error">*</span>
                </label>
                <input type="email" className={inputClass} placeholder="" />
              </div>
              <PhoneField
                label="Phone number"
                country="CA"
                wrapperClassName="[&_label]:text-t-16 [&_label]:font-medium [&_label]:text-neutral-darker"
                className="!h-14"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Address Information ── */}
      <div className="space-y-5">
        <button
          type="button"
          onClick={() => setAddressOpen(!addressOpen)}
          className="flex items-center gap-3 px-3 w-full"
        >
          <MapPin className="w-8 h-8 text-neutral-darker" />
          <span className="flex-1 text-left text-t-18 font-semibold text-neutral-darker">
            Address Information
          </span>
          {addressOpen ? (
            <ChevronUp className="w-5 h-5 text-neutral" />
          ) : (
            <ChevronDown className="w-5 h-5 text-neutral" />
          )}
        </button>

        {addressOpen && (
          <div className="space-y-3">
            {/* Address Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className={labelClass}>
                  Address line 1 <span className="text-error">*</span>
                </label>
                <input type="text" className={inputClass} placeholder="" />
              </div>
              <div className="space-y-3">
                <label className={labelClass}>Address line 2</label>
                <input type="text" className={inputClass} placeholder="" />
              </div>
            </div>

            {/* Country + State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className={labelClass}>
                  Country <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {countryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className={labelClass}>
                  State <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {stateOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral pointer-events-none" />
                </div>
              </div>
            </div>

            {/* City + Postal Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className={labelClass}>
                  City <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    {cityOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral pointer-events-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className={labelClass}>Postal code</label>
                <input type="text" className={inputClass} placeholder="" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Action Buttons ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-end gap-2">
        <button
          type="button"
          className="h-10 sm:h-12 px-4 bg-primary-light text-primary-dark text-[14px] sm:text-t-16 font-semibold rounded-lg hover:bg-primary-light-active transition-colors"
        >
          Cancel
        </button>
        <button
          type="button"
          className="h-10 sm:h-12 px-4 bg-primary-dark text-secondary-light text-[14px] sm:text-t-16 font-semibold rounded-lg hover:bg-primary-dark-hover transition-colors"
        >
          Save Change
        </button>
      </div>
    </div>
  );
}

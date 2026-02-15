"use client";

import React, { useState } from "react";

interface PharmacyProfile {
  name: string;
  image: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  openingHours: string;
  workingDays: string;
  lastLogin: string;
  currentStatus: "online" | "offline";
}

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profile: PharmacyProfile) => void;
  profile: PharmacyProfile;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  onSave,
  profile,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<PharmacyProfile>(profile);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleChange = (field: keyof PharmacyProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Pharmacy name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  const handleClose = () => {
    setFormData(profile);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-2xl mx-4 my-8 bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]">
          <h2 className="text-[20px] font-semibold text-[#1E293B]">
            Edit Profile
          </h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F1F5F9] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#64748B"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="space-y-5">
            <div>
              <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                Pharmacy Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full px-4 py-3 border ${errors.name ? "border-[#EF4444]" : "border-[#E2E8F0]"} rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent`}
                placeholder="Enter pharmacy name"
              />
              {errors.name && (
                <p className="mt-1 text-[13px] text-[#EF4444]">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                Address <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className={`w-full px-4 py-3 border ${errors.address ? "border-[#EF4444]" : "border-[#E2E8F0]"} rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent`}
                placeholder="Enter street address"
              />
              {errors.address && (
                <p className="mt-1 text-[13px] text-[#EF4444]">
                  {errors.address}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                  City <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className={`w-full px-4 py-3 border ${errors.city ? "border-[#EF4444]" : "border-[#E2E8F0]"} rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent`}
                  placeholder="Enter city"
                />
                {errors.city && (
                  <p className="mt-1 text-[13px] text-[#EF4444]">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleChange("country", e.target.value)}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="Enter country"
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                Phone Number <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={`w-full px-4 py-3 border ${errors.phone ? "border-[#EF4444]" : "border-[#E2E8F0]"} rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent`}
                placeholder="+970 12345678"
              />
              {errors.phone && (
                <p className="mt-1 text-[13px] text-[#EF4444]">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                Email Address <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full px-4 py-3 border ${errors.email ? "border-[#EF4444]" : "border-[#E2E8F0]"} rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent`}
                placeholder="pharmacy@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-[13px] text-[#EF4444]">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                  Opening Hours
                </label>
                <input
                  type="text"
                  value={formData.openingHours}
                  onChange={(e) => handleChange("openingHours", e.target.value)}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="9AM-9PM"
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                  Working Days
                </label>
                <input
                  type="text"
                  value={formData.workingDays}
                  onChange={(e) => handleChange("workingDays", e.target.value)}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
                  placeholder="Every Day"
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#1E293B] mb-2">
                Current Status
              </label>
              <select
                value={formData.currentStatus}
                onChange={(e) => handleChange("currentStatus", e.target.value)}
                className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E2E8F0]">
          <button
            onClick={handleClose}
            className="px-6 py-2.5 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#1E293B] rounded-lg text-[14px] font-medium transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg text-[14px] font-medium transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

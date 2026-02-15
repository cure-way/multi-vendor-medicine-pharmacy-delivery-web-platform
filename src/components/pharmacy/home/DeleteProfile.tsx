"use client";

import React, { useState } from "react";

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WarningIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17H19L10 2L1 17ZM11 14H9V12H11V14ZM11 10H9V6H11V10Z"
      fill="#F59E0B"
    />
  </svg>
);

export default function DeleteAccountModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteAccountModalProps) {
  const [confirmText, setConfirmText] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (confirmText.trim().toUpperCase() !== "DELETE") {
      setError("Please type DELETE to confirm");
      return;
    }
    onConfirm();
    setConfirmText("");
    setError("");
  };

  const handleClose = () => {
    setConfirmText("");
    setError("");
    onClose();
  };

  const isValid = confirmText.trim().toUpperCase() === "DELETE";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-200">
        <h2 className="text-[20px] font-semibold text-[#1E293B] mb-3">
          Delete Account
        </h2>

        <p className="text-[14px] text-[#64748B] mb-6 leading-relaxed">
          Are you sure you want to permanently delete your account? All your
          data will be removed and this action cannot be undone.
        </p>

        <div className="mb-2">
          <input
            type="text"
            value={confirmText}
            onChange={(e) => {
              setConfirmText(e.target.value);
              setError("");
            }}
            placeholder="Type DELETE to confirm"
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 mb-4">
            <WarningIcon />
            <p className="text-[13px] text-[#F59E0B]">{error}</p>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleConfirm}
            disabled={!isValid}
            className={`flex-1 px-4 py-3 rounded-lg text-[14px] font-medium transition-colors ${
              isValid
                ? "bg-[#EF4444] hover:bg-[#DC2626] text-white"
                : "bg-[#FEE2E2] text-[#EF4444] cursor-not-allowed opacity-50"
            }`}
          >
            Delete Account
          </button>

          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#1E293B] rounded-lg text-[14px] font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

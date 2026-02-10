"use client";

import { CheckCircle } from "lucide-react";
import { getExpiryInfo } from "../../utils/services";
import { InventoryItem } from "../../utils/types";

export default function PharmacyMedicineActions({
  item,
}: {
  item: InventoryItem;
}) {
  const expiry = getExpiryInfo(item.expiryDate);

  return (
    <div className="space-y-4 bg-white p-5 border rounded-xl">
      <h3 className="font-semibold text-gray-900 text-sm">Alert & Actions</h3>

      {expiry.status === "safe" ? (
        <div className="flex items-center gap-2 bg-green-50 p-3 rounded-lg text-green-700 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>No alerts</span>
        </div>
      ) : (
        <div
          className={`p-3 rounded-lg text-sm ${
            expiry.status === "expired"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          <p>{expiry.label}</p>

          <p className="opacity-80 text-xs">Expiry date: {item.expiryDate}</p>
        </div>
      )}

      <button className="hover:bg-gray-50 py-2 border rounded-lg w-full text-sm">
        Mark as Out of stock
      </button>

      <button className="bg-red-700 py-2 rounded-lg w-full text-white text-sm">
        Delete medicine
      </button>
    </div>
  );
}

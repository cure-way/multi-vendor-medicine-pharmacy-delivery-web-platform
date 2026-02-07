"use client";

import { FiHome } from "react-icons/fi";

export default function PharmacyHomeHeader() {
  return (
    <div className="flex items-start gap-2 mb-6">
      <FiHome className="mt-1 text-(--color-primary) text-lg" />

      <div>
        <h1 className="font-semibold text-(--color-primary) text-lg">
          Pharmacy Home
        </h1>
        <p className="text-gray-500 text-sm">Manage your pharmacy</p>
      </div>
    </div>
  );
}

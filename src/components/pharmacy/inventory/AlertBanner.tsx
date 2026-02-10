"use client";

import { FiAlertCircle } from "react-icons/fi";

interface AlertBannerProps {
  title: string;
  description: string;
}

export default function AlertBanner({ title, description }: AlertBannerProps) {
  return (
    <div className="flex gap-3 bg-red-50 p-4 border-red-700 border-l-3 rounded-lg">
      <FiAlertCircle className="mt-0.5 text-red-700 text-lg shrink-0" />

      <div>
        <p className="font-semibold text-red-900">{title}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}

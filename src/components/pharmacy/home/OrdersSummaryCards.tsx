"use client";

import { FiFileText, FiBox } from "react-icons/fi";

const CARDS = [
  {
    label: "All Orders Today",
    value: 14,
    unit: "orders",
    icon: FiFileText,
  },
  {
    label: "Orders Delivered",
    value: 6,
    unit: "orders",
    icon: FiBox,
  },
];

export default function OrdersSummaryCards() {
  return (
    <div className="gap-4 grid sm:grid-cols-2 mb-6">
      {CARDS.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.label}
            className="flex items-center gap-4 bg-white p-4 border rounded-xl"
          >
            <div className="flex justify-center items-center bg-blue-50 rounded-lg w-10 h-10 text-(--color-primary)">
              <Icon className="text-lg" />
            </div>

            <div>
              <p className="text-gray-500 text-sm">{card.label}</p>
              <p className="font-semibold text-gray-900 text-lg">
                {card.value}{" "}
                <span className="font-normal text-gray-500 text-sm">
                  {card.unit}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

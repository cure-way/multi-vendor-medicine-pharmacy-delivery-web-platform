"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiAlertCircle } from "react-icons/fi";
import { FaCapsules } from "react-icons/fa";

const SUMMARY_ITEMS = [
  {
    id: "paracetamol",
    label: "Top Selling medicine",
    value: "Paracetamol",
  },
  {
    id: "vitamins",
    label: "Most requested category",
    value: "Vitamins",
  },
];

const ALERT_STOCK_ITEMS = [
  {
    id: "desamol-500",
    name: "Desamol 500mg",
    remaining: "Only 3 item left",
  },
];

export default function QuickActionCard() {
  const [acceptingOrders, setAcceptingOrders] = useState(true);
  const router = useRouter();

  return (
    <div className="bg-white p-4 border rounded-xl">
      <h2 className="mb-4 font-semibold text-gray-900 text-sm">Quick Action</h2>

      <div
        className={`mb-4 rounded-lg p-3 transition ${
          acceptingOrders ? "bg-green-50" : "bg-gray-100"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-gray-900 text-sm">
              Accept/Pause New Orders
            </p>
            <p className="text-gray-500 text-xs">
              {acceptingOrders
                ? "Now you can accepting new orders"
                : "Orders are currently paused"}
            </p>
          </div>

          <button
            onClick={() => setAcceptingOrders((prev) => !prev)}
            className={`relative h-5 w-9 rounded-full transition ${
              acceptingOrders ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <span
              className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white transition ${
                acceptingOrders ? "right-1" : "left-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="mb-4 p-3 border border-t-4 border-t-yellow-300 rounded-lg">
        <div className="flex items-center gap-2 mb-3 font-medium text-yellow-700 text-sm">
          <FiAlertCircle className="text-base" />
          Alert Stock
        </div>

        <div className="space-y-3">
          {ALERT_STOCK_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/pharmacy/inventory/${item.id}`)}
              className="flex items-center gap-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"
            >
              <div className="flex justify-center items-center bg-white shadow-sm rounded-lg w-12 h-12">
                <FaCapsules className="text-yellow-600 text-2xl" />
              </div>

              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs">{item.remaining}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("/pharmacy/inventory")}
          className="bg-(--color-primary) mt-3 py-2 rounded-lg w-full font-medium text-white text-sm"
        >
          Update Stock
        </button>
      </div>

      <div>
        <h3 className="mb-2 font-semibold text-gray-900 text-sm">
          Today Summary
        </h3>

        <div className="space-y-2">
          {SUMMARY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`/pharmacy/inventory/${item.id}`)}
              className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 border rounded-lg transition cursor-pointer"
            >
              <span className="bg-green-500 rounded-full w-2 h-2" />
              <div>
                <p className="text-gray-500 text-xs">{item.label}</p>
                <p className="font-medium text-gray-900 text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

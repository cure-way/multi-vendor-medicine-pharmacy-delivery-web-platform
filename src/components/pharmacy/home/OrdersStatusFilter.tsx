"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useClickOutside } from "@/hooks/useClickOutside";

const STATUSES = ["All", "New", "Past", "Delivered"];

export default function OrdersStatusFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("All");

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 px-3 py-1.5 border rounded-lg text-gray-600 text-xs"
      >
        {value}
        <FiChevronDown className="text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="right-0 z-10 absolute bg-white shadow-md mt-2 border rounded-lg w-32">
          {STATUSES.map((status) => {
            const isActive = status === value;

            return (
              <button
                key={status}
                onClick={() => {
                  setValue(status);
                  setOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-xs transition
                  ${
                    isActive
                      ? "font-medium text-gray-700"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
              >
                {status}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useClickOutside } from "@/hooks/useClickOutside";

interface StatusDropdownProps {
  options: string[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;

  direction?: "up" | "down";
}

export default function StatusDropdown({
  options,
  value,
  defaultValue,
  onChange,
  className = "",
  direction = "down",
}: StatusDropdownProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? options[0],
  );

  const selectedValue = value ?? internalValue;

  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });

  function handleSelect(option: string) {
    if (value === undefined) {
      setInternalValue(option);
    }
    onChange?.(option);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 rounded-lg border px-4 py-2 text-xs text-gray-600 ${className}`}
      >
        {selectedValue}
        <FiChevronDown className="text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 z-50 rounded-lg border bg-white shadow-md w
          ${direction === "down" ? "mt-2 top-full" : "mb-2 bottom-full"}
        `}
        >
          {options.map((option) => {
            const isActive = option === selectedValue;

            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full px-3 py-2 text-left text-xs transition
                  ${
                    isActive
                      ? "font-medium text-gray-700"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

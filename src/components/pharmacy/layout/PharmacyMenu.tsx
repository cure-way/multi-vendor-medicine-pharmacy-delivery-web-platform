"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function PharmacyMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });

  function handleLogout() {
    setOpen(false);
    router.push("/auth/sign-in");
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 border rounded-full"
      >
        <div className="flex justify-center items-center bg-(--color-secondary-light) rounded-full w-8 h-8 font-semibold text-(--color-primary) text-sm">
          A
        </div>
        <span className="hidden sm:block font-medium text-gray-700 text-sm">
          Al-Shifa Pharmacy
        </span>
        <FaChevronDown
          className={`text-xs text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="right-0 absolute bg-white shadow-lg mt-2 py-2 border rounded-xl w-44">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:bg-gray-50 px-4 py-2 w-full text-gray-500 text-sm"
          >
            <FaSignOutAlt />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

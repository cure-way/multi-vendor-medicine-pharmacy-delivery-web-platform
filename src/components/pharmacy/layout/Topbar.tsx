"use client";

import { FaBars, FaBell } from "react-icons/fa";
import PharmacyMenu from "./PharmacyMenu";
import { useRouter } from "next//navigation";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const router = useRouter();

  return (
    <header className="bg-white px-4 lg:px-6 py-4 border-b">
      <div className="flex items-center gap-4">
        {/* Menu button (mobile only) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden hover:bg-gray-100 p-2 border rounded-lg text-(--color-primary)"
        >
          <FaBars />
        </button>

        {/* Search (desktop) */}
        <div className="hidden md:block w-full max-w-md">
          <input
            type="text"
            placeholder="What do you want to find?"
            className="px-4 py-2 border border-gray-200 focus:border-(--color-primary-active) rounded-full focus:outline-none w-full text-sm"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={() => router.push("/pharmacy/notifications")}
            className="flex justify-center items-center hover:bg-gray-100 border rounded-full w-9 h-9 text-(--color-primary)"
          >
            <FaBell />
          </button>
          <PharmacyMenu />
        </div>
      </div>

      {/* Search (mobile only) */}
      <div className="md:hidden mt-4">
        <input
          type="text"
          placeholder="What do you want to find?"
          className="px-4 py-2 border border-gray-200 focus:border-(--color-primary-active) rounded-full focus:outline-none w-full text-sm"
        />
      </div>
    </header>
  );
}

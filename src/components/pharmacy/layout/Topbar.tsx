"use client";

import { FaBars, FaBell } from "react-icons/fa";
import PharmacyMenu from "./PharmacyMenu";
import { useRouter } from "next//navigation";
import { useMemo, useState } from "react";
import { inventoryData, ORDERS } from "@/services/pharmacyData";
import GlobalSearchPanel from "./GlobalSearchModal";
import { useClickOutside } from "@/hooks";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const results = useMemo(() => {
    if (!search.trim()) return null;

    const query = search.toLowerCase();

    const medicines = inventoryData.filter((m) =>
      m.medicineName.toLowerCase().includes(query),
    );

    const orders = ORDERS.filter((order) =>
      order.medicine.toLowerCase().includes(query),
    );

    return { medicines, orders };
  }, [search]);

  return (
    <>
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
          <div
            ref={searchRef}
            className="hidden md:block relative w-full max-w-md"
          >
            <div className="relative">
              <input
                type="text"
                value={search}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What do you want to find?"
                className="px-4 py-2 border border-gray-200 focus:border-(--color-primary-active) rounded-full focus:outline-none w-full text-sm"
              />
            </div>

            <div className="top-full right-0 left-0 z-50 absolute mt-2">
              {isOpen && search && results && (
                <GlobalSearchPanel
                  medicines={results.medicines}
                  orders={results.orders}
                />
              )}
            </div>
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
        <div className="md:hidden relative mt-4 w-full">
          <div className="relative">
            <input
              type="text"
              value={search}
              onFocus={() => setIsOpen(true)}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="What do you want to find?"
              className="px-4 py-2 border border-gray-200 focus:border-(--color-primary-active) rounded-full focus:outline-none w-full text-sm"
            />
          </div>

          <div className="top-full right-0 left-0 z-50 absolute mt-2">
            {isOpen && search && results && (
              <GlobalSearchPanel
                medicines={results.medicines}
                orders={results.orders}
              />
            )}
          </div>
        </div>
      </header>
    </>
  );
}

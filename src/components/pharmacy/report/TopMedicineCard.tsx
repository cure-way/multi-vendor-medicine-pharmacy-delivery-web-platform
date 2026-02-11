"use client";

import { TopMedicine } from "@/types/pharmacyTypes";
import { useRouter } from "next/navigation";
import { FaPills } from "react-icons/fa";

export function TopMedicineCard({ data }: { data: TopMedicine[] }) {
  const router = useRouter();

  const handleClick = (medicineId: string) => {
    router.push(`/pharmacy/inventory/${medicineId}`);
  };

  return (
    <div className="bg-white p-6 border rounded-xl max-w-full md:max-w-100 grow">
      <h2 className="mb-8 font-medium text-sm text-center">Top Medicine</h2>

      <div className="space-y-2">
        {data.map((item) => (
          <button
            key={item.medicine}
            onClick={() => handleClick(item.id)}
            className="flex justify-between items-center hover:bg-gray-50 p-3 rounded-lg w-full transition cursor-pointer"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center bg-(--color-secondary-light) rounded-lg w-10 h-10 text-(--color-primary)">
                <FaPills className="text-lg" />
              </div>

              <span className="text-gray-700 text-sm text-left">
                {item.medicine}
              </span>
            </div>

            {/* Right side */}
            <span className="font-medium text-(--color-primary) text-sm">
              {item.orders} orders
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

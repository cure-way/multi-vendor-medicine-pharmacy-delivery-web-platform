"use client";

import { NEARBY_PHARMACIES } from "@/services/nearbypharmacies.data";
import { Pharmacy } from "@/types/pharmacyTypes";
import { useRouter } from "next/navigation";

export default function NearbyPharmaciesSection() {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/pharmacies");
  };

  return (
    <div className="bg-white shadow-sm mb-6 p-6 sm:p-8 border border-gray-200 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-gray-900 text-xl">Nearby Pharmacies</h2>
        <button
          onClick={handleSeeAll}
          className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 text-sm"
        >
          See all
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="-mx-2 px-2 overflow-x-auto">
        <div className="flex gap-4 pb-2">
          {NEARBY_PHARMACIES.slice(0, 4).map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface PharmacyCardProps {
  pharmacy: Pharmacy;
}

function PharmacyCard({ pharmacy }: PharmacyCardProps) {
  const router = useRouter();

  const handleViewPharmacy = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/pharmacies/${pharmacy.id}`);
  };

  const handleCardClick = () => {
    router.push(`/pharmacies/${pharmacy.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-gray-50 hover:shadow-md p-4 border border-gray-200 rounded-xl w-64 transition-all cursor-pointer shrink-0"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-green-500 mt-1.5 rounded-full w-2 h-2 shrink-0"></div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 font-semibold text-gray-900 text-sm truncate">
            {pharmacy.name}
          </h3>
          <div className="flex items-center gap-1.5 mb-2 text-gray-600 text-xs">
            <svg
              className="w-3.5 h-3.5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">{pharmacy.distance}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <svg
              className="fill-current w-3.5 h-3.5 text-yellow-400 shrink-0"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium text-gray-700">{pharmacy.rating}</span>
            <span className="text-gray-500">
              ({pharmacy.reviewCount}+ Rating)
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-green-600">
          Delivery fee ${pharmacy.deliveryFee}
        </span>
        <button
          onClick={handleViewPharmacy}
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          View
        </button>
      </div>
    </div>
  );
}

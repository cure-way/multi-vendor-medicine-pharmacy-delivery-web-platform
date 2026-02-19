import { Medicine } from "@/types/categories.types";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

interface SimilarProductsSectionProps {
  medicines: Medicine[];
}

export default function SimilarProductsSection({
  medicines,
}: SimilarProductsSectionProps) {
  return (
    <div className="bg-white shadow-sm p-6 sm:p-8 border border-gray-200 rounded-2xl">
      <SectionHeader title="Similar Products" />

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {medicines.map((medicine) => (
          <SimilarMedicineCard key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

interface SimilarMedicineCardProps {
  medicine: Medicine;
}

function SimilarMedicineCard({ medicine }: SimilarMedicineCardProps) {
  const hasDiscount = medicine.stock > 20;

  return (
    <Link
      href={`/medicines/${medicine.id}`}
      className="relative bg-gray-50 hover:shadow-md p-4 rounded-xl transition-shadow duration-200 cursor-pointer"
    >
      <button className="top-2 right-2 z-10 absolute flex justify-center items-center bg-white hover:bg-blue-50 shadow-sm rounded-full w-6 h-6 transition-colors">
        <svg
          className="w-4 h-4 text-(--color-primary)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <div className="relative flex justify-center items-center bg-white mb-3 rounded-lg w-full aspect-square">
        <Image
          src="/patient/Pain Relief-X.png"
          alt={medicine.name}
          fill
          className="p-2 object-contain"
        />
      </div>

      <div className="space-y-2">
        <h3 className="min-h-10 font-medium text-gray-900 text-sm line-clamp-2">
          {medicine.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-gray-900 text-base">
            $
            {hasDiscount
              ? (medicine.price * 0.8).toFixed(2)
              : medicine.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-gray-400 text-xs line-through">
              ${medicine.price.toFixed(2)}
            </span>
          )}
        </div>
        <button className="bg-(--color-primary) hover:bg-(--color-primary-dark) py-2 rounded-lg w-full font-medium text-white text-sm transition-colors">
          Add to cart
        </button>
      </div>
    </Link>
  );
}

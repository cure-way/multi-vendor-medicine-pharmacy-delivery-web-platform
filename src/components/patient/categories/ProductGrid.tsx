import { Medicine } from "@/types/categories.types";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  medicines: Medicine[];
}

export default function ProductGrid({ medicines }: Props) {
  return (
    <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {medicines.map((medicine) => (
        <div
          key={medicine.id}
          className="flex flex-col bg-white shadow-sm hover:shadow-md p-3 border border-gray-100 rounded-2xl h-full transition-shadow"
        >
          {/* Image */}
          <div className="relative bg-gray-100 mb-3 rounded-xl w-full h-32 overflow-hidden">
            <Link
              href={`/medicines/${medicine.id}`}
              className="top-2 right-2 z-10 absolute bg-white/80 hover:bg-white shadow-sm p-1.5 rounded-full hover:scale-110 transition-all duration-200"
            >
              <Eye
                size={16}
                className="text-gray-700 hover:text-black transition-colors duration-200"
              />
            </Link>

            {medicine.prescriptionRequired && (
              <span className="top-2 left-2 absolute bg-orange-100 px-2 py-0.5 rounded-md font-medium text-orange-700 text-xs">
                Rx
              </span>
            )}

            <Image
              src={medicine.imageUrl}
              alt={medicine.name}
              fill
              className="p-2 object-contain"
            />
          </div>

          <div className="flex flex-col flex-1">
            {/* Title */}
            <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
              {medicine.name}
            </h3>

            {/* Meta */}
            <p className="mt-1 text-gray-500 text-xs">
              {medicine.form} · {medicine.packSize}
            </p>

            <div className="mt-auto">
              {/* Price */}
              <div className="mt-3 font-semibold text-green-600 text-sm">
                {medicine.discount ? (
                  <>
                    $
                    {(medicine.price * (1 - medicine.discount / 100)).toFixed(
                      2,
                    )}
                    <span className="ml-2 text-gray-400 text-xs line-through">
                      ${medicine.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <>${medicine.price.toFixed(2)}</>
                )}
              </div>

              {/* Button */}
              <button
                disabled={medicine.stock === 0}
                className="bg-(--color-primary) disabled:bg-gray-300 hover:bg-(--color-primary-dark) mt-3 py-2 rounded-lg w-full text-white text-sm transition"
              >
                {medicine.stock === 0 ? "Unavailable" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

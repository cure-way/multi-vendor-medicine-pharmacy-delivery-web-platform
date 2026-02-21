"use client";

import { useState } from "react";
import Image from "next/image";
import { Medicine } from "@/types/categories.types";

interface Props {
  medicine: Medicine;
}

export default function MedicineOverviewCard({ medicine }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const hasDiscount = medicine.stock > 20;
  const originalPrice = medicine.price;
  const discountedPrice = originalPrice * 0.8;

  return (
    <div className="bg-white shadow-sm mb-6 p-6 sm:p-8 border border-gray-200 rounded-2xl">
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — GALLERY */}
        <div className="space-y-4">
          <div className="relative bg-gray-50 border border-gray-200 rounded-xl w-full aspect-square overflow-hidden">
            <Image
              src="/placeholder-medicine.png"
              alt={medicine.name}
              fill
              className="p-8 object-contain"
            />
          </div>

          <div className="flex gap-3">
            {[1, 2, 3].map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? "border-(--color-primary) ring-2 ring-blue-100"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Image
                  src="/placeholder-medicine.png"
                  alt={`${medicine.name} ${index + 1}`}
                  fill
                  className="p-2 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — DETAILS */}
        <div className="space-y-6">
          {/* Title + Price */}
          <div>
            <h1 className="mb-3 font-bold text-gray-900 text-2xl sm:text-3xl leading-tight">
              {medicine.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-bold text-gray-900 text-3xl">
                $
                {hasDiscount
                  ? discountedPrice.toFixed(2)
                  : originalPrice.toFixed(2)}
              </span>

              {hasDiscount && (
                <span className="text-gray-400 text-xl line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {medicine.prescriptionRequired && (
              <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg font-medium text-orange-700 text-sm">
                Prescription required upon checkout
              </div>
            )}
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700 text-sm">
              Quantity
            </label>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex justify-center items-center hover:bg-gray-50 border border-gray-300 rounded-lg w-10 h-10"
              >
                -
              </button>

              <span className="w-12 font-semibold text-lg text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex justify-center items-center hover:bg-gray-50 border border-gray-300 rounded-lg w-10 h-10"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-(--color-primary) hover:bg-(--color-primary-dark) px-6 py-3.5 rounded-lg font-semibold text-white transition-colors">
              Add to cart
            </button>

            <button className="hover:bg-gray-50 px-6 py-3.5 border border-gray-300 rounded-lg transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

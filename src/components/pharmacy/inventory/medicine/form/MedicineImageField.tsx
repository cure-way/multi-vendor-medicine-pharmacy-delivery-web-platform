"use client";

import Image from "next/image";

interface MedicineImageFieldProps {
  imagePreview: string;
  medicineName: string;
  onChange: (file: File) => void;
  onRemove: () => void;
}

export default function MedicineImageField({
  imagePreview,
  medicineName,
  onChange,
  onRemove,
}: MedicineImageFieldProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="relative">
        <Image
          src={imagePreview}
          alt={medicineName}
          className="border rounded w-52 h-28 object-contain"
          width={200}
          height={120}
        />

        {imagePreview !== "/placeholder-medicine.png" && (
          <button
            type="button"
            onClick={onRemove}
            className="-top-2 -right-2 absolute bg-red-600 rounded-full w-5 h-5 text-white text-xs"
          >
            ×
          </button>
        )}
      </div>

      <label className="hover:bg-gray-50 px-3 py-1.5 border rounded-lg text-xs cursor-pointer">
        Change image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onChange(file);
          }}
        />
      </label>
    </div>
  );
}

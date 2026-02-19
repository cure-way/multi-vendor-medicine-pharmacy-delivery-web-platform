import ProductGrid from "@/components/patient/categories/ProductGrid";
import { medicines } from "@/services/categories.mock";

export default function MedicinesPage() {
  return (
    <div className="space-y-8 px-16 py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="mb-6">
          <h1 className="font-bold text-2xl">Medicines</h1>
          <p className="text-gray-600">Browse all available medicines</p>
        </div>
      </div>

      <ProductGrid medicines={medicines} />
    </div>
  );
}

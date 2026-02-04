/**
 * Medicines Listing Page
 * Browse all medicines (public, no auth required)
 */
export default function MedicinesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Medicines</h1>
      <p className="text-gray-600 mb-6">Browse all available medicines</p>

      {/* TODO: Implement medicine listing with filters */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {["Panadol 500mg", "Vitamin C", "Amoxicillin", "Cough Syrup"].map(
          (medicine) => (
            <div
              key={medicine}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3" />
              <h3 className="font-medium text-sm mb-1">{medicine}</h3>
              <p className="text-gray-500 text-xs">Tablet · 12 pcs</p>
              <p className="text-blue-600 font-semibold text-sm mt-2">$9.99</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

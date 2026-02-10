import { useState } from "react";
import { useRouter } from "next/navigation";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  quantity: number;
  price: number;
  stock: string;
}

interface AvailableMedicine {
  id: string;
  name: string;
  dosage: string;
  price: number;
  stock: string;
}

export default function AddMedicineFromPrescriptionPage({
  params,
}: {
  params: { prescriptionId: string };
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedicines, setSelectedMedicines] = useState<Medicine[]>([]);

  const availableMedicines: AvailableMedicine[] = [
    {
      id: "1",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "In stock",
    },
    {
      id: "2",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "In stock",
    },
    {
      id: "3",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "Out of stock",
    },
    {
      id: "4",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "In stock",
    },
    {
      id: "5",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "Low stock",
    },
    {
      id: "6",
      name: "Paracetamol",
      dosage: "500mg",
      price: 5.99,
      stock: "In stock",
    },
    { id: "7", name: "Panadol", dosage: "", price: 7.99, stock: "" },
    { id: "8", name: "Panadol Extra", dosage: "500mg", price: 9.99, stock: "" },
  ];

  const filteredMedicines = availableMedicines.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleAddMedicine = (medicine: AvailableMedicine) => {
    const newMedicine: Medicine = {
      id: medicine.id,
      name: medicine.name,
      dosage: medicine.dosage,
      quantity: 1,
      price: medicine.price,
      stock: medicine.stock,
    };
    setSelectedMedicines([...selectedMedicines, newMedicine]);
  };

  const handleRemoveMedicine = (id: string) => {
    setSelectedMedicines(selectedMedicines.filter((m) => m.id !== id));
  };

  const isAdded = (id: string) => selectedMedicines.some((m) => m.id === id);
  const isOutOfStock = (stock: string) =>
    stock.toLowerCase() === "out of stock";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Add Medicine from Prescription
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pa"
                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="space-y-3">
              {filteredMedicines.map((medicine) => {
                const outOfStock = isOutOfStock(medicine.stock);
                const added = isAdded(medicine.id);
                const showStock = medicine.stock !== "";

                return (
                  <div
                    key={medicine.id}
                    className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {medicine.name}{" "}
                        {medicine.dosage && (
                          <span className="text-gray-500">
                            {medicine.dosage}
                          </span>
                        )}
                      </h3>
                      {showStock && (
                        <p
                          className={`text-sm mt-1 ${
                            outOfStock
                              ? "text-red-600"
                              : medicine.stock.toLowerCase() === "low stock"
                                ? "text-orange-600"
                                : "text-green-600"
                          }`}
                        >
                          {medicine.stock}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddMedicine(medicine)}
                      disabled={added || outOfStock}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        added || outOfStock
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {added
                        ? "Added"
                        : outOfStock
                          ? "Mark as unavailable"
                          : "Add"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Prescription Image */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Medicine From Prescription
            </h2>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/600/450"
                alt="Prescription"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Action Buttons */}
        {selectedMedicines.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-7xl mx-auto flex gap-3">
              <button
                onClick={() => router.back()}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Submitting medicines:", selectedMedicines);
                  alert("Medicines added to order successfully");
                  router.back();
                }}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Add to Order ({selectedMedicines.length})
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

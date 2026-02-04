import { requirePatient } from "@/lib/auth";

/**
 * Prescriptions Page (Protected)
 * Manage patient's prescriptions
 */
export default async function PrescriptionsPage() {
  // Require patient authentication
  // Session will be used for user-specific prescription data
  await requirePatient();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Prescriptions</h1>
      <p className="text-gray-600 mb-6">Manage your uploaded prescriptions</p>

      {/* TODO: Implement prescription upload and listing */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Upload Prescription
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-20 bg-gray-100 rounded" />
            <div className="flex-1">
              <p className="font-medium">Prescription #P001</p>
              <p className="text-gray-500 text-sm">Uploaded: Jan 1, 2026</p>
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full mt-1">
                Verified
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-20 bg-gray-100 rounded" />
            <div className="flex-1">
              <p className="font-medium">Prescription #P002</p>
              <p className="text-gray-500 text-sm">Uploaded: Dec 20, 2025</p>
              <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full mt-1">
                Pending Review
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

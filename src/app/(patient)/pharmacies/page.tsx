/**
 * Pharmacies Listing Page
 * Browse nearby pharmacies (public, no auth required)
 */
export default function PharmaciesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Nearby Pharmacies</h1>
      <p className="text-gray-600 mb-6">Find pharmacies near your location</p>

      {/* TODO: Implement pharmacy listing with map */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["City Pharmacy", "Health Plus", "MediCare", "Quick Meds"].map(
          (pharmacy) => (
            <div
              key={pharmacy}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                <div>
                  <h3 className="font-medium">{pharmacy}</h3>
                  <p className="text-gray-500 text-sm">2.5 km away</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Open · Closes at 10:00 PM</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

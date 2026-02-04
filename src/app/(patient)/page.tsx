/**
 * Patient Home Page
 * The main landing page for patients (and guests)
 */
export default function PatientHomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to CureWay</h1>
      <p className="text-gray-600 mb-8">
        Your trusted multi-vendor pharmacy delivery platform
      </p>

      {/* TODO: Implement home page content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Featured Medicines</h2>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </section>
        <section className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Nearby Pharmacies</h2>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </section>
        <section className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Categories</h2>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </section>
      </div>
    </div>
  );
}

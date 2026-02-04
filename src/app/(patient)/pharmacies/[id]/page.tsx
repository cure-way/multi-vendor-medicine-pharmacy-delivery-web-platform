interface PharmacyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Pharmacy Detail Page
 * View single pharmacy details (public, no auth required)
 */
export default async function PharmacyDetailPage({
  params,
}: PharmacyDetailPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Pharmacy Details</h1>
      <p className="text-gray-500 mb-6">ID: {id}</p>

      {/* TODO: Fetch and display pharmacy details */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-100 rounded-lg" />
          <div>
            <h2 className="text-xl font-semibold">Pharmacy Name</h2>
            <p className="text-gray-500">123 Street Name, City</p>
            <p className="text-sm text-green-600 mt-1">Open Now</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium mb-4">Available Medicines</h3>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

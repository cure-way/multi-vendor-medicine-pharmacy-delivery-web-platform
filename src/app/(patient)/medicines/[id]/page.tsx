interface MedicineDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Medicine Detail Page
 * View single medicine details (public, no auth required)
 */
export default async function MedicineDetailPage({
  params,
}: MedicineDetailPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 rounded-lg" />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Medicine Name</h1>
          <p className="text-gray-500 mb-4">ID: {id}</p>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-2xl font-bold text-blue-600 mb-4">$9.99</p>

            <div className="space-y-3 mb-6">
              <p className="text-sm">
                <span className="text-gray-500">Form:</span> Tablet
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Quantity:</span> 12 pcs
              </p>
              <p className="text-sm">
                <span className="text-gray-500">Prescription:</span> Not
                required
              </p>
            </div>

            {/* TODO: Add to cart functionality */}
            <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

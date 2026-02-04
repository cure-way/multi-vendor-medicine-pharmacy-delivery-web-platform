/**
 * Categories Page
 * Browse medicine categories (public, no auth required)
 */
export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <p className="text-gray-600 mb-6">Browse medicines by category</p>

      {/* TODO: Implement category grid */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          "Pain Relief",
          "Antibiotics",
          "Vitamins",
          "Cold & Flu",
          "Skin Care",
          "First Aid",
        ].map((category) => (
          <div
            key={category}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg mb-3" />
            <h3 className="font-medium text-sm">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

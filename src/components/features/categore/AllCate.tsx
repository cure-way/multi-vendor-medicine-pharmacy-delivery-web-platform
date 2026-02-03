import { Category } from "./services";

interface AllCategoriesProps {
  categories: Category[];
}

export default function AllCategories({ categories }: AllCategoriesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">All Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {category.name}
              </h3>
              {category.description && (
                <p className="text-sm text-gray-600">{category.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

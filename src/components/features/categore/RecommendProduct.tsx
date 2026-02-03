import { Product } from "./services";

interface RecommendedProductsProps {
  products: Product[];
}

const badgeStyles = {
  new: "bg-blue-600 text-white",
  sale: "bg-green-600 text-white",
  popular: "bg-orange-600 text-white",
};

export default function RecommendedProducts({
  products,
}: RecommendedProductsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Recommended For You
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer relative"
          >
            {product.badge && (
              <div className="absolute top-2 left-2 z-10">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    badgeStyles[product.badge]
                  }`}
                >
                  {product.badge.toUpperCase()}
                </span>
              </div>
            )}

            <div className="bg-white rounded-lg mb-3 h-32 flex items-center justify-center p-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
              {product.name}
            </h3>
            {product.price && (
              <p className="text-gray-600 text-sm font-semibold">
                ${product.price.toFixed(2)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

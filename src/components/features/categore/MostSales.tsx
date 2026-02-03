import { SaleProduct } from "./services";

interface MostSalesProps {
  products: SaleProduct[];
}

const buttonColors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  gray: "bg-gray-600 hover:bg-gray-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

export default function MostSales({ products }: MostSalesProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Most sales</h2>
        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          Popular
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 flex-shrink-0"
          >
            <h3 className="font-bold text-gray-900 mb-1">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>

            <div className="mb-3 h-32 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <button
              className={`w-full text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                buttonColors[product.buttonColor]
              }`}
            >
              {product.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

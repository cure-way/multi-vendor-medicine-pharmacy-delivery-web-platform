import { Category } from "./services";

interface FeaturedCategoriesProps {
  categories: Category[];
}

export default function FeaturedCategories({
  categories,
}: FeaturedCategoriesProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-6 overflow-x-auto pb-4 border-b border-border">
        {categories.map((category) => (
          <button
            key={category.id}
            className="text-neutral-dark hover:text-primary font-medium whitespace-nowrap pb-2 border-b-2 border-transparent hover:border-primary transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

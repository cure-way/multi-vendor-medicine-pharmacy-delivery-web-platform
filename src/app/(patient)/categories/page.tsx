/**
 * Categories Page
 * Browse medicine categories (public, no auth required)
 * Server Component - data fetched at request time
 */
import {
  FeaturedCategories,
  AllCategories,
  getFeaturedCategories,
  getAllCategories,
} from "@/components/features/category";

export default async function CategoriesPage() {
  const [featuredCategories, allCategories] = await Promise.all([
    getFeaturedCategories(),
    getAllCategories(),
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-t-30 font-bold text-neutral-darker mb-4">
        Categories
      </h1>
      <p className="text-neutral mb-6">Browse medicines by category</p>

      {featuredCategories.length > 0 && (
        <FeaturedCategories categories={featuredCategories} />
      )}

      {allCategories.length > 0 ? (
        <AllCategories categories={allCategories} />
      ) : (
        <p className="text-neutral text-center py-8">
          No categories available at the moment.
        </p>
      )}
    </div>
  );
}

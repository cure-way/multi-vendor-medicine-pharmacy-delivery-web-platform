/**
 * Patient Home Page
 * The main landing page for patients (and guests)
 * Server Component - data fetched at request time
 */
import {
  FeaturedCategories,
  MostSales,
  RecommendedProducts,
  getFeaturedCategories,
  getMostSalesProducts,
  getRecommendedProducts,
} from "@/components/features/category";

export default async function PatientHomePage() {
  const [featuredCategories, mostSalesProducts, recommendedProducts] =
    await Promise.all([
      getFeaturedCategories(),
      getMostSalesProducts(),
      getRecommendedProducts(),
    ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-t-30 font-bold text-neutral-darker mb-4">
        Welcome to CureWay
      </h1>
      <p className="text-neutral mb-8">
        Your trusted multi-vendor pharmacy delivery platform
      </p>

      {featuredCategories.length > 0 && (
        <FeaturedCategories categories={featuredCategories} />
      )}

      {mostSalesProducts.length > 0 && (
        <MostSales products={mostSalesProducts} />
      )}

      {recommendedProducts.length > 0 && (
        <RecommendedProducts products={recommendedProducts} />
      )}

      {featuredCategories.length === 0 &&
        mostSalesProducts.length === 0 &&
        recommendedProducts.length === 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <section className="p-6 bg-card rounded-lg shadow-sm">
              <h2 className="font-semibold mb-2 text-neutral-darker">
                Featured Medicines
              </h2>
              <p className="text-neutral text-sm">Coming soon...</p>
            </section>
            <section className="p-6 bg-card rounded-lg shadow-sm">
              <h2 className="font-semibold mb-2 text-neutral-darker">
                Nearby Pharmacies
              </h2>
              <p className="text-neutral text-sm">Coming soon...</p>
            </section>
            <section className="p-6 bg-card rounded-lg shadow-sm">
              <h2 className="font-semibold mb-2 text-neutral-darker">
                Categories
              </h2>
              <p className="text-neutral text-sm">Coming soon...</p>
            </section>
          </div>
        )}
    </div>
  );
}

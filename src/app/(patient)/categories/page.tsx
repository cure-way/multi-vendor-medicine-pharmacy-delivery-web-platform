import CategoriesHeader from "@/components/patient/categories/CategoriesHeader";
import CategoryGrid from "@/components/patient/categories/CategoryGrid";
import FeaturedCategories from "@/components/patient/categories/FeaturedCategories";
import MostSalesSection from "@/components/patient/categories/MostSalesSection";
import RecommendedSection from "@/components/patient/categories/RecommendedSection";
import { categories, medicines } from "@/services/categories.mock";
import {
  getFeaturedCategories,
  getRecommendedMedicines,
  getTopSellingCategories,
} from "@/services/categoriesService";

export default async function CategoriesPage() {
  const featured = getFeaturedCategories(categories);
  const mostSales = getTopSellingCategories(categories, medicines);
  const recommended = getRecommendedMedicines(medicines);

  return (
    <div className="space-y-10 px-6 sm:px-10 lg:px-16 py-8">
      <CategoriesHeader />
      <FeaturedCategories categories={featured} />
      <MostSalesSection categories={mostSales} />
      <CategoryGrid categories={categories} />
      <RecommendedSection medicines={recommended} />
    </div>
  );
}

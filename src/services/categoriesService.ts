import { Category, Medicine } from "@/types/categories.types";
import { categoryImages } from "@/utils/constants";

export function getCategoryImage(categoryId: number | string) {
  return categoryImages[Number(categoryId)] ?? "/patient/default.png";
}

export function getTopSellingCategories(
  categories: Category[],
  medicines: Medicine[],
  limit = 5,
) {
  const salesMap: Record<string, number> = {};

  medicines.forEach((medicine) => {
    if (!medicine.salesCount) return;

    salesMap[medicine.categoryId] =
      (salesMap[medicine.categoryId] || 0) + medicine.salesCount;
  });

  return categories
    .map((category) => ({
      ...category,
      totalSales: salesMap[category.id] || 0,
    }))
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, limit);
}
export function getFeaturedCategories(
  categories: Category[],
  limit = 4,
): Category[] {
  return categories.slice(0, limit);
}
export function getRecommendedMedicines(
  medicines: Medicine[],
  limit = 6,
): Medicine[] {
  return [...medicines]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, limit);
}

export function applyCategoryFilters(
  medicines: Medicine[],
  sort?: string,
): Medicine[] {
  switch (sort) {
    case "top":
      return [...medicines].sort(
        (a, b) => (b.salesCount ?? 0) - (a.salesCount ?? 0),
      );

    case "offers":
      return medicines.filter((m) => m.discount && m.discount > 0);

    case "rate":
      return [...medicines].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    default:
      return medicines;
  }
}

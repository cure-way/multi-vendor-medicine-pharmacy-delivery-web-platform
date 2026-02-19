import CategoryFilters from "@/components/patient/categories/CategoryFilters";
import ProductGrid from "@/components/patient/categories/ProductGrid";
import { categories, medicines } from "@/services/categories.mock";
import { applyCategoryFilters } from "@/services/categoriesService";
import { categoryMedicinesFilters } from "@/utils/constants";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { id } = await params;
  const { sort } = await searchParams;
  const category = categories.find((c) => c.id === Number(id));

  if (!category) {
    notFound();
  }

  let categoryMedicines = medicines.filter(
    (medicine) => medicine.categoryId === Number(id),
  );

  categoryMedicines = applyCategoryFilters(categoryMedicines, sort);

  return (
    <div className="space-y-8 px-16 py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h1 className="font-semibold text-gray-900 text-2xl">
          {category.name}
        </h1>

        <CategoryFilters
          filters={categoryMedicinesFilters}
          categoryId={id}
          activeSort={sort}
        />
      </div>

      <ProductGrid medicines={categoryMedicines} />
    </div>
  );
}

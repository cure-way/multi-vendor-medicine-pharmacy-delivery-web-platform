import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import { Category } from "@/types/categories.types";
import { getCategoryImage } from "@/services/categoriesService";
import Link from "next/link";

interface Props {
  categories: Category[];
}

export default function CategoryGrid({ categories }: Props) {
  return (
    <div className="space-y-6">
      <SectionTitle title="All Categories" />

      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="flex items-center gap-4 bg-white shadow-sm hover:shadow-md p-4 border border-gray-100 rounded-xl transition cursor-pointer"
          >
            <div className="relative bg-gray-100 rounded-lg w-12 h-12 overflow-hidden">
              <Image
                src={getCategoryImage(category.id)}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-sm">
                {category.name}
              </h4>

              <p className="text-gray-500 text-xs">
                {category.description ?? "Explore medicines in this category"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

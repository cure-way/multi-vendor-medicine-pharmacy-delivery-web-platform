import Image from "next/image";
import Link from "next/link";
import type { CategoryItem } from "@/lib/mock/home";

interface CategoryCardProps {
  category: CategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group flex flex-col gap-4 border border-neutral rounded-2xl overflow-hidden hover:border-primary-light-active transition-colors"
    >
      {/* Image area with gradient */}
      <div className="relative h-36 md:h-[171px] w-full bg-linear-to-b from-[#f7f8ff] to-[#dfe5ff] rounded-2xl flex items-center justify-center p-3">
        <Image
          src={category.image}
          alt={category.name}
          width={160}
          height={160}
          className="object-contain h-full w-auto group-hover:scale-105 transition-transform"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-2 items-center text-center px-2 pb-4">
        <p className="text-t-17 md:text-[20px] font-bold text-primary-hover leading-[1.2]">
          {category.name}
        </p>
        <p className="text-t-14 md:text-[18px] text-black/60 leading-[1.2]">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

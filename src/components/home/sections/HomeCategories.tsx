"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { categories } from "@/lib/mock/home";
import { CategoryCard } from "@/components/home/cards";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/home/animations";

/**
 * HomeCategories
 * Category grid with "see all" link.
 */
export function HomeCategories() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 flex flex-col gap-6">
      {/* Title row */}
      <FadeUp inView offset={10} duration={0.4}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary-darker">
            Categories
          </h2>
          <Link
            href="/categories"
            className="flex items-center gap-2 text-primary text-t-17 md:text-t-21 hover:underline"
          >
            see all
            <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>
      </FadeUp>

      {/* Cards grid */}
      <StaggerContainer
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        stagger={0.08}
      >
        {categories.map((cat) => (
          <StaggerItem key={cat.id}>
            <CategoryCard category={cat} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

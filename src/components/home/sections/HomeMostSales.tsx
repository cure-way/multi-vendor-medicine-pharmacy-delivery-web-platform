"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { mostSalesProducts } from "@/lib/mock/home";
import { ProductCard } from "@/components/home/cards";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/home/animations";

/**
 * HomeMostSales
 * Horizontally scrollable product cards with see-all link.
 */
export function HomeMostSales() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-10 flex flex-col gap-6 border-b border-primary-light-active pb-8 md:pb-10">
      {/* Title row */}
      <FadeUp inView offset={10} duration={0.4}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary-darker">
            Most Sales
          </h2>
          <Link
            href="/medicines"
            className="flex items-center gap-2 text-primary text-t-17 md:text-t-21 lg:text-[24px] hover:underline"
          >
            see all
            <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>
      </FadeUp>

      {/* Product grid — scrollable on mobile, grid on desktop */}
      <StaggerContainer
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:overflow-visible"
        stagger={0.06}
      >
        {mostSalesProducts.map((product) => (
          <StaggerItem
            key={product.id}
            className="snap-start shrink-0 w-40 sm:w-45 lg:w-auto"
          >
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

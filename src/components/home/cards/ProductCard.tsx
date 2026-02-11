import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import type { ProductItem } from "@/lib/mock/home";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative flex flex-col bg-white border border-primary-light-active rounded-[20px] overflow-hidden hover:shadow-md transition-shadow w-full min-w-40 h-70 md:h-80">
      {/* Image area */}
      <div className="relative bg-linear-to-b from-[#f7f8ff] to-[#dfe5ff] rounded-[20px] mx-2 mt-2 flex items-center justify-center h-32 md:h-37.25">
        <Image
          src={product.image}
          alt={product.name}
          width={122}
          height={122}
          className="object-contain h-full w-auto"
        />
        {/* Discount badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-success-dark/80 text-success-light text-[8px] md:text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
            {product.discount}
          </span>
        )}
        {/* Favourite */}
        <button
          className="absolute top-1 right-1 p-1 hover:bg-white/60 rounded-full transition-colors"
          aria-label="Add to favourites"
        >
          <IoHeartOutline className="w-5 h-5 text-black/40" />
        </button>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 px-3 md:px-4 pt-3 pb-1 flex-1 min-h-0">
        <div className="flex items-start gap-1 flex-1 min-h-0">
          <div className="flex-1 min-w-0">
            <p className="text-t-14 md:text-[18px] font-bold text-primary-darker truncate leading-[1.2]">
              {product.name}
            </p>
            {product.subtitle && (
              <p className="text-t-12 md:text-[16px] text-black/60 leading-[1.2] truncate">
                {product.subtitle}
              </p>
            )}
            <p className="text-t-12 md:text-[16px] text-black/50 leading-[1.2] truncate">
              {product.dosage}
            </p>
          </div>
        </div>
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-t-17 md:text-[20px] font-bold text-success-dark leading-[1.2]">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-t-12 md:text-t-14 text-black/40 line-through leading-[1.2]">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Add to cart */}
      <button
        className="bg-primary-light text-primary text-t-14 md:text-t-17 lg:text-[24px] font-normal py-2.5 rounded-xl w-full hover:bg-primary-light-hover transition-colors"
        type="button"
      >
        Add to cart
      </button>
    </div>
  );
}

// ============================================================
// Category Feature - Barrel Export
// ============================================================

// Components
export { default as AllCategories } from "./AllCategories";
export { default as FeaturedCategories } from "./FeaturedCategories";
export { default as MostSales } from "./MostSales";
export { default as RecommendedProducts } from "./RecommendedProducts";

// Types
export type { Category, SaleProduct, Product } from "./services";

// Service Functions
export {
  getFeaturedCategories,
  getAllCategories,
  getCategoryByName,
  getMostSalesProducts,
  getRecommendedProducts,
} from "./services";

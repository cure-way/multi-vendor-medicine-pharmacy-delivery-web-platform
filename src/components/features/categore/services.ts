import { getRequest } from "@/libs/apiClient";
export interface Category {
  name: string;
  imageAlt: string;
  id: string;
  image: string;
  description?: string;
}

export interface CategoryResponse {
  categories: Category[];
  total: number;
}

export const fetchCategories = async (): Promise<CategoryResponse> => {
  try {
    const data = await getRequest<CategoryResponse>("/categories");
    console.log("Categories data:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchCategories:", error);
    return {
      categories: [],
      total: 0,
    };
  }
};

export const fetchCategoryByName = async (
  name: string,
): Promise<Category | null> => {
  try {
    const data = await getRequest<Category>(
      `/categories/${encodeURIComponent(name)}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;
  }
};



export interface SaleProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonColor: "blue" | "green" | "gray" | "orange";
}

export interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  price?: number;
  badge?: "new" | "sale" | "popular";
}

interface FeaturedCategoriesResponse {
  data: Category[];
}

interface MostSalesProductsResponse {
  data: SaleProduct[];
}

interface AllCategoriesResponse {
  data: Category[];
}

interface RecommendedProductsResponse {
  data: Product[];
}

export const getFeaturedCategories = async (): Promise<Category[]> => {
  const response = await getRequest<FeaturedCategoriesResponse>(
    "/categories/featured",
  );
  return response.data;
};

export const getMostSalesProducts = async (): Promise<SaleProduct[]> => {
  const response = await getRequest<MostSalesProductsResponse>(
    "/products/most-sales",
  );
  return response.data;
};

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await getRequest<AllCategoriesResponse>("/categories/all");
  return response.data;
};

export const getRecommendedProducts = async (): Promise<Product[]> => {
  const response = await getRequest<RecommendedProductsResponse>(
    "/products/recommended",
  );
  return response.data;
};

export interface Category {
  id: number;
  name: string;
  description?: string | null;
  categoryImageUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
}
export interface Medicine {
  id: string;
  name: string;
  description: string;
  longDescription: string;

  price: number;
  discount?: number;

  imageUrl: string;
  images?: string[];

  categoryId: number;
  stock: number;
  rating?: number;
  salesCount?: number;

  sku: string;
  isActive: boolean;

  prescriptionRequired: boolean;

  form: string;
  packSize: string;

  ingredients?: string;
  directions?: string;
  warnings?: string;
  storage?: string;
}

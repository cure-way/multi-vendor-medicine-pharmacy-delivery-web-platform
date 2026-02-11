type SearchResultType = "medicine" | "pharmacy";
type FilterKey = "availability" | "delivery" | "pharmacy" | "prescription";

export type SearchResult = {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;

  isAvailable?: boolean;
  deliveryTimeMinutes?: number;
  pharmacyDistanceKm?: number;
  requiresPrescription?: boolean;

  /* Extended fields for full results page */
  image?: string;
  price?: number;
  originalPrice?: number;
  tags?: string[];
  pharmacyName?: string;
  pharmacyLocation?: string;
  pharmacyRating?: number;
  pharmacyDeliveryRange?: string;
};

export type SearchFilter = {
  key: FilterKey;
  label: string;
  description: string;
};

export type QuickAction = {
  id: string;
  label: string;
  icon?: string;
  count?: number;
};

export type NearbyPharmacy = {
  id: string;
  name: string;
  location: string;
  rating: number;
  deliveryRange: string;
  distance: string;
  price: number;
  freeDelivery: boolean;
};

export type SearchPageState =
  | "loading"
  | "results"
  | "no-results-filters"
  | "no-results-spelling"
  | "not-available-nearby"
  | "network-error"
  | "nearby-pharmacies";

export type ProductType = {
  name: string;
  description: string;
  gender: string;
  category: string;
  itemType: string;
  rating: number;
  reviewCount: number;
  highlights?: string[];
  subcategory: string;
  images: string[];
  details: DetailItem[];
  displayPrice: string;
  imageSrc: string;
  quantity: number;
  discountPrice?: number;
  originalPrice?: number;
  priceHistory?: Array<{
    date: string;
    price: number;
  }>;
  price?: string;
  badge?: string;
  viewCount: number;
  stockLevel: number;
};

export interface Tool {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  subtitle: string;
  introduction: string[];
}

export interface Toolkit {
  id: string;
  title: string;
  subtitle?: string;
  introduction?: string;
  description: string[];
  warningText?: string;
  href?: string;
  image?: string;
}

export type DetailItem = {
  name: string;
  items: {
    material: string[];
    construction: string[];
    sole: string;
    insole: string;
    style: string;
    care: string[];
    fabricType?: string;
    careInstructionsLink?: string;
  }[];
};

export type ProductFilters = {
  gender?: string;
  category?: string;
  subcategory?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  sizes?: string[];
  onSale?: boolean;
};

export type SortOption =
  | "price-low-to-high"
  | "price-high-to-low"
  | "newest"
  | "popular";

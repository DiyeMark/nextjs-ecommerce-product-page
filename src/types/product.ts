export interface ProductVariant {
  id: string;
  size: string;
  stock: number;
  color?: string;
}

export interface ProductReview {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
  color: string;
  size: string;
  likes: number;
  dislikes: number;
}

export interface ProductSpecification {
  packageDimensions?: string;
  features: string[];
  dateFirstAvailable: string;
  department: string;
}

export interface ColorImages {
  color: string;
  images: string[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  colorImages: ColorImages[];
  images: string[]; // Fallback/default images
  variants: ProductVariant[];
  unitsSold?: number;
  rating: {
    average: number;
    count: number;
    distribution: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
    satisfactionPercentage: number;
  };
  reviews: ProductReview[];
  specifications: ProductSpecification;
  seller: {
    name: string;
    imageUrl: string;
    isOfficial: boolean;
    location: string;
    rating: number;
    chatResponse: number;
  };
  colors?: string[];
} 
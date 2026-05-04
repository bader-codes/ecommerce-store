interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Product {
  _id: string;
  id: string;

  title: string;
  slug: string;
  description: string;

  price: number;
  priceAfterDiscount: number;
  quantity: number;
  sold: number;

  imageCover: string;
  images: string[];

  availableColors?: string[];

  category: Category;
  brand: Brand;
  subcategory: SubCategory[];

  ratingsAverage: number;
  ratingsQuantity: number;

  createdAt: string;
  updatedAt: string;
}
export interface Product {
  productId: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

export interface ProductSummary {
  productId: number;
  title: string;
  price: number;
  image: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}

import { Product } from "../types/product";

export async function getProductById(productId: number): Promise<Product> {
  const API_URL = `https://api.escuelajs.co/api/v1/products/${productId}`;
  const response = await fetch(API_URL);
  const product = await response.json();

  const { title, description, price, images, category } = product;

  return {
    title,
    description,
    price,
    images,
    category: category.name,
  };
}

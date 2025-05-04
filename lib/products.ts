import { Product, ProductSummary } from "../types/product";

export async function getAllProducts(): Promise<ProductSummary[]> {
  const API_URL =
    "https://api.escuelajs.co/api/v1/products?categorySlug=furniture";

  const response = await fetch(API_URL);
  const products = await response.json();

  return products.map((product: Product) => {
    const { productId, title, price, images, category } = product;
    return {
      productId,
      title,
      price,
      image: images[0], // Usamos solo la primera imagen
      category: category.name,
    };
  });
}

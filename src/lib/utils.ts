import { products } from "@/data/product";
import { productSchema } from "@/types/product";

export function getProductsByCategory(category: string) {
  return products.filter(
    (product: productSchema) => product.category === category
  );
}

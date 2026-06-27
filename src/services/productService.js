import { products } from "../data/products";
import { mockDelay } from "./api";

export const productService = {
  getProducts: () => mockDelay(products),
  getProductById: (id) => mockDelay(products.find((product) => product.id === id)),
  getByCategory: (category) => mockDelay(products.filter((product) => product.category === category))
};
